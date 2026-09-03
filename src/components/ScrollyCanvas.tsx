"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

// Frame sequence from frame_000 to frame_191
const frameCount = 192;
const imageUrls = Array.from({ length: frameCount }, (_, i) =>
  `/sequence/frame_${i.toString().padStart(3, "0")}_delay-0.041s.png`
);

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    // Preload images into memory
    const loadedImages: HTMLImageElement[] = [];

    imageUrls.forEach((url, i) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        // Option to check loading status
      };
      loadedImages[i] = img;
    });

    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const drawOntoCanvas = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Object-fit: cover calculation
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth, renderHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      renderWidth = canvas.width;
      renderHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderHeight = canvas.height;
      renderWidth = canvas.height * imgRatio;
      offsetY = 0;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dark background applied globally, but can fill black to be safe
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  }, []);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length > 0 && canvasRef.current) {
      const currentFrame = Math.min(Math.round(latest), frameCount - 1);
      const img = images[currentFrame];
      if (img && img.complete) {
        drawOntoCanvas(img);
      }
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && images.length > 0) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentIdx = Math.min(Math.round(frameIndex.get()), frameCount - 1);
        if (images[currentIdx]) {
          drawOntoCanvas(images[currentIdx]);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    // Initial setup with short delay for first images to load
    const timer = setTimeout(() => { handleResize(); }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [images, frameIndex, drawOntoCanvas]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#121212]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}

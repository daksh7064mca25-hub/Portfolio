"use client";

import { useEffect, useRef, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

// Frame sequence from frame_000 to frame_191
const frameCount = 192;
const getFrameUrl = (i: number) =>
  `/sequence/frame_${i.toString().padStart(3, "0")}_delay-0.041s.webp`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cache loaded images in a ref to avoid unnecessary re-renders
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(frameCount).fill(null));
  const lastRenderedIndex = useRef<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  const drawOntoCanvas = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !img.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ensure maximum bicubic/bilinear smoothing quality for crisp scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

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
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  }, []);

  // Helper to render the closest available loaded frame to prevent any blank flickering
  const renderClosestFrame = useCallback((targetIdx: number) => {
    const images = imagesRef.current;

    // 1. Direct hit
    if (images[targetIdx]?.complete && images[targetIdx]?.naturalWidth !== 0) {
      lastRenderedIndex.current = targetIdx;
      drawOntoCanvas(images[targetIdx]!);
      return;
    }

    // 2. Outward search for closest loaded frame
    for (let offset = 1; offset < frameCount; offset++) {
      const prev = targetIdx - offset;
      if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth !== 0) {
        lastRenderedIndex.current = prev;
        drawOntoCanvas(images[prev]!);
        return;
      }
      const next = targetIdx + offset;
      if (next < frameCount && images[next]?.complete && images[next]?.naturalWidth !== 0) {
        lastRenderedIndex.current = next;
        drawOntoCanvas(images[next]!);
        return;
      }
    }
  }, [drawOntoCanvas]);

  // Configure high-DPI canvas dimensions
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
  }, []);

  // Load and render Frame 0 IMMEDIATELY on mount + progressive batch loading
  useEffect(() => {
    updateCanvasDimensions();

    let isMounted = true;

    // 1. Load Frame 0 with highest priority and draw right away
    const frame0 = new Image();
    frame0.src = getFrameUrl(0);
    frame0.onload = () => {
      if (!isMounted) return;
      imagesRef.current[0] = frame0;
      if (canvasRef.current) {
        updateCanvasDimensions();
        drawOntoCanvas(frame0);
      }
    };

    // 2. High-priority batch (first 30 frames for immediate smooth scrolling)
    const loadEarlyFrames = () => {
      for (let i = 1; i < Math.min(30, frameCount); i++) {
        if (!isMounted) break;
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          if (!isMounted) return;
          imagesRef.current[i] = img;
        };
      }
    };

    // 3. Staggered background loading for the remaining frames
    const loadRemainingFrames = () => {
      const chunkSize = 20;
      let currentIndex = 30;

      const loadNextChunk = () => {
        if (!isMounted || currentIndex >= frameCount) return;

        const end = Math.min(currentIndex + chunkSize, frameCount);
        for (let i = currentIndex; i < end; i++) {
          const img = new Image();
          img.src = getFrameUrl(i);
          img.onload = () => {
            if (!isMounted) return;
            imagesRef.current[i] = img;
          };
        }
        currentIndex = end;
        if (currentIndex < frameCount) {
          setTimeout(loadNextChunk, 80);
        }
      };

      setTimeout(loadNextChunk, 150);
    };

    loadEarlyFrames();
    loadRemainingFrames();

    return () => {
      isMounted = false;
    };
  }, [drawOntoCanvas, updateCanvasDimensions]);

  // Handle scroll animation smoothly
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentFrame = Math.min(Math.max(0, Math.round(latest)), frameCount - 1);
    renderClosestFrame(currentFrame);
  });

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        updateCanvasDimensions();
        renderClosestFrame(Math.min(Math.max(0, Math.round(frameIndex.get())), frameCount - 1));
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, renderClosestFrame, updateCanvasDimensions]);

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

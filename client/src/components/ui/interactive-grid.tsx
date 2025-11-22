"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface InteractiveGridProps {
  className?: string;
}

export function InteractiveGrid({ className }: InteractiveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let points: { x: number; y: number; originX: number; originY: number }[] = [];
    
    // Configuration
    const gridSize = 40;
    const pointRadius = 1.5;
    const interactionRadius = 200;
    const returnSpeed = 0.1;
    const displaceStrength = 0.5; // Points move away from cursor

    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      
      // Initialize points
      points = [];
      for (let x = 0; x < innerWidth; x += gridSize) {
        for (let y = 0; y < innerHeight; y += gridSize) {
          points.push({
            x,
            y,
            originX: x,
            originY: y,
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections (optional, can be expensive)
      // ctx.beginPath();
      // ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
      
      points.forEach((point) => {
        // Calculate distance to mouse
        const dx = mouseX - point.x;
        const dy = mouseY - point.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          
          // Move point away from mouse
          const moveX = Math.cos(angle) * force * interactionRadius * displaceStrength;
          const moveY = Math.sin(angle) * force * interactionRadius * displaceStrength;
          
          point.x -= (point.x - (point.originX - moveX)) * returnSpeed;
          point.y -= (point.y - (point.originY - moveY)) * returnSpeed;
        } else {
          // Return to origin
          point.x -= (point.x - point.originX) * returnSpeed;
          point.y -= (point.y - point.originY) * returnSpeed;
        }

        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointRadius, 0, Math.PI * 2);
        // Cohere Green color for dots
        ctx.fillStyle = `rgba(20, 60, 40, ${Math.max(0.1, 1 - distance / 500)})`; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 z-0 pointer-events-none", className)}
    />
  );
}

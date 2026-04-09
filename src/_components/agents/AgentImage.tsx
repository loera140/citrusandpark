"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

interface AgentImageProps {
  src: string;
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const SIZES = {
  sm: "h-16 w-16",
  md: "h-32 w-32",
  lg: "h-40 w-40",
  xl: "h-48 w-48",
};

const ICON_SIZES = {
  sm: "h-6 w-6",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

export function AgentImage({ src, name, className = "", size = "md" }: AgentImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`${SIZES[size]} flex items-center justify-center rounded-full bg-grove/10 ${className}`}
      >
        <User className={`${ICON_SIZES[size]} text-grove/30`} />
      </div>
    );
  }

  return (
    <div className={`${SIZES[size]} relative overflow-hidden rounded-full ${className}`}>
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover"
        onError={() => setError(true)}
        sizes={size === "xl" ? "192px" : size === "lg" ? "160px" : size === "md" ? "128px" : "64px"}
      />
    </div>
  );
}

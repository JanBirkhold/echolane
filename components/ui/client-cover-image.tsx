import Image, { type ImageProps } from "next/image";
import type { ClientCover } from "@/lib/clients-covers";
import { cn } from "@/lib/utils";

type ClientCoverImageProps = Omit<ImageProps, "src" | "alt" | "unoptimized"> & {
  cover: ClientCover;
  alt?: string;
  className?: string;
};

export function ClientCoverImage({
  cover,
  alt = "",
  className,
  fill,
  ...props
}: ClientCoverImageProps) {
  return (
    <Image
      src={cover.src}
      alt={alt}
      width={fill ? undefined : cover.width}
      height={fill ? undefined : cover.height}
      fill={fill}
      unoptimized
      className={cn("object-cover", className)}
      {...props}
    />
  );
}

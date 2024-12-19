import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

export interface AvatarCirclesProps extends HTMLAttributes<HTMLDivElement> {
  numPeople?: number;
  avatarUrls: { image: string; name: string }[];
}

export default function AvatarCircles({
  numPeople,
  avatarUrls,
  className,
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((avatar, index) => (
        <Image
          key={index}
          src={avatar.image}
          alt={avatar.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border-2 border-background"
        />
      ))}
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white dark:border-gray-800 dark:bg-white dark:text-black">
        +{numPeople}
      </div>
    </div>
  );
}

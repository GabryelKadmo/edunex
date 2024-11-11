"use client";

import { ChevronLeft, ShareIcon } from "lucide-react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Course } from "@/types/course";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  title: string;
  data?: Course;
};
export const TitleBar = ({ title, data }: Props) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = data ? `Confira este curso: ${data.title}` : title;

  return (
    <div className="flex gap-4 items-center">
      <Button
        size={"icon"}
        variant={"ghost"}
        className="border"
        onClick={handleBack}
      >
        <ChevronLeft className="w-[100px] h-[100px]" />
      </Button>
      <h1 className="font-semibold text-base text-neutral-800 flex-1">{title}</h1>
      {data && (
        <Popover>
          <PopoverTrigger asChild>
            <Button size={"icon"} variant={"ghost"} className="border">
              <ShareIcon className="w-[100px] h-[100px]" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <div className="flex gap-2">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <LinkedinShareButton
                url={shareUrl}
                title={shareText}
                summary={shareText}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={shareText}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

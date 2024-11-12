import { Loader2 } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen md:h-full w-full md:pt-20 flex justify-center items-center text-primary">
      <Loader2 className="h-24 w-24 animate-spin" />
    </div>
  );
}
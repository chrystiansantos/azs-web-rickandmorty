import { Play } from "lucide-react";
import { NavigateButton } from "../atoms";

export function WatchNowButton() {
  return (
    <NavigateButton href={"/"}>
      Assista agora
      <Play className="size-4" fill="#52525c" />
    </NavigateButton>
  )
}
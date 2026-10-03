import "./StickyNote.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import IconPrepare from "../../assets/icon/JournalScript-Prepare.lottie";
import IconWishlist from "../../assets/icon/JournalScript-Wishlist.lottie";
import IconBadge from "../../assets/icon/JournalScript-Badge.lottie";
import IconExplore from "../../assets/icon/JournalScript-Explore.lottie";

export default function StickyNote() {
  return (
    <div class="sticky-note">
      <div class="note-pin"></div>
      <h3 class="note-title">JOURNEY SCRIPT</h3>
      <div class="note-content">
        <DotLottieReact
          className="icon-prepare"
          src={IconPrepare}
          loop
          autoplay
        />
        <DotLottieReact
          className="icon-wishlist"
          src={IconWishlist}
          loop
          autoplay
        />
        <DotLottieReact className="icon-badge" src={IconBadge} loop autoplay />
        <DotLottieReact
          className="icon-explore "
          src={IconExplore}
          loop
          autoplay
        />
        <svg width="400" height="400" viewBox="0 0 400 400">
          <path d="M 280 95 Q 330 95, 330 145" class="flow-line" />
          <path d="M 330 305 Q 330 355, 280 355" class="flow-line" />
          <path d="M 170 355 Q 120 355, 120 305" class="flow-line" />
          <path d="M 120 145 Q 120 95, 170 95" class="flow-line" />
        </svg>
      </div>
    </div>
  );
}

import React from "react";

export default function playVideo() {
  return (
    <div>
      <iframe
        src="https://youtu.be/dQw4w9WgXcQ?t=42"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />{" "}
    </div>
  );
}


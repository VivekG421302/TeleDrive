import React, { useRef } from "react";
import "./Story.css";

const images = [
  "https://images.unsplash.com/photo-1758671451540-58f5ef5a49ea?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1758720232954-9c7796c16ad1?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1758671451540-58f5ef5a49ea?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1758671451540-58f5ef5a49ea?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1758671451540-58f5ef5a49ea?w=500&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1758671451540-58f5ef5a49ea?w=500&auto=format&fit=crop&q=60",
];

function Story() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstChild.offsetWidth + 12; // 12 = gap
      containerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="storySection">
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        {"<"}
      </button>

      <div className="story-container" ref={containerRef}>
        {images.map((url, index) => (
          <div
            key={index}
            className="story-card"
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        {">"}
      </button>
    </div>
  );
}

export default Story;

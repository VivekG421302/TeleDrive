import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const ACCESS_KEY = "fTMImUiANqrG9j-BftkzWTuBTrIXedyWi6P8uDdOAVg";

function Gallery() {
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=12&client_id=${ACCESS_KEY}`
      );
      const data = await res.json();
      setImages((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchImages();
  }, []);

  // Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        fetchImages();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Render images incrementally
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create rows from only newly added images
    const newImages = images.slice(container.childElementCount);

    let row = [];
    let rowAspectRatio = 0;
    const rowHeight = 200;
    const containerWidth = container.offsetWidth;

    newImages.forEach((imgObj) => {
      const aspect = imgObj.width / imgObj.height;
      row.push({ src: imgObj.urls.small, aspect });
      rowAspectRatio += aspect;

      if (rowAspectRatio * rowHeight > containerWidth) {
        const scale = containerWidth / (rowAspectRatio * rowHeight);
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        row.forEach((item) => {
          const image = document.createElement("img");
          image.src = item.src;
          image.style.width = `${item.aspect * rowHeight * scale}px`;
          image.style.height = `${rowHeight * scale}px`;
          rowDiv.appendChild(image);
        });

        container.appendChild(rowDiv);
        row = [];
        rowAspectRatio = 0;
      }
    });
  }, [images]);

  return (
    <div>
      <h2 style={{ padding: "10px" }}>Gallery</h2>
      <div className="gallery" ref={containerRef}></div>
      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </div>
  );
}

export default Gallery;

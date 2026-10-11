"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PhotoSlot from "@/components/ui/PhotoSlot";
import { galleryCategories, galleryItems } from "@/data/gallery";

function Lightbox({ items, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const item = items[index];

  // Open as a native modal dialog: gives Escape-to-close, focus trapping and an inert background.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  const go = (step) => onChange((index + step + items.length) % items.length);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  };

  // Width keeps tall photos inside the viewport height.
  const ratio = item.width / item.height;
  const frameStyle = { width: `min(90vw, calc(78vh * ${ratio}))` };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox m-auto max-h-none max-w-none bg-transparent p-0 text-ivory backdrop:bg-espresso/90"
      aria-label={`Photo viewer: ${item.alt}`}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      onClick={(event) => {
        if (event.target === dialogRef.current) dialogRef.current.close();
      }}
    >
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="flex w-full items-center justify-between" style={frameStyle}>
          <p className="text-xs uppercase tracking-[0.2em] text-ivory/70">
            {index + 1} / {items.length}
          </p>
          <button
            type="button"
            onClick={() => dialogRef.current.close()}
            className="p-2 text-ivory hover:text-gold"
            aria-label="Close photo viewer"
          >
            <X size={26} aria-hidden="true" />
          </button>
        </div>

        <div className="relative" style={frameStyle}>
          <PhotoSlot
            image={item}
            category={item.category}
            sizes="90vw"
            ratio={`${item.width} / ${item.height}`}
          />
          {items.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-espresso/70 p-2.5 text-ivory hover:bg-gold-dark"
              >
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-espresso/70 p-2.5 text-ivory hover:bg-gold-dark"
              >
                <ChevronRight size={22} aria-hidden="true" />
              </button>
            </>
          ) : null}
        </div>

        <p className="max-w-xl text-center text-sm text-ivory/80" style={frameStyle}>
          {item.alt}
          {item.label ? <span className="text-gold"> · {item.label}</span> : null}
        </p>
      </div>
    </dialog>
  );
}

export default function GalleryGrid() {
  const [category, setCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const visibleCategories = galleryCategories.filter(
    (cat) => cat.id === "all" || galleryItems.some((item) => item.category === cat.id),
  );
  const items =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter portfolio by category"
        className="flex flex-wrap gap-2"
      >
        {visibleCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            aria-pressed={category === cat.id}
            onClick={() => setCategory(cat.id)}
            className={`border px-5 py-2.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] transition-colors ${
              category === cat.id
                ? "border-espresso bg-espresso text-ivory"
                : "border-champagne bg-paper text-espresso hover:border-gold"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-espresso/60" aria-live="polite">
        Showing {items.length} {items.length === 1 ? "look" : "looks"}
      </p>

      <ul className="masonry mt-6">
        {items.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger: ${item.alt}`}
              className="group block w-full text-left"
            >
              <div className="overflow-hidden">
                <PhotoSlot
                  image={item}
                  category={item.category}
                  className="transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <span className="mt-2 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.18em] text-espresso/55">
                <span className="capitalize">{item.category}</span>
                {item.label ? <span>{item.label}</span> : null}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {activeIndex !== null && items[activeIndex] ? (
        <Lightbox
          items={items}
          index={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      ) : null}
    </div>
  );
}

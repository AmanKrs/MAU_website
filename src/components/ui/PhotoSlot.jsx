import Image from "next/image";

const tones = {
  bridal: "from-blush via-champagne to-ivory",
  engagement: "from-champagne via-blush to-ivory",
  party: "from-champagne via-ivory to-blush",
  hairstyling: "from-ivory via-champagne to-blush",
  artist: "from-blush via-ivory to-champagne",
};

/**
 * Shows a real photograph through next/image when `image.src` is set.
 * Until then it shows a quiet branded placeholder, never a stock or AI image.
 *
 * Give the parent an aspect ratio (e.g. via `ratio`) — the image fills it.
 */
export default function PhotoSlot({
  image,
  category = "artist",
  ratio,
  sizes = "(min-width: 1024px) 33vw, (min-width: 560px) 50vw, 100vw",
  priority = false,
  className = "",
}) {
  const aspect =
    ratio || (image?.width && image?.height ? `${image.width} / ${image.height}` : "4 / 5");

  return (
    <div
      className={`relative w-full overflow-hidden bg-champagne ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {image?.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={image?.alt || "Photograph to be added"}
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${tones[category] || tones.artist}`}
        >
          <span className="font-serif text-4xl text-gold/80 sm:text-5xl">PV</span>
          <span className="mt-2 h-px w-10 bg-gold/60" />
        </div>
      )}
    </div>
  );
}

import PhotoSlot from "@/components/ui/PhotoSlot";
import { artist } from "@/data/artist";

export default function VideoPreview() {
  const video = artist.featuredVideo;

  return (
    <section className="bg-paper" aria-labelledby="video-preview-heading">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">Behind the scenes</p>
        <h2 id="video-preview-heading" className="display-md mt-4">
          A glimpse in motion.
        </h2>
        <span className="rule-gold mt-6 block" aria-hidden="true" />
        <div className="mt-10 max-w-4xl">
          {video?.src ? (
            <video
              className="aspect-video w-full bg-espresso object-cover"
              controls
              playsInline
              preload="metadata"
              poster={artist.heroImage?.src}
              aria-label="Makeup artistry video"
            >
              <source src={video.src} />
              Your browser does not support embedded videos.
            </video>
          ) : (
            <>
              <PhotoSlot
                image={artist.heroImage}
                category="artist"
                ratio="16 / 9"
                sizes="(min-width: 1024px) 80vw, 100vw"
              />
              <p className="mt-3 text-sm text-espresso/65">
                Temporary video preview. To add a video, place it at{" "}
                <code className="rounded bg-champagne px-1.5 py-0.5">
                  public/videos/replace-with-your-video.mp4
                </code>{" "}
                and set <code>featuredVideo</code> in{" "}
                <code>src/data/artist.js</code>.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

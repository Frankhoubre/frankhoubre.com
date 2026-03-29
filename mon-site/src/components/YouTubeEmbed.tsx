type Props = {
  videoId: string;
  title?: string;
};

export function YouTubeEmbed({ videoId, title = "Vidéo YouTube" }: Props) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}`;
  return (
    <div className="my-8 aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
      <iframe
        className="h-full w-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

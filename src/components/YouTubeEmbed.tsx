type Props = {
  videoId: string;
  title?: string;
};

export function YouTubeEmbed({ videoId, title = "Vidéo YouTube" }: Props) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}`;
  return (
    <div className="frame not-prose my-10 aspect-video w-full">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

export const Youtube = ({ videoId }) => {
  <AspectRatio>
    <iframe
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
  </AspectRatio>

}
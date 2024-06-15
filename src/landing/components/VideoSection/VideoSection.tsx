import './VideoSection.css';

const VideoSection = ({ videoId }: { videoId: string }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="videosection__general">
      <iframe
        className="videosection__youtube"
        src={youtubeUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoSection;


import PropTypes from 'prop-types'; // Importez PropTypes

const YouTubeVideo = ({ videoId }) => {
    return (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  YouTubeVideo.propTypes = {
    videoId: PropTypes.string.isRequired, // Indique que videoId est une chaîne de caractères et est requis
  };
  
  export default YouTubeVideo;
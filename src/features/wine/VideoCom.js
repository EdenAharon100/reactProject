import { useEffect,useRef } from "react";
import "./VideoCom.css"

const VideoCom = () => {

    const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      // Restart the video after 3 seconds
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
      }, 1000);
    };

    video.addEventListener('ended', handleVideoEnd);

    // Cleanup event listener on component unmount
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);


    return ( <>
        <div className="allVT">
            <div className="videoDiv">
                <video ref={videoRef} autoPlay controls={false} muted>
                  <source src={`${process.env.PUBLIC_URL}/example.mp4`} type="video/mp4" />
            </video>
            </div>
            <div className="textDiv">
                <h2>יינות משובחים</h2>
                <h3>מבצעים בקרוב</h3>
            </div>
        </div> </>);
}
 
export default VideoCom;
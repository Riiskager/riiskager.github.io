// import baggrund from "../assets/ps3Baggrund.mp4"
import baggrund2 from "../assets/Baggrund.svg"
export default function VideoBg(){
    return(
        <div className="bg-billede">
            <img src={baggrund2}></img>
        </div>
        // <div className="bg-video">
        //     <video autoPlay muted loop id="bg-video">
        //         <source src={baggrund} type="video/mp4"/>
        //         Your browser does not support HTML5 video
        //     </video>
        // </div>
    )
}
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud} from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";
import {faSpotify} from "@fortawesome/free-brands-svg-icons/faSpotify";
import {faMixcloud} from "@fortawesome/free-brands-svg-icons/faMixcloud";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";

export default props => {
    let icon;

    switch (props.icon) {
        case "soundcloud":
            icon = faSoundcloud;
            break;
        case "facebook":
            icon = faFacebook;
            break;
        case "youtube":
            icon = faYoutube;
            break;
        case "spotify":
            icon = faSpotify;
            break;
        case "mixcloud":
            icon = faMixcloud;
            break;
        case "instagram":
            icon = faInstagram;
            break;
        case "twitter":
            icon = faTwitter;
            break;
    }

    return (
        <a href={props.link} target="_blank" className={props.size === "small" ? "small" : "big"}>
            <div className={"outer"}>
                <FontAwesomeIcon icon={icon} size={props.size === "small" ? "3x" : "3x"}/>
            </div>
            <style jsx>{`
              .big {
                height: 3rem;
                width: 3rem;
              }
              
              .small {
                height: 2rem;
                width: 2rem;
              }

              .outer {
                height: 100%;
                display: flex;
                justify-content: center;
              }
            `}</style>
        </a>
    )
}
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";

export default () => (
    <div className="bannerContainer">
        <div className="container">
            <div className="banner text-light">
                <div>Hey, I am</div>
                <h1>Daniel</h1>
                <p>Full-Stack Developer & Producer / DJ</p>
                <div className="socialIcons">
                    <a href="https://linkedin.com/in/daniel-schmitz-dev" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                    <a href="https://github.com/danielschm" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                    <a href="https://instagram.com/daniel_schm" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="lg"/>
                    </a>
                    <a href="https://twitter.com/danschmitzdev" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="lg"/>
                    </a>
                </div>
            </div>
            <a style={{"margin-left": 0}}
               href={"https://open.spotify.com/artist/3vyCP0adxYp2fP4w9ZzVL8?si=rGuUg40hT_elRVIe4A6kqQ"}
               target={"_blank"}>
                <Button className="bannerButton">
                    <span>Check Out My Music</span>
                    {/*<FontAwesomeIcon className="navIcon" icon={faArrowRight}/>*/}
                </Button>
            </a>
            <Link href="/about" passHref>
                <a>
                    <Button id="secondaryButton" style={{background: "transparent"}}>
                        <span>About Me</span>
                    </Button>
                </a>
            </Link>
        </div>
        <style jsx>{`
            .bannerContainer {
                flex: 1;
            }
            
            .banner {
                padding-top: 15%;
            }
            
            h1 {
                text-transform: uppercase;
            }
            
            p {
                color: var(--gray);
                width: 18rem;
                margin-top: 1rem;
                padding: 0.5rem 0 0.5rem 0;
                border-top: 1px solid rgba(255,255,255,0.2);
                border-bottom: 1px solid rgba(255,255,255,0.2);
                transition: color 1000ms ease;
            }
            
            p:hover {
                color: lightgray;
            }
            
            .socialIcons {
                margin-bottom: 1.5rem;
            }
            
            .socialIcons a:first-child {
                margin-left: 0;
            }
            
            a {
                color: var(--gray);
                margin: 0 12px;
                transition: color 600ms ease;
            }
            
            a:hover {
                color: var(--primary);
            }
            
            .bannerButton {
                font-weight: 500 !important;
            }
            
            .textMargin {
                margin-right: 0.5rem;
            }
        `}</style>
    </div>
);


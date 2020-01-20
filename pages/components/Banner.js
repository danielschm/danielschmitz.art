import Link from "next/link";
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
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
                <p>Developer & Producer / DJ</p>
                <div className="socialIcons">
                    <a href="https://linkedin.com/in/daniel-schmitz-dev" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="1x"/>
                    </a>
                    <a href="https://github.com/danielschm" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="1x"/>
                    </a>
                    <a href="https://instagram.com/daniel_schm" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="1x"/>
                    </a>
                    <a href="https://twitter.com/danschmitzdev" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="1x"/>
                    </a>
                </div>
            </div>
            <Link href="/about" passHref>
                <Button className="aboutButton">
                    <span className="buttonText">About</span>
                    <FontAwesomeIcon className="navIcon" icon={faArrowRight}/>
                </Button>
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
                width: 14rem;
                margin-top: 1rem;
                padding: 0.5rem 0 0.5rem 0;
                border-top: 1px solid rgba(255,255,255,0.1);
                border-bottom: 1px solid rgba(255,255,255,0.1);
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
                transition: color 300ms ease;
            }
            
            a:hover {
                color: var(--primary);
            }
            
            .aboutButton {
                font-weight: 500 !important;
            }
            
            .buttonText {
                margin-right: 0.5rem;
            }
        `}</style>
    </div>
);


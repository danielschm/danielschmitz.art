import Page from "./components/Page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import openMail from "./components/Mail";

export default () => (
    <Page page={"Contact"} navBack={true}>
        <div className="socialIcons">
            <a onClick={openMail}
               title={"Contact me via email"} target="_blank">
                <FontAwesomeIcon className={"icon"} icon={faEnvelope}/>
                Email
            </a>
            <a href="https://linkedin.com/in/daniel-schmitz-dev" target="_blank">
                <FontAwesomeIcon className={"icon"} icon={faLinkedin}/>
                LinkedIn
            </a>
            <a href="https://github.com/danielschm" target="_blank">
                <FontAwesomeIcon className={"icon"} icon={faGithub}/>
                GitHub
            </a>
            <a href="https://instagram.com/daniel_schm" target="_blank">
                <FontAwesomeIcon className={"icon"} icon={faInstagram}/>
                Instagram
            </a>
            <a href="https://twitter.com/danschmitzdev" target="_blank">
                <FontAwesomeIcon className={"icon"} icon={faTwitter}/>
                Twitter
            </a>
        </div>
        <style jsx>{`
          .socialIcons {
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
          }

          .socialIcons a:first-child {
            margin-left: 0;
          }

          .socialIcons a {
            padding: 1rem;
            gap: 1rem;
            display: flex;
            align-items: center;
            cursor: pointer;
          }

        `}</style>
    </Page>
);
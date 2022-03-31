import Page from "../components/Page";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import MailLink from "../components/Mail";

export default () => (
    <Page page={"Contact"} navBack={true}>
        <br/>
        <div className="socialIcons">
            <MailLink
                title={"Contact me via email"} target="_blank">
                <FontAwesomeIcon className={"icon"} icon={faEnvelope}/>
                Email
            </MailLink>
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
        <style jsx global>{`
          .socialIcons {
            margin-bottom: 1.5rem;
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 1fr;
            flex-direction: column;
          }

          @media (max-width: 500px) {
            .socialIcons {
              grid-template-columns: 1fr;
            }
          }

          .socialIcons a:first-child {
            margin-left: 0;
          }

          .socialIcons a {
            padding: 1rem;
            border: 1px solid var(--foreground);
            border-radius: 10px;
            gap: 2rem;
            display: flex;
            align-items: center;
            cursor: pointer;
          }

        `}</style>
    </Page>
);
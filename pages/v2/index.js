import Page from "./components/Page";
import Section from "./components/Section";
import Banner from "./components/Banner";
import BannerLink from "./components/BannerLink";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Index = () => (
    <Page>
        <Banner>
            <div className={"links"}>
                <BannerLink emphasized={true} href={"/v2/contact"}>Contact</BannerLink>
                <BannerLink href={"/v2/music"}>Music</BannerLink>
                <BannerLink href={"/v2/scoring"}>Scoring</BannerLink>
                <BannerLink href={"/v2/development"}>Development</BannerLink>
                <BannerLink href={"/v2/about"}>About</BannerLink>
            </div>
        </Banner>
        <style jsx>{`
          .links {
            display: flex;
            max-width: 80rem;
            width: 100%;
            justify-content: space-around;
          }

          @media (max-width: 1000px) {
            .links {
              flex-direction: column;
            }
          }
        `}</style>
    </Page>
);

export default Index;
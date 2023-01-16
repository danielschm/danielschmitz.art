import Banner from "../components/Banner";
import BannerLink from "../components/BannerLink";
import Page from "../components/Page";

const Index = () => (
    <Page>
        <Banner>
            <div className={"links"}>
                <BannerLink emphasized={true} href={"/contact"}>Contact</BannerLink>
                <BannerLink href={"/music"}>Music</BannerLink>
                <BannerLink href={"/scoring"}>Scoring</BannerLink>
                {/*<BannerLink href={"/development"}>Development</BannerLink>*/}
                <BannerLink href={"/about"}>About</BannerLink>
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
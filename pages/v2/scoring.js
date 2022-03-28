import Page from "./components/Page";
import ShowcaseObject from "./components/ShowcaseObject";
import PortfolioReference from "../components/PortfolioReference";

export default () => (
    <Page page={"Scoring"} navBack={true}>
            <p>
                <span>Attention!</span> I make music in <i>different genres</i> under several pseudonyms. You can find
                them below.
            </p>
            <div className={"cards"}>
                <ShowcaseObject
                    size={"big"}
                    title="The Whiskey's Gambit"
                    subtitle="Singold Whiskey - The Whiskey's Gambit (Advertising Film)"
                    img="portfolio/whisky.jpg"
                    link="https://vimeo.com/659653665"
                    year="2021"/>
                <ShowcaseObject
                    size={"big"}
                    title="Eternal"
                    subtitle="Eternal (Short Film)"
                    img="portfolio/eternal.jpg"
                    link="https://vimeo.com/nicolaisagasser/eternal"
                    year="2020"/>
                <ShowcaseObject
                    size={"big"}
                    title="Heaven and Earth"
                    subtitle="CGI-based Short Film 'Heaven and Earth'"
                    img="portfolio/heavenandearth.jpg"
                    link="https://www.youtube.com/watch?v=0yyJm-L-W5w&"
                    year="2016"
                />
            </div>
        <style jsx>{`
          span {
            color: var(--tint);
          }

          .cards {
            margin-top: 20px;
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr;
          }

          @media (max-width: 1000px) {
            .cards {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
    </Page>
);
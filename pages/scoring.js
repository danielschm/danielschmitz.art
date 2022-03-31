import Page from "../components/Page";
import ScoreCard from "../components/ScoreCard";
import Link from "next/link";

export default () => (
    <Page page={"Scoring"} navBack={true}>
        <p>
            In this list you can find all public films I composed the score for. You can also check out my orchestral /
            score music on <a href={"https://open.spotify.com/artist/3mLcEp0Na8mP6ZyX7abcSG?si=uQU5lS8QTyi32LjO1axCHg"}
                              target={"_blank"}>Spotify</a> or check out the other social media links of my <Link href={"/music/film-score"}>film composer profile</Link>.
        </p>
        <div className={"cards"}>
            <ScoreCard
                title="The Whiskey's Gambit"
                subtitle="Advertising Film by Nicolai Sagasser"
                img="portfolio/whisky.jpg"
                link="https://vimeo.com/659653665"
                year="2021"/>
            <ScoreCard
                title="Eternal"
                subtitle="Short Film by Nicolai Sagasser"
                img="portfolio/eternal.jpg"
                link="https://vimeo.com/nicolaisagasser/eternal"
                year="2020"/>
            <ScoreCard
                title="Heaven and Earth"
                subtitle="Short Film by Jonas Steinacker"
                img="portfolio/heavenandearth.jpg"
                link="https://www.youtube.com/watch?v=0yyJm-L-W5w&"
                year="2016"
            />
            <ScoreCard
                title="Protectors of the Earth"
                subtitle="LEGO Stop Motion Movie by Jonas Steinacker"
                img="portfolio/legomovie.jpg"
                link="https://www.youtube.com/watch?v=zDKUIaeSmow&"
                year="2015"
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
import Page from "./components/Page";
import ShowcaseGallery from "./components/ShowcaseGallery";
import ShowcaseObject from "./components/ShowcaseObject";

export default () => (
    <Page page={"Music"} navBack={true}>
        <p>
            <span>Attention!</span> I make music in <i>different genres</i> under several pseudonyms. You can find
            them below.
        </p>
        <div className={"cards"}>
            <ShowcaseObject
                title={"Geocentric Fools"}
                subtitle={"Synth-Pop"}
                img={"music/geocentricfools.jpg"}
                link={"geocentricfools"}
                spotify={"https://open.spotify.com/artist/0w1oFjdkV5h4OQG8q8htZK"}
                facebook={"https://www.facebook.com/geocentricfools"}/>
            <ShowcaseObject
                title={"Daniel Schmitz"}
                subtitle={"Film Score"}
                img={"music/dsm.jpg"}
                link={"film-score"}
                spotify={"https://open.spotify.com/artist/3mLcEp0Na8mP6ZyX7abcSG?si=uQU5lS8QTyi32LjO1axCHg"}
                facebook={"https://www.facebook.com/danielschmitzmusic"}/>
            <ShowcaseObject
                title={"NOVAH"}
                subtitle={"Electronic Beats"}
                img={"music/novah.jpg"}
                link={"novah"}
                spotify={"https://open.spotify.com/artist/3vyCP0adxYp2fP4w9ZzVL8"}
                facebook={"https://www.facebook.com/novahmusic"}/>
            <ShowcaseObject
                title={"Elrajas"}
                subtitle={"Techno"}
                img={"music/elrajas.jpg"}
                link={"elrajas"}
                spotify={"https://open.spotify.com/artist/1Dtnpnv1YJ5sMz2cV1yOy6?si=7jb9q03oQWab7GNoHIyueQ"}
                facebook={"https://www.facebook.com/elrajasmusic"}/>
            <ShowcaseObject
                title={"Dasattva"}
                subtitle={"Psytrance"}
                img={"music/dasattva.jpg"}
                link={"dasattva"}
                spotify={"https://open.spotify.com/artist/13VjztEYAsdeFzhBfXC3RN?si=pyh1my8tT3yTUCTEKRCcjw"}
                facebook={"https://www.facebook.com/dasattva"}/>
            <ShowcaseObject
                title={"Nitamas"}
                subtitle={"DnB & Dubstep"}
                img={"music/nitamas.jpg"}
                link={"nitamas"}
                spotify={"https://open.spotify.com/artist/0RBc8jcD57fGrJ3uXiwNFA?si=nfd-VB5UQsyPjYHMj6JL8w"}
                facebook={"https://www.facebook.com/nitamasmusic"}/>
        </div>
        <style jsx>{`

          span {
            color: var(--tint);
          }

          .cards {
            margin-top: 20px;
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr 1fr;
          }

          @media (max-width: 1000px) {
            .cards {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
    </Page>
);
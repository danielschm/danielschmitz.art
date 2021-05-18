import Page from "./components/Page";
import Title from "./components/includes/Title";

import Container from "react-bootstrap/Container";
import MusicCard from "./components/MusicCard";
import CustomContainer from "./components/CustomContainer";

const Index = () => (
    <Page>
        <Title page="Music"/>
        <Container>
            <h1>My Current Projects</h1>
            <MusicCard
                title={"Geocentric Fools"}
                subtitle={"Synth-Pop, Indie-Pop, 80s"}
                logo={"geocentricfools.jpg"}
                link={"geocentricfools"}
                spotify={"https://open.spotify.com/artist/0w1oFjdkV5h4OQG8q8htZK"}
                facebook={"https://www.facebook.com/geocentricfools"}/>
            <MusicCard
                title={"Daniel Schmitz"}
                subtitle={"Film Score"}
                logo={"dsm.jpg"}
                link={"film-score"}
                spotify={"https://open.spotify.com/artist/3mLcEp0Na8mP6ZyX7abcSG?si=uQU5lS8QTyi32LjO1axCHg"}
                facebook={"https://www.facebook.com/danielschmitzmusic"}/>
            <MusicCard
                title={"NOVAH"}
                subtitle={"Electronic Music & Beats"}
                logo={"novah.jpg"}
                link={"novah"}
                spotify={"https://open.spotify.com/artist/3vyCP0adxYp2fP4w9ZzVL8"}
                facebook={"https://www.facebook.com/novahmusic"}/>
            <MusicCard
                title={"Elrajas"}
                subtitle={"Organica, Tribal and Cyber Techno"}
                logo={"elrajas.jpg"}
                link={"elrajas"}
                spotify={"https://open.spotify.com/artist/1Dtnpnv1YJ5sMz2cV1yOy6?si=7jb9q03oQWab7GNoHIyueQ"}
                facebook={"https://www.facebook.com/elrajasmusic"}/>
            <MusicCard
                title={"Dasattva"}
                subtitle={"Cinematic Goa & Psytrance"}
                logo={"dasattva.jpg"}
                link={"dasattva"}
                spotify={"https://open.spotify.com/artist/13VjztEYAsdeFzhBfXC3RN?si=pyh1my8tT3yTUCTEKRCcjw"}
                facebook={"https://www.facebook.com/dasattva"}/>
            <MusicCard
                title={"Nitamas"}
                subtitle={"Oriental Dubstep & Trap"}
                logo={"nitamas.jpg"}
                link={"nitamas"}
                spotify={"https://open.spotify.com/artist/0RBc8jcD57fGrJ3uXiwNFA?si=nfd-VB5UQsyPjYHMj6JL8w"}
                facebook={"https://www.facebook.com/nitamasmusic"}/>
        </Container>
        <style jsx>{`
            h1 {
                margin-bottom: 1.5rem;
            }
        `}</style>
    </Page>
);

export default Index;
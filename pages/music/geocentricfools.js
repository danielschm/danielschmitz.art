import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage
        page={"Geocentric Fools"}
        img={"geocentricfools.jpg"}
        subtitle={"Synth-Pop"}
        spotify={"https://open.spotify.com/artist/0w1oFjdkV5h4OQG8q8htZK"}
        soundcloud={"https://www.soundcloud.com/geocentricfools"}
        instagram={"https://www.instagram.com/geocentricfools"}
        facebook={"https://www.facebook.com/geocentricfools"}
        youtube={"https://www.youtube.com/channel/UC7PEKkhCaDoLMfEo0H-apeg"}
        twitter={"https://www.twitter.com/geocentricfools"}>
        <div className="description">
            Geocentric Fools is a Synth-Pop project consisting of Matt Platypus (singer) and me (producer). We combine
            synthesizer packed beats with psychedelic and crazy lyrics. Read more about it at <a
            href="https://geocentricfools.com/about/us" target="_blank">www.geocentricfools.com</a>.
        </div>
    </MusicPage>
);

export default Index;

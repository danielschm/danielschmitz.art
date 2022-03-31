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
        youtube={"https://www.youtube.com/channel/UCfN8lJJeDvrQzxjKiMRgZvw"}
        twitter={"https://www.twitter.com/geocentricfools"}>
        <div className="description">
            Geocentric Fools is a Synth-Pop duo consisting of Matt Platypus and Dan Leo (me). <br/>
            This is my most recent project so feel free to read more about it at <a
            href="https://geocentricfools.com/about/us" target="_blank">www.geocentricfools.com</a>.
        </div>
    </MusicPage>
);

export default Index;
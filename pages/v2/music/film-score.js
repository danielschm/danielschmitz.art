import MusicPage from "./MusicPage";
import Link from "next/link";

const Index = () => (
    <MusicPage
        page={"Film Score"}
        img={"dsm.jpg"}
        subtitle={"And Orchestral Music"}
        spotify={"https://open.spotify.com/artist/3mLcEp0Na8mP6ZyX7abcSG?si=uQU5lS8QTyi32LjO1axCHg"}
        soundcloud={"https://www.soundcloud.com/danielschmitzmusic"}
        facebook={"https://www.facebook.com/danielschmitzmusic"}
        youtube={"https://www.youtube.com/channel/UCfN8lJJeDvrQzxjKiMRgZvw"}>
        <div className="description">
            As the artist "Daniel Schmitz" I'm sharing my film score compositions. I especially like composing
            Fantasy, Celtic and Emotional Symphonic Orchestral Music.<br/>
            For the last {new Date().getFullYear() - 2014} years I have been involved in <Link href="/v2/scoring"
                                                                                               passHref><a>film
            projects</a></Link> where I have produced the score or been responsible for the sound design and sound
            mixing.
        </div>
    </MusicPage>
);

export default Index;
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
            As the artist "Daniel Schmitz" I'm sharing my film score compositions. I focus on emotional symphonic
            orchestral music but I love combining my skills from other genres to flexibly adapt my music to needs of the
            film.<br/>
            For the last {new Date().getFullYear() - 2014} years I have worked on <Link href="/scoring" passHref>film
            projects</Link> where I produced the score or was responsible for the sound design and sound
            mixing.
        </div>
    </MusicPage>
);

export default Index;
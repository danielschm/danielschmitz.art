import MusicPage from "./MusicPage";
import Link from "next/link";

const Index = () => (
    <MusicPage
        page={"Dasattva"}
        img={"dasattva.jpg"}
        subtitle={"Psytrance"}
        spotify={"https://open.spotify.com/artist/13VjztEYAsdeFzhBfXC3RN?si=pyh1my8tT3yTUCTEKRCcjw"}
        soundcloud={"https://www.soundcloud.com/dasattva"}
        mixcloud="https://www.mixcloud.com/dasattva"
        instagram="https://www.instagram.com/dasattva"
        youtube="https://www.youtube.com/channel/UC0XCV9CaE3kTwpsZk0UeNSw"
        facebook={"https://www.facebook.com/dasattva"}>
        <div className="description">
            Under the name of Dasattva I publish Goa / Psy / Psytrance tracks in combination with film score. Just
            like <Link href="/music/elrajas" passHref>Elrajas</Link> and <Link href="/music/Nitamas"
                                                                               passHref>Nitamas</Link> the alias was
            created in 2018.
        </div>
    </MusicPage>
);

export default Index;
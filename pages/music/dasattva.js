import MusicPage from "./MusicPage";

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
            Dasattva was created in 2018 and includes everything concerned with Goa / Psy / Psytrance in combination
            with Film Score.
        </div>
    </MusicPage>
);

export default Index;
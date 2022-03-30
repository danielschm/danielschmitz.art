import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage
        page={"Elrajas"}
        img={"elrajas.jpg"}
        subtitle={"Techno"}
        spotify={"https://open.spotify.com/artist/1Dtnpnv1YJ5sMz2cV1yOy6?si=7jb9q03oQWab7GNoHIyueQ"}
        soundcloud={"https://www.soundcloud.com/elrajas"}
        mixcloud="https://www.mixcloud.com/elrajas"
        instagram="https://www.instagram.com/elrajasmusic"
        facebook={"https://www.facebook.com/elrajasmusic"}>
        <div className="description">
            Elrajas was created in 2018 for Techno music with tribal and world music influences.
        </div>
    </MusicPage>
);

export default Index;
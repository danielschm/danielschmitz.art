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
            The alias Elrajas was created in 2018 for Techno music. In 2021 I released my first single as a
            collaboration with <a href={"https://nagelsbaum.de/"} target={"_blank"}>Nagelsbaum</a> called <a
            href={"https://open.spotify.com/track/3G0oxIIwGXH1x2rICEmBbs?si=ad54cb762da24403"} target={"_blank"}>Zeit
            hat eine andere Bedeutung in diesem Haus</a>. The track gained more than 500k streams in 2021 and 2022 so we
            continued to release singles in that style.<br/>
            In 2022 we had our first official gig in Karlsruhe playing in front of
            300 people to play our own music. You can <a href={"https://www.youtube.com/watch?v=d-UjVLVON6Q&"} target={"_blank"}>listen to the set on YouTube</a>.
        </div>
    </MusicPage>
);

export default Index;
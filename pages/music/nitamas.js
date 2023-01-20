import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage
        page={"Nitamas"}
        img={"nitamas.jpg"}
        subtitle={"DnB & Dubstep"}
        spotify={"https://open.spotify.com/artist/0RBc8jcD57fGrJ3uXiwNFA?si=nfd-VB5UQsyPjYHMj6JL8w"}
        soundcloud={"https://www.soundcloud.com/nitamas"}
        instagram={"https://www.instagram.com/nitamasmusic"}
        facebook={"https://www.facebook.com/nitamasmusic"}
        twitter={"https://www.twitter.com/nitamasmusic"}
        mixcloud={"https://www.mixcloud.com/nitamas"}>
        <div className="description">
            Nitamas is about everything bass-related. The alias was created in 2018 and covers everything concerned with
            Dubstep / DnB / Trap usually combined with ethnic, oriental and asian sounds.
        </div>
    </MusicPage>
);

export default Index;
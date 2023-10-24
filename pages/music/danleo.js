import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage
        page={"Dan Leo"}
        img={"danleo.jpg"}
        subtitle={"Synth Pop"}
        spotify={"https://open.spotify.com/intl-de/artist/6DkFRv8NQ7lP5CUJsvhPRx?si=_8HZfh5MQASMBQAaCnNhqA"}
        youtube={"https://www.youtube.com/@DanLeoMusic"}
        instagram="https://www.instagram.com/danleoart">
        <div className="description">
            Dan Leo is my latest project. It's a Synth Pop project with an AI-infused sound. My goal is to blur the boundaries between AI and humanity.
            My <a href="https://www.youtube.com/watch?v=vV5ib4jRrPU" target="_blank">debut music video</a> was shown in Tokyo, Shibuya (July 2023).
            More information on <a href="https://www.instagram.com/danleoart" target="_blank">Instagram</a>.
        </div>
    </MusicPage>
);

export default Index;

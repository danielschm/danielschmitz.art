import MusicPage from "./MusicPage";

const Index = () => (
    <MusicPage
        page={"NOVAH"}
        img={"novah.jpg"}
        subtitle={"Electronic Beats"}
        spotify={"https://open.spotify.com/artist/3vyCP0adxYp2fP4w9ZzVL8"}
        soundcloud={"https://www.soundcloud.com/novahofficial"}
        facebook={"https://www.facebook.com/novahmusic"}
        youtube={"https://www.youtube.com/c/novahmusic"}
        twitter={"https://www.twitter.com/novahofficial"}>
        <div className="description">
            <p>
                When I started producing music in 2012 I called myself NovahMedia. Some time later I changed
                the name to NOVAH. "NOVAH", which is derived from the root word "new" in a lot of languages,
                stands for trying out something new any time. I picked this name, because I realized quite early
                that I enjoy a lot of different music genres.
            </p>
            <p>
                It started with a kind of "Film Score" music and "Chill
                Beats" and developed into Electro House and Dubstep in 2014.
                My friendship with <a target="_blank" href="https://soundcloud.com/dialexo/republicoflal">Alex aka
                dialexo</a> which brought
                me into Electronic Club Music had the biggest impact on my music to this time.
            </p>
            <p>
                In 2015 I started producing Future House and my songs got more attention than ever before.
                For instance, my <a href="https://soundcloud.com/novahofficial/faded-novah-remix"
                                    target="_blank">remix of ZHU's 'Faded'</a>
                got streamed more than 35k times.
                Because of my interest for many various Electronic Music sub genres, in 2017, I decided to
                create three new aliases Dasattva, Nitamas and Elrajas for different styles of Electronic Music.
            </p>
            <p>
                I don't now when I will make music as 'NOVAH' again, as currently, there are so many
                different projects in progress.
            </p>
        </div>
    </MusicPage>
);

export default Index;
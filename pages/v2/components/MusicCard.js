import Link from "next/link";

const MusicCard = props => (
    <div>
        <Link href={"/v2/music/" + props.link} passHref>
            <div className={"musicCard"}>
                <div className={"titleBox"}>
                    <span className={"title"}>{props.title}</span>
                    <span className={"subtitle"}>{props.subtitle}</span>
                    <span className={"year"}>{props.year}</span>
                </div>
                <div className={"logo"}>
                    <img src={"../img/" + props.img}/>
                </div>
            </div>
        </Link>
        <style jsx>{`
          .musicCard {
            border: 1px solid var(--foreground);
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            background: var(--background-button);
            cursor: pointer;
            transition: var(--transition);
          }

          .musicCard:hover {
            border-color: var(--tint);
          }

          .titleBox {
            height: 100%;
            padding: 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .title {
            font-family: var(--heading-font);
            color: var(--headings);
            font-weight: 700;
          }

          .year {
            opacity: 0.5;
          }

          img {
            height: 8rem;
            width: auto;
            border-radius: 0 10px 10px 0;
          }
        `}</style>
    </div>
);

export default MusicCard;
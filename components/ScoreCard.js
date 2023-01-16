const ScoreCard = props => (
    <div>
        <a href={props.link} target={"_blank"}>
            <div className={"scoreCard"}>
                <div className={"logo-up"}>
                    <img src={"../img/" + props.img}/>
                </div>
                <div className={"titleBox"}>
                    <h2 className={"title"}>{props.title}</h2>
                    <span className={"subtitle"}>{props.subtitle}</span>
                    <span className={"year"}>{props.year}</span>
                </div>
                <div className={"logo-right"}>
                    <img src={"../img/" + props.img}/>
                </div>
            </div>
        </a>
        <style jsx>{`
          .scoreCard {
            border: 1px solid var(--foreground);
            border-radius: 10px;
            display: flex;
            color: var(--text);
            justify-content: space-between;
            background: var(--background-button);
            cursor: pointer;
            transition: var(--transition);
          }

          .scoreCard:hover {
            border-color: var(--tint);
          }

          .titleBox {
            padding: 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .title {
            color: var(--headings);
            font-weight: 700;
            margin-top: 0.2rem;
          }

          .year {
            opacity: 0.5;
          }

          .logo-up {
            display: none;
          }

          .logo-up img {
            width: 100%;
            border-radius: 10px 10px 0 0;
          }

          .logo-right img {
            height: 10rem;
            width: auto;
            border-radius: 0 10px 10px 0;
          }

          @media (max-width: 600px) {
            .title {
              font-size: 1rem;
              text-align: left;
            }
          }

          @media (max-width: 850px) {
            .logo-up {
              display: block;
            }

            .logo-right {
              display: none;
            }

            .scoreCard {
              flex-direction: column;
            }
          }
        `}</style>
    </div>
);

export default ScoreCard;
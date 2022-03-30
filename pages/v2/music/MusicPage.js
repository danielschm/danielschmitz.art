import Page from "../components/Page";
import SocialIcon from "../components/SocialIcon";

export default props => (
    <Page page={props.page} navBack={"/v2/music"}>
        <div className="musicPage">
            <h2 className="subtitle">{props.subtitle}</h2>
            <div className={"content"}>
                <img src={"/img/music/" + props.img}/>
                {props.children}
            </div>
            <div className="socialIcons">
                <div className={"inner"}>
                    {
                        ["spotify", "soundcloud", "facebook", "youtube", "twitter", "mixcloud"].map(e => {
                            return props[e] ? <SocialIcon icon={e} link={props[e]} size="small"/> : <></>
                        })
                    }
                </div>
            </div>
        </div>
        <style jsx>{`
          .musicPage {
            display: flex;
            flex-direction: column;
          }

          .musicPage img {
            height: 10rem;
            width: 10rem;
            border-radius: 10px;
            margin-right: 1rem;
          }

          .musicPage .content {
            display: flex;
          }

          .socialIcons {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 1rem;
          }

          .socialIcons .inner {
            display: flex;
            width: 100%;
            max-width: 25rem;
            justify-content: space-around;
            padding: 1rem;
            border: 1px solid var(--foreground);
            border-radius: 10px;
          }

          @media (max-width: 800px) {
            .musicPage .content {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}</style>
    </Page>
)
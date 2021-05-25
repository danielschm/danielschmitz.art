import SocialIcon from "./SocialIcon";
import Link from "next/link";

const MusicCard = props => (
    <div>
        <Link href={"/music/" + props.link} passHref>
            <div className={"musicCard"}>
                <div className={"logo"}>
                    <img src={"./img/music/" + props.logo}/>
                </div>
                <div className={"cardBody"}>
                    <div className={"content"}>
                        <h2>{props.title}</h2>
                        <h3 className={"subtitle"}>{props.subtitle}</h3>
                        <div className="socialIcons">
                            {/*<div className={"spotifyIcon"}>*/}
                            {/*    <SocialIcon spotify={props.spotify} size="2x"/>*/}
                            {/*</div>*/}
                            {/*<div className={"facebookIcon"}>*/}
                            {/*    <SocialIcon facebook={props.facebook} size="2x"/>*/}
                            {/*</div>*/}
                            <div className={"more"}>Read More</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        <style jsx>{`
            @media (max-width: 768px) {
                .musicCard h2 {
                    font-size: 1.5rem;
                }
                
                .musicCard h3 {
                    font-size: 0.7rem;
                }
                
                .musicCard .logo {
                    width: 8rem !important;
                    height: 8rem !important;
                }
                
                .musicCard .cardBody .content {
                    padding-left: 9rem !important;
                }
                
                .musicCard .facebookIcon {
                    display: none;
                }
                
                .musicCard {
                    height: 8rem !important;
                }
            }
            
            @media (max-width: 400px) {
                .musicCard .spotifyIcon {
                    display: none;
                }
                
                .musicCard .more {
                    margin-left: 0 !important;
                }
            }
        
            .musicCard .more {
                color: rgba(255,255,255,0.5);
                margin-left: 1rem;
                padding: 0 2rem 0 2rem;
                line-height: 2;
                border-left: 2px solid rgba(255,255,255,0.2);
                transition: all 100ms ease;
            }
        
            .musicCard {
                height: 10rem;
                width: 100%;
                max-width: 40rem;
                position: relative;
                margin-bottom: 2rem;
                z-index: 1;
                cursor: pointer;
            }
            
            .musicCard:hover .cardBody {
                background: rgba(255,255,255,0.05); 
                border-top-right-radius: 5rem;
                border-bottom-right-radius: 5rem;
                border-top: 2px solid var(--blue);
            }
            
            .musicCard:hover .more {
                color: white;
                border-left: 2px solid var(--blue);
            }
            
            .musicCard .cardBody {
                border-top: 2px solid rgba(255,255,255,0.3);
                padding-top: 1rem;
                width: 100%;
                height: 100%;
                transition: all 400ms ease;
            }
            
            .musicCard .cardBody .content {
                height: 100%;
                width: 100%;
                padding-left: 11.5rem;
            }
            
            .musicCard .logo {
                border-top: 2px solid rgba(255,255,255,0.5);
                position: absolute;
                top: 0;
                left: 0;
                width: 10rem;
                height: 10rem;
            }
            
            .musicCard .logo img {
                width: 100%;
                height: 100%;
            }
        `}</style>
    </div>
);

export default MusicCard;
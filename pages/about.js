import Page from "../components/Page";
import Link from "next/link";

export default () => (
    <Page page={"About"} navBack={true}>
        <div className={"profile"}>
            <img src={"/img/avatar4.jpg"}/>
        </div>
        <p>My name is Daniel Schmitz and I'm a <i>product owner</i>, <i>music
                producer</i> and <i>composer</i> from Cologne, Germany.</p>
        {/* <h2>Product Owner</h2>
        <p>
            I work for REWE digital.
        </p> */}
        <h2>Music Producer</h2>
        <p>
            I've been making music all my life and producing music for over 10 years. During this time I have
            gained experience with a variety of genres which has made me very flexible. Besides production I
            have specialized in mixing, mastering and sound design. Feel free to check out <Link href={"/music"}>my
            music</Link>.
        </p>

        <h2>Composer</h2>
        <p>
            I created my first film score in 2015. Since then I worked on various <Link href={"/scoring"}>short
            film projects</Link>. My style can be described as emotional, harmonious and imaginative. But since
            I have experience in many different genres, I am very flexible for any request. The following composers are
            my greatest inspiration:
            John Williams, Thomas Newman and Gareth Coker.
        </p>
        <style jsx>{`
          .profile {
            display: flex;
            flex-direction: row;
            margin-bottom: 1rem;
          }

          @media (max-width: 550px) {
            .profile {
              flex-direction: column;
            }

            .profile img {
              margin-bottom: 0.5rem;
            }
          }

          .profile p {
            // max-width: 20rem;
          }

          .profile img {
            width: 10rem;
            height: 10rem;
            border-radius: 10px;
            margin-right: 1rem;
          }
        `}</style>
    </Page>
);

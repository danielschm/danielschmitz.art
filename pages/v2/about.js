import Page from "./components/Page";
import Link from "next/link";

export default () => (
    <Page page={"About"} navBack={true}>
        <p>My name is Daniel Schmitz and I'm a <i>product owner</i>, <i>music
            producer</i> and <i>composer</i> from Cologne, Germany.</p>

        <h2>Product Owner</h2>
        <p>
            I work for the SAP partner company <a href={"https://www.gicom-group.com"} target={"_blank"}>gicom
            AG</a>.
            My background is in the software development (5+ years). As a product owner I am responsible for
            defining the requirements of a gicom solution based on SAP technology including SAP Fiori/SAPUI5,
            ABAP and HANA. In my daily work I use Jira & Confluence.
        </p>

        <h2>Music Producer</h2>
        <p>
            I've been making music all my life and producing music for over 10 years. During this time I have
            gained experience with a wide range of genres which has made me very flexible. Besides production I
            have specialized in mixing, mastering and sound design. Feel free to <Link href={"/v2/music"}>check
            out</Link> my music.
        </p>

        <h2>Composer</h2>
        <p>
            I created my first film score in 2015. Since then I worked on various <Link href={"/v2/scoring"}>short
            film projects</Link>. My style can be described as emotional, harmonious and imaginative. But since
            I have experience in many different genres, I am very flexible for any request. The following composers are
            my greatest inspiration:
            John Williams, Thomas Newman and Gareth Coker.
        </p>
    </Page>
);
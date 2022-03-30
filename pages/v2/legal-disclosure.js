import Page from "./components/Page";
import openMail from "./components/Mail";

export default () => (
    <Page page={""} navBack={true}>
        <h2>Legal Disclosure</h2>
        <p>
            Information in accordance with Section 5 TMG
        </p>
        <p>
            Gerottener Weg 27
            <br/>
            51503 Rösrath
            <br/>
            Germany
        </p>
        <p>
            <b>Represented by</b>
            <br/>
            Daniel Schmitz
        </p>
        <p>
            <b>Contact Information</b>
            <br/>
            <a onClick={openMail}>E-Mail</a>
            <br/>
            Internet address: <a href="https://danielschmitz.art"
                                 target="_blank">https://danielschmitz.art</a>
            <br/>
        </p>
        <h2>Disclaimer</h2>
        <b>Accountability for content</b><br/>
        The contents of our pages have been created with the utmost care. However,
        we cannot guarantee the contents'
        accuracy, completeness or topicality. According to statutory provisions, we
        are furthermore responsible for
        our own content on these web pages. In this matter, please note that we are
        not obliged to monitor
        the transmitted or saved information of third parties, or investigate
        circumstances pointing to illegal
        activity.
        Our obligations to remove or block the use of information under generally
        applicable laws remain unaffected
        by this as per
        §§ 8 to 10 of the Telemedia Act (TMG).
        <br/>
        <br/>
        <b>Accountability for links</b><br/>
        Responsibility for the content of
        external links (to web pages of third parties) lies solely with the
        operators of the linked pages. No
        violations were
        evident to us at the time of linking. Should any legal infringement
        become known to us, we will remove the
        respective
        link immediately.
        <br/>
        <br/>
        <b>Copyright</b>
        <br/> Our web pages and their contents are subject to German
        copyright law.
        Unless expressly permitted by law, every form of
        utilizing, reproducing or processing
        works subject to copyright protection on our web pages
        requires the prior consent of the respective owner of
        the rights.
        Individual reproductions of a work are only allowed for
        private use.
        The materials from these pages are copyrighted and any
        unauthorized use may violate copyright laws.
        <br/><br/>
        <i>Quelle: </i><a href="http://www.translate-24h.de"
                          target="_blank">Englisch-Übersetzung
        translate-24h.de</a>
        <br/><br/>
        <style jsx>{`
          a {
            cursor: pointer;
          }

          * {
            text-align: left;
          }
        `}</style>
    </Page>
)
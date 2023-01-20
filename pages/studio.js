import Page from "../components/Page";

export default () => (
    <Page page={"Studio"} navBack={true}>
        <h2>Equipment</h2>
        <p/>
        <ul>
            <li><a href={"https://www.roland.com/de/products/a-88/"} target={"_blank"}>Roland A-88</a></li>
            <li>Fender Stratocaster</li>
            <li><a href={"https://www.thomann.de/de/tannoy_reveal_802.htm"} target={"_blank"}>Tannoy Reveal 802</a></li>
            <li><a href={"https://www.thomann.de/de/presonus_temblor_t10.htm"} target={"_blank"}>Presonus Temblor T10</a></li>
            <li><a href={"https://www.thomann.de/de/focusrite_scarlett_8i6_3rd_gen.htm"} target={"_blank"}>Focusrite 8i6 3rd Gen</a></li>
            <li><a href={"https://www.thomann.de/de/akg_k_712_pro.htm"} target={"_blank"}>AKG K-712 Pro</a></li>
            <li><a href={"https://www.thomann.de/de/rode_nt2a_studio_solution_set.htm"} target={"_blank"}>Rode NT2-A</a></li>
        </ul>
        <p/>
        <br/>
        <h2>Software</h2>
        <p/>
        <ul>
            <li>DAW: <a href={"https://www.presonus.com/produkte/de/Studio-One"} target={"_blank"}>Studio One</a>
            </li>
            <li>Synths: <a href={"https://xferrecords.com/products/serum"} target={"_blank"}>Serum</a>, <a
                href={"https://www.reveal-sound.com/plug-ins/spire"} target={"_blank"}>Spire</a>, <a
                href={"https://www.arturia.com/products/analog-classics/pigments/"} target={"_blank"}>Pigments</a></li>
            <li>Strings: <a href={"https://www.performancesamples.com/pacific-ensemblestrings"} target={"_blank"}>Performance
                Samples Pacific Strings</a></li>
            <li>Orchestra: <a href={"https://www.spitfireaudio.com/bbc-symphony-orchestra"} target={"_blank"}>Spitfire
                BBC
                Symphonic Orchestra Core</a></li>
            <li>Instruments: <a href={"https://labs.spitfireaudio.com/"} target={"_blank"}>Spitfire LABS</a></li>
            <li>Instruments: <a
                href={"https://www.native-instruments.com/en/products/komplete/bundles/komplete-14-standard/"}
                target={"_blank"}>Kontakt Komplete 14 Standard</a></li>
            <li>Mastering Tools: <a
                href={"https://www.fabfilter.com/products"}
                target={"_blank"}>FabFilter</a>, <a
                href={"https://www.izotope.com/en/products/ozone/features.html"}
                target={"_blank"}>iZotope Ozone</a></li>
        </ul>
        <p/>
    </Page>
);
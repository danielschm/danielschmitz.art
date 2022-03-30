import GlitchText from "./GlitchText";

const Banner = props => (
    <section>
        <div>
            <h1><span className={"first"}>Hey, I'm</span><GlitchText text={"Daniel"}/></h1>
            {props.children}
        </div>
        <style jsx>{`
          section {
            overflow-x: hidden;
          }

          h1 .first {
            font-weight: 400;
            font-style: italic;
          }

          h1 span {
            margin-right: clamp(0rem, 2vw, 5rem);
          }

          h1 {
            display: flex;
            gap: 1rem;
            font-size: clamp(35px, 6vw, 110px);
          }

          section div {
            width: 100%;
          }
        `}</style>
    </section>
);

export default Banner;
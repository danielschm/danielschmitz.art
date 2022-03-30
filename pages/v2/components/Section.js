const Section = props => (
    <section>
        <div className={props.maxWidth ? "maxWidth" : ""}>
            {props.children}
        </div>
        <style jsx>{`
          section {
            padding-top: 2rem;
            height: 100%;
            width: 100%;
            display: flex;
            text-align: justify;
            justify-content: center;
          }

          section div {
            margin: auto;
            width: 100%;
          }

          .maxWidth {
            max-width: 55rem;
          }

        `}</style>
    </section>
);

export default Section;
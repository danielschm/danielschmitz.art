const Section = props => (
    <section className={props.maxWidth ? "maxWidth" : ""}>
        <div>
            {props.children}
        </div>
        <style jsx>{`
          section {
            padding: 2rem 0;
            height: 100%;
            width: 100%;
            display: flex;
            text-align: justify;
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
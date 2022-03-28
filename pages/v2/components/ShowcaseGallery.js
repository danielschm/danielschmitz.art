const ShowcaseGallery = props => (
    <div className={"content"}>
        {props.children}
        <style jsx>{`
            .content {
                margin-top: 20px;
                display: grid;
                gap: 2rem;
                grid-template-columns: repeat(2, 1fr);
            }
        `}</style>
    </div>
);

export default ShowcaseGallery;
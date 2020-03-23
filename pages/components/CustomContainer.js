const Container = props => (
    <div>
        <div className={"custom-container"}>
        {props.children}
        </div>
        <style jsx>{`
            .custom-container {
                max-width: 45rem;
            }
        `}</style>
    </div>
);

export default Container;
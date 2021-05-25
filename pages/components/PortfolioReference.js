import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default props => {

    return (
        <Card>
            <Card.Img className="cardImage" variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <h2>#{props.tag}</h2>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <div className={"footer"}>
                    <a href={props.link} target="_blank">
                        <Button style={props.button ? {display: "block"} : {display: "none"}}
                                className="portfolioButton">{props.button}</Button>
                    </a>
                    <div className={"year"}>{props.year}</div>
                </div>
            </Card.Body>
            <style jsx>{`
                h2 {
                    font-size: 1rem;
                    color: #4582EC;
                    margin-top: -0.8rem;
                }
                
                .footer {
                    display: flex;
                    justify-content: space-between;
                }
                
                .year {
                    line-height: 2.4;
                    opacity: 0.5;
                }
            
                a {
                    color: inherit;
                }
                
                a:hover {
                    text-decoration: none;
                }
            `}</style>
        </Card>
    )
}
import Page from "../components/Page";
import "./music.css";
import Container from "react-bootstrap/Container";
import CustomContainer from "../components/CustomContainer";

export default props => (
    <Page>
        <div className="musicPage">
            <Container>
                <CustomContainer>
                    {props.children}
                </CustomContainer>
            </Container>
        </div>
    </Page>
)
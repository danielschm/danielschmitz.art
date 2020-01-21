import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Link from 'next/link';

const Header = props => (
    <div>
        <Navbar className={props.className} bg="dark" variant="dark" expand="lg" sticky="top">
            <Link href="/" passHref>
                <Navbar.Brand href="/">Daniel Schmitz</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/" passHref>
                        <Nav.Link>Home</Nav.Link>
                    </Link>
                    <Link href="/about" passHref>
                        <Nav.Link>About</Nav.Link>
                    </Link>
                    <Link href="/portfolio" passHref>
                        <Nav.Link>Portfolio</Nav.Link>
                    </Link>
                    <NavDropdown title="Music" id="basic-nav-dropdown">
                        <Link href="/music/novah" passHref>
                            <NavDropdown.Item>NOVAH</NavDropdown.Item>
                        </Link>
                        <Link href="/music/film-score" passHref>
                            <NavDropdown.Item>Film Score</NavDropdown.Item>
                        </Link>
                        <Link href="/music/geocentricfools" passHref>
                            <NavDropdown.Item>Geocentric Fools</NavDropdown.Item>
                        </Link>
                        <Link href="/music/dasattva" passHref>
                            <NavDropdown.Item>Dasattva</NavDropdown.Item>
                        </Link>
                        <Link href="/music/nitamas" passHref>
                            <NavDropdown.Item>Nitamas</NavDropdown.Item>
                        </Link>
                        <Link href="/music/elrajas" passHref>
                            <NavDropdown.Item>Elrajas</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Link href="/privacy" passHref>
                        <Nav.Link>Privacy</Nav.Link>
                    </Link>
                    <Link href="/legal-disclosure" passHref>
                        <Nav.Link>Legal Disclosure</Nav.Link>
                    </Link>
                    <Link href="/contact" passHref>
                        <Nav.Link>Contact</Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Link from 'next/link';

const Header = props => (
    <div>
        <Navbar className={props.className} bg="dark" variant="dark" expand="lg">
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
                    <NavDropdown title="Music" id="basic-nav-dropdown">
                        <Link href="/music/novah" passHref>
                            <NavDropdown.Item>NOVAH</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Header;
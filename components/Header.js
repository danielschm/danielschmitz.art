import Link from 'next/link';

const NavigationItem = ({text, href}) => (
    <Link href={href}>
        <li>
            {text}
            <style jsx>{`
              li {
                color: var(--text);
                padding: 1rem 2rem;
                height: 4rem;
                cursor: pointer;
              }

              li:hover {
                background: rgba(0, 0, 0, 0.3);
                transform: perspective();
              }

            `}</style>
        </li>
    </Link>
);

const Header = () => (
    <nav className={"side-padding"}>
        <ul>
            <NavigationItem text={"Home"} href={"/"}/>
            <NavigationItem text={"About"} href={"/about"}/>
            <NavigationItem text={"Music Production"} href={"/music"}/>
            <NavigationItem text={"Film Score"} href={"/score"}/>
            <NavigationItem text={"Development"} href={"/development"}/>
        </ul>
        <style jsx>{`
          nav {
            width: 100%;
            position: sticky;
            top: 0;
            display: flex;
            justify-content: flex-end;
            padding-right: 1rem;
            background: rgba(0, 0, 0, 0.2);
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
          }
        `}</style>
    </nav>
);

export default Header;
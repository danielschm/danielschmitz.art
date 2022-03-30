import Link from "next/link";

export default () => (
    <footer className={"footer"}>
        <div className={"link"}>
            <Link href={"/v2/credits"}>Credits</Link>
        </div>
        <div className={"link"}>
            <Link href={"/v2/legal-disclosure"}>Legal Disclosure</Link>
        </div>
        <div className={"link"}>
            <Link href={"/v2/privacy"}>Privacy</Link>
        </div>
        <style jsx>{`
          .footer {
            font-size: 0.9rem;
            text-align: center;
            padding: 0.5rem 2rem;
            gap: 1rem;
            display: flex;
            justify-content: end;
          }

          .link {
            opacity: 40%;
          }

          .link:hover {
            opacity: 100%;
          }
        `}</style>
    </footer>
)
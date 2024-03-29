import Link from 'next/link';

const Button = props => (
    <div className={"wrapper"}>
        <div className={"outer"}>
            <>
                {props.external ?
                    <a href={props.href} target={"_blank"}>
                        <span className={props.emphasized ? "inner emphasized" : "inner"}>
                            {props.children}
                        </span>
                    </a>
                    :
                    <Link href={props.href} passHref>
                        <span className={props.emphasized ? "inner emphasized" : "inner normal"}>
                            {props.children}
                        </span>
                    </Link>
                }
            </>
        </div>
        <style jsx>{`
          .wrapper {
            display: flex;
          }

          .outer {
            margin: 40px 0;
          }

          .inner {
            padding: 8px 15px;
            border-radius: 5px;
            border: 1px solid var(--tint);
            font-weight: 700;
            cursor: pointer;
            user-select: none;
            transition: var(--transition);
            color: var(--text);
          }

          .inner.normal {
            border-color: var(--secondary);
            background: var(--background-button);
          }

          .inner.emphasized {
            background: var(--secondary);
            color: var(--background);
          }

          .inner:hover {
            background: var(--tint);
            border-color: rgba(0, 0, 0, 0);
            color: var(--background);
          }
        `}</style>
    </div>);

export default Button;
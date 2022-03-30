import Link from 'next/link';

const BannerLink = props => (
    <div className={"wrapper"}>
        <div className={"outer"}>
            <>
                {
                    props.external ?
                        <a href={props.href} target={"_blank"}>
                            <div className={props.emphasized ? "inner emphasized" : "inner"}>
                                {props.children}
                            </div>
                        </a> :
                        <Link href={props.href}>
                            <div className={props.emphasized ? "inner emphasized" : "inner"}>
                                {props.children}
                            </div>
                        </Link>
                }
            </>
        </div>
        <style jsx>{`
          .wrapper {
            width: 19%;
            display: flex;
          }

          @media (max-width: 1000px) {
            .wrapper {
              width: 100%;
              margin: 0.2rem 0;
            }
          }

          .outer {
            width: 100%;
            transition: var(--transition);
          }

          .inner {
            padding: 4px;
            text-align: center;
            width: 100%;
            border: 1px solid var(--foreground);
            border-radius: 5px;
            font-weight: 700;
            cursor: pointer;
            user-select: none;
            transition: all 250ms ease;
            background: var(--background-button);
          }

          .inner.emphasized {
            background: var(--secondary);
            color: var(--background);
          }

          .inner:hover {
            background: var(--tint);
            color: var(--background);
            transition: all 50ms ease;
          }
        `}</style>
    </div>
);

export default BannerLink;
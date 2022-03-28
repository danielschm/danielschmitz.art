import Link from 'next/link';

const Button = props => (
    <div className={"wrapper"}>
        <div className={"outer"}>
            <>
                {
                    props.external ?
                        <a href={props.href} target={"_blank"}>
                        <span className={props.emphasized ? "inner emphasized" : "inner"}>
                            {props.children}
                        </span>
                        </a> :
                        <Link href={props.href}>
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
                transition: var(--transition);
            }
        
            .inner {
                padding: 8px 15px;
                border-radius: 5px;
                border: 1px solid var(--tint);
                font-weight: 700;
                cursor: pointer;
                user-select: none;
            }
            
            .inner.normal {
                border-color: var(--secondary);
            }
            
            .inner.emphasized {
                background: var(--tint);
                color: var(--dark);
            }
            
            .inner:hover {
                background: var(--tint-hover);
                border-color: rgba(0,0,0,0);
                color: var(--dark);
            }
        `}</style>
    </div>
);

export default Button;
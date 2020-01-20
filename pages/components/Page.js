import Includes from './Includes';

import '../../css/litera.css';

const Page = props => (
    <div className="page">
        <Includes/>
        {props.children}
        <style jsx>{`
            .page {
                height: 100%;
            }
        `}</style>
    </div>
);

export default Page;
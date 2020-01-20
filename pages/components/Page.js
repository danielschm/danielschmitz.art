import Includes from './includes/Includes';

import '../../css/litera.css';
import '../../css/custom.css';

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
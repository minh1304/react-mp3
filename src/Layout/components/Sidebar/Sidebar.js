import config from '~/config';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <div className="col-span-1">
            <div className="h-"></div>
            <div>
                <div>
                    <Link to={config.routes.home}>Home</Link>
                </div>
                <div>
                    <Link to={config.routes.chart}>Chart</Link>
                </div>
                <div>
                    <Link to={config.routes.radio}>Radio</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

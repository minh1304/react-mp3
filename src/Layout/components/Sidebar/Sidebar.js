import config from '~/config';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
function Sidebar() {
    return (
        <aside className="col-span-1 z-10  bg-black" >
            <div className="grid grid-cols-2">
                <div className="col-span-1 text-white p-8 w-[260px] h-screen  ">
                    <div>
                        <Link to={config.routes.home} className="flex items-center text-3xl">
                            <FontAwesomeIcon className='text-5xl' icon={faSpotify}/>
                            <span className='font-semibold pl-2'>Spotify</span>
                        </Link>
                    </div>
                    <div className='pt-5 font-semibold mt-5'>
                        <div >
                            <Link to={config.routes.home}>Home</Link>
                        </div>
                        <div className='mt-3'>
                            <Link to={config.routes.search}>Search</Link>
                        </div>
                        <div className='mt-3'>
                            <Link to={config.routes.library}>Your Library</Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 w-[0px]'></div>
            </div>
        </aside>
    );
}

export default Sidebar;

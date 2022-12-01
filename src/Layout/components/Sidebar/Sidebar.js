import config from '~/config';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import {
    HomeIcon,
    HomeIconActive,
    LibraryActive,
    Search,
    SearchActive,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';

// import { HomeIcon } from '~/components/Icons';
function Sidebar() {
    return (
        <aside className="w-[241px] min-w-[200px] z-10 bg-black h-screen-side-player ">
            <div className="grid grid-cols-2 w-full">
                <div className="col-span-1 text-white p-8 w-[260px] h-screen  ">
                    <div>
                        <Link
                            to={config.routes.home}
                            className="flex items-center text-3xl"
                        >
                            <FontAwesomeIcon
                                className="text-5xl"
                                icon={faSpotify}
                            />
                            <span className="font-semibold text-3xl pl-2">Spotify</span>
                        </Link>
                    </div>
                    <div className="pt-5 font-semibold mt-5">
                        {/* active */}
                        {/* <div>
                            <Link
                                className="flex items-center"
                                to={config.routes.home}
                            >
                                <HomeIconActive
                                    className={'text-white mb-[2px]'}
                                />
                                <span className="pl-5">Home</span>
                            </Link>
                        </div>
                        <div className="mt-3 flex items-center">
                            <Link
                                className="flex items-center"
                                to={config.routes.search}
                            >
                                <SearchActive
                                    className={'text-white mb-[2px]'}
                                />
                                <span className="pl-5">Search</span>
                            </Link>
                        </div>
                        <div className="mt-3 flex items-center">
                            <Link
                                className="flex items-center"
                                to={config.routes.library}
                            >
                                <LibraryActive
                                    className={'text-white mb-[2px]'}
                                />
                                <span className="pl-5">Your Library</span>
                            </Link>
                        </div> */}

                        <Menu>
                            <MenuItem
                                to= {config.routes.home}
                                title = "Home"
                                icon = {<HomeIcon/>}
                                // activeIcon = {<HomeIconActive className={'text-white mb-[2px]'}/>}
                                
                            />
                            <MenuItem
                                to= {config.routes.search}
                                title = "Search"
                                icon = {<Search/>}
                                // activeIcon = {<SearchActive className={'text-white mb-[2px]'}/>}
                                
                            />
                            <MenuItem
                                to= {config.routes.library}
                                title = "Your Library"
                                icon = {<LibraryActive/>}
                                // activeIcon = {<LibraryActive className={'text-white mb-[2px]'}/>}
                                
                            />
                        </Menu>
                    </div>
                </div>
                <div className="col-span-1 w-[0px]"></div>
            </div>
        </aside>
    );
}

export default Sidebar;

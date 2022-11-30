import Home from '~/pages/Home';
// import LiveRadio from '~/pages/LiveRadio';
import config from '~/config';
// import Follow from '~/pages/Follow';
import Search from '~/pages/Search';
import Library from '~/pages/Library';
// import Personal from '~/pages/Personal';
const publicRoutes = [
    // { path: config.routes.personal, component: Personal},
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search },
    { path: config.routes.library, component: Library },
    // { path: config.routes.follow, component: Follow },
    // { path: '/liveradio', component: LiveRadio, layout: null },
];

//Khi không đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };

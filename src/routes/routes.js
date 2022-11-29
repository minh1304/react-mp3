import Home from '~/pages/Home';
import Chart from '~/pages/Charts';
import LiveRadio from '~/pages/LiveRadio';
import Radio from '~/pages/Radio';
import config from '~/config';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    {
        path: config.routes.chart,
        component: Chart,
    },
    {
        path: config.routes.radio,
        component: Radio,
    },

    {
        path: '/liveradio',
        component: LiveRadio,
        layout: null,
    },
];

//Khi không đăng nhập
const privateRoutes = [];

export { publicRoutes, privateRoutes };

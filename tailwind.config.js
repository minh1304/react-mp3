/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                'screen-navbar-player': 'calc(100vh - 6rem - 4rem )',
                'screen-side-player': 'calc(100vh - 6rem)',
            },
            backgroundImage: {
                'hero-pattern':
                    "url('https://zjs.zadn.vn/zmp3-desktop/releases/v1.0.4/static/media/bg-zma.0cc0a7e9.svg')",
            },
            fontFamily: {
                Inter: ['Inter', 'sans-serif'],
            },
            colors: {
                color_header: '#1a1a1a',
                decorative: '#b3b3b3',
                hover_color: '#2c2c2c',
                color_player_music: '#181818',
                primary: '#121212',
                secondary: '##ffffff80',
                queue_player_popup: '#5d218c',
                layout: '#37075d',
                purple_primary: '#ed2b91',
                text_hover: '#fe63da',
                sidebar: '#572f90',
            },
        },
    },
    plugins: [],
};

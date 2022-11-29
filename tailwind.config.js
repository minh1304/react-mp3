/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Inter: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#6a39af',
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

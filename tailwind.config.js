module.exports = {
    content: [
        './source/v2/**/*.pug',
        './source/v2/**/*.yaml'
    ],
    separator: '_',
    theme: {
        extend: {
            aspectRatio: {
                'vhs': '4 / 3',
            },
            height:{
                146: '36rem'
            }
        },
        colors: {
            'black': '#2C3B47',
            'white': '#FFFFFF',
            'transparent': 'transparent',
            'blue': {
                50: '#F1F7FC',
                700: '#1168A8'
            },
            'green': {
                50: '#F1FAF3',
                100: '#E0F5E3',
                500: '#5AB467'
            },
            'grey': {
                300: '#F6F6F6',
                500: '#E5E5E5',
                700: '#626262'
            },
            'pink': {
                700: '#8E4765'
            },
            'purple': {
                50: '#F4DFEC',
                100: '#E3A8CC',
                500: '#DA7AB1'
            },
            'yellow': {
                10: '#FFF8E1',
                50: '#FDF0C3',
                700: '#E4B722'
            }
        }
},
    plugins: [],
}

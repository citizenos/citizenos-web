module.exports = {
    content: ['./source/v2/**/*.pug'],
    separator: '_',
    theme: {
        extend: {
            height:{
                146: '36rem'
            }
        },
        colors: {
            'black': '#2C3B47',
            'white': '#FFFFFF',
            'transparent': 'transparent',
            'blue': {
                50: '#F1F7FC'
            },
            'green': {
                50: '#F1FAF3',
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
                100: '#E3A8CC'
            },
            'yellow': {
                10: '#FFF8E1'
            }
        }
},
    plugins: [],
}

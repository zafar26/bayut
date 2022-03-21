module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1B32AB',
                secondary: '#ecc94b',
                baseColor: '#0d47a1',
                lightGreenCard: '#E8F6EF',
                loginButton: '#389F14',
                glassEffect: 'rgba(255, 255, 255, 0.8)',
                bluetransparent: 'rgba(27, 50, 171, 0.7)',
                whiteTransparent: 'rgba(247, 247, 247, 0.28)',
            },
        },
    },
    plugins: [],
};

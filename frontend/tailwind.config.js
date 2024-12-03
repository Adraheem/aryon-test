/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    '50': '#f0fafb',
                    '100': '#d8f1f5',
                    '200': '#b5e3ec',
                    '300': '#82cdde',
                    '400': '#3aa7c1',
                    '500': '#2c93ae',
                    'DEFAULT': '#2c93ae',
                    '600': '#287892',
                    '700': '#266178',
                    '800': '#275163',
                    '900': '#244455',
                    '950': '#132c39',
                },
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}


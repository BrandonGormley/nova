import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#93f4ff',
                    DEFAULT: '#60efff',
                    dark: '#0',
                },
                secondary: {
                    light: '#3381ff',
                    DEFAULT: '#0061ff',
                    dark: '#2deaff',
                },
            },
        },
    },
    plugins: [],
};
export default config;

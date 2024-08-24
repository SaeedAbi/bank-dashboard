import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '15px',
      base: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '22px',
      '4xl': '28px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        md: '800px',
      },
      colors: {
        primary: '#343C6A',
        secondary: '#B1B1B1',
        mainBg: '#E6EFF5',
      },
    },
  },
  plugins: [],
};
export default config;

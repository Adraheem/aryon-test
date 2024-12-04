/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}", "./public/**/*.html"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    // '50': '#f0fafb',
                    // '100': '#d8f1f5',
                    // '200': '#b5e3ec',
                    // '300': '#82cdde',
                    // '400': '#3aa7c1',
                    // '500': '#2c93ae',
                    // 'DEFAULT': '#2c93ae',
                    // '600': '#287892',
                    // '700': '#266178',
                    // '800': '#275163',
                    // '900': '#244455',
                    // '950': '#132c39',
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                // primary: {
                //     DEFAULT: "hsl(var(--primary))",
                //     foreground: "hsl(var(--primary-foreground))",
                // },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    darkMode: 'selector',
    plugins: [require("tailwindcss-animate")],
}


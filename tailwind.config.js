/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "modal-slide-down": "modal-slide-down .5s ease-in-out",
                "modal-slide-up": "modal-slide-up .5s ease-in-out",
            },
            keyframes: {
                "modal-slide-down": {
                    'from': {
                        transform: "translateY(-100%)"
                    },
                    'to': {
                        transform: "translateY(0)"
                    },
                },
                "modal-slide-up": {
                    'from': {
                        transform: "translateY(0)"
                    },
                    'to': {
                        transform: "translateY(-100%)"
                    },
                },
            }
        },
    },
    plugins: [],
}
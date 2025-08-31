import plugin from "tailwindcss/plugin";

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your folder structure
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "var(--font-Inter)",
        JetBrains: "var(--font-JetBrains-Mono)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Font families
        ".font-Inter": { fontFamily: "var(--font-Inter)" },
        ".font-JetBrains-Mono": { fontFamily: "var(--font-JetBrains-Mono)" },

        // Inter weights
        ".font-Inter-Light": { fontWeight: "var(--font-Inter-Light, 300)" },
        ".font-Inter-Regular": { fontWeight: "var(--font-Inter-Regular, 400)" },
        ".font-Inter-Medium": { fontWeight: "var(--font-Inter-Medium, 500)" },
        ".font-Inter-Semibold": {
          fontWeight: "var(--font-Inter-Semibold, 600)",
        },
        ".font-Inter-Bold": { fontWeight: "var(--font-Inter-Bold, 700)" },
        ".font-Inter-Extrabold": {
          fontWeight: "var(--font-Inter-Extrabold, 800)",
        },

        // JetBrains weights
        ".font-JetBrains-Mono-Regular": {
          fontWeight: "var(--font-JetBrains-Mono-Regular, 400)",
        },
        ".font-JetBrains-Mono-Medium": {
          fontWeight: "var(--font-JetBrains-Mono-Medium, 500)",
        },
        ".font-JetBrains-Mono-Semibold": {
          fontWeight: "var(--font-JetBrains-Mono-Semibold, 600)",
        },
      });
    }),
  ],
};

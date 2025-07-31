/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1f3b6f',     // الأزرق الداكن المستخدم للعناوين
        secondary: '#f8fafc',   // خلفية فاتحة
        accent: '#3b82f6',      // لون بارز (مثل الأزرار أو الأيقونات)
        danger: '#dc2626',      // للأخطاء والتنبيهات
        success: '#16a34a',     // للرسائل الإيجابية
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 14px rgba(0, 0, 0, 0.1)', // ظل خاص للبطاقات
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

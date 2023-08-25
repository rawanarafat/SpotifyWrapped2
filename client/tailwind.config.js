/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.html'],
    safelist: [
      'min-h-screen', 'w-screen', 'bg-gray-200', 'flex', 'flex-col', 'items-center', 'relative', 'h-48', 'w-3/4', 'mt-8', 'object-cover', 'object-center', 'h-full', 'w-full', 'rounded-xl', 'absolute', 'bottom-0', 'left-0', 'text-3xl', 'font-bold', 'underline', 'p-4', 'text-white', 'w-3/5', 'mt-4', 'flex', 'justify-center', 'space-x-4', 'border', 'rounded-lg', 'px-6', 'py-3', 'text-gray-700', 'hover:bg-gray-100', 'focus:outline-none', 'border-blue-500', 'border-transparent', 'text-left', 'divide-y', 'divide-gray-300', 'py-4', 'items-center', 'space-x-4', 'text-lg', 'font-medium', 'text-gray-800', 'w-14', 'h-14', 'rounded-full',

    ]
  },
}





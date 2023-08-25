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
      'flex', 'items-center', 'justify-center', 'h-screen', 'font-sans', 'flex', 'flex-col', 'items-center', 'justify-center', 'bg-white', 'shadow-md', 'rounded-md', 'p-8', 'space-y-4', 'text-xl', 'font-semibold', 'text-center', 'mb-4', 'text-sm', 'text-gray-600', 'text-center', 'mb-6', 'w-full', 'py-3', 'px-6', 'text-base', 'font-medium', 'rounded-full', 'text-white', 'bg-gradient-to-r', 'from-green-400', 'to-green-600', 'hover:from-green-500', 'hover:to-green-700', 'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2', 'focus:ring-green-500', 'flex', 'items-center', 'justify-center', 'w-6', 'h-6', 'mr-3',
      'h-screen', 'w-32', 'bg-white-800', 'text-black', 'fixed', 'top-0', 'left-5', 'bg-white', 'w-30', 'h-30', 'p-4', 'pl-5', 'pt-10', 'focus:outline-none', 'w-8', 'h-8', 'top-20', 'left-5', 'w-10', 'h-10', 'bottom-0', 'p-4'

    ]
  },
}





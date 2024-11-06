# Project-configurations

## create-react-app [scaffold of react app]
``` 
npx create-react-app
``` 

## configure tailwindCss 
``` 
npm install -D tailwindcss
npx tailwindcss init
``` 

## new file will be created as tailwind.config.css -> just add the following code at this file 
``` 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // js,tsx,tx,tsx is nothing but the language support
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
``` 

## add these to index.css
``` 
@tailwind base;
@tailwind components;
@tailwind utilities;
``` 



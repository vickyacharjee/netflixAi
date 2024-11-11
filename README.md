# NetflixAI Project

NetflixAI is a Netflix-inspired application that mimics the look and feel of Netflix, providing a similar user interface and user experience with additional AI-driven features. The application integrates Firebase for streamlined authentication and leverages APIs for movie data and AI-powered recommendations. NetflixAI supports multilingual functionality, reusable components, and is structured with state management handled through Redux.

---

## Key Features

- **Authentication:** Uses Firebase SaaS for easy user authentication.
- **Movie Database:** Fetches movie data from **The Movie Database (TMDB)** API, allowing access to a wide variety of movie information.
- **AI-Powered Recommendations:** Since Netflix’s recommendation algorithm is proprietary, NetflixAI utilizes the GPT-3.5 Turbo API to generate personalized movie recommendations based on user interactions.
- **Multilingual Support:** Provides multilingual functionality to improve accessibility for diverse audiences.
- **Reusable Components:** Built with reusable components for easier maintenance and scalability.
- **State Management:** Managed by Redux with multiple slices to handle different states and interactions across the app.
- **Custom Hooks:** Implements custom hooks to optimize code reuse and streamline data fetching and processing.

---

## Main APIs Used

1. **TMDB API:** Serves as the primary movie database, allowing NetflixAI to fetch detailed information about various movies, including genres, trending titles, and more.
2. **GPT-3.5 Turbo API:** Used to simulate a movie recommendation system, as Netflix’s own recommendation algorithm is unavailable. This AI-driven solution provides tailored movie suggestions based on user prompts and interactions.

---

## Project Structure

### 1. Authentication Components
- **Sign-In/Sign-Up Component:** A single component that handles both user sign-in and sign-up functionalities, integrated with Firebase for seamless authentication.

### 2. Main Content Area
- **Primary Component:** Displays the main movie content after user login, consisting of:
  - **MainContainer:** Shows a movie video in the background with the video’s title overlaid.
  - **MovieList Component:** Dynamically loads a list of movies using data fetched from the TMDB API.

### 3. GPT Search and Suggestions
- **GPT Page Component:** A dedicated area where users can search for movies and get AI-powered recommendations. This page includes:
  - **GPT Search Bar:** Allows users to type in prompts to get tailored movie suggestions.
  - **Movie Suggestions Component:** Displays movies suggested by the GPT-3.5 Turbo API, with data fetched from the TMDB API based on the user’s query.

---

## Technologies and Libraries

- **Firebase:** For user authentication.
- **TMDB API:** For accessing movie data.
- **GPT-3.5 Turbo API:** For generating movie recommendations.
- **Redux:** To manage global application state with different slices for organized state control.
- **React with Custom Hooks:** To promote code reuse and simplify complex logic.
- **Multilingual Support:** Enables a more accessible and globally adaptable user interface.

---

## Example Usage

Here’s an example flow of how NetflixAI functions:

1. **User Sign-In/Sign-Up:** User logs in or signs up via Firebase.
2. **Main Movie Content:** Once logged in, the user is presented with the MainContainer, showing a featured movie and title, along with a list of other popular movies.
3. **GPT Search:** The user can interact with the GPT search bar to receive movie recommendations based on their input.
4. **Personalized Suggestions:** The AI-powered suggestions are displayed in the Movie Suggestions component, pulling data from the TMDB API based on the user’s query.

---

NetflixAI combines the aesthetic of Netflix with advanced AI features to provide a robust movie browsing and recommendation experience.










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

## add FireBase to the project for authentication and fire Hosting for deployement




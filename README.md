# Internationalized Parcel Tracking App

## 1. About project

This is a simple app to check if the user can pick up their parcels. The app is composed of a list view where they can view all the parcels, and a detail view where they can see more information. It has live tracking with a web map and also a world view to show where all the packages currently are. User can also search, filter parcels and switch app's languages.

The project is done with the latest version of React and uses functional components with Hooks for better modularity in case it needs to be expanded.

Check [Live Demo](https://parcel-tracker-giang.web.app/)

## 2. Setup

1. Clone repository `git clone https://github.com/nh-g/veggies.git`
2. Open the terminal and navigate to the folder where the project is located.
3. Install dependencies: `npm i`
4. Run npm scripts: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 3. Dependencies

SASS for styling components.
Leaflet for map handling.
React router to enabling the browser back button in the views.
React i18: For internationalization.

## 4. Internationalization

I'm using React-i18-next to translate the strings from the project. The folder src/internationalization contains translations from English and Swedish.
The project can scale to multiple languages by adding more json files and making the flag button show a menu with all the languages available.
The Swedish translation is done by copying the english text to Google Translate, some minor misspellings may appear.

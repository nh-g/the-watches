# Watches e-store Website

## 1. About project

An end-to-end web application that reads product data from a PIM (Product Information Management) system and presents it to the user.

The project is done with the latest version of React and uses functional components with Hooks for better modularity in case it needs to be expanded.
Check [Live Demo](https://the-watches.web.app/)

### It has Features

- Internationalized translation of English and Swedish.
- List view of products fetched from API
- Detailed view of single product
- Categorized filtered page
- Search product by name, color or size
- Sort products by name and price
- Add to Cart ( Currently just show how many products in the cart)

### Future Features

- It can scale to a mini e-commerce service by adding checkout and payment page.
- Language menu can be added with more options

## 2. Setup

1. Clone repository `git clone https://github.com/nh-g/the-watches.git`
2. Install dependencies: `npm i`
3. Run npm scripts: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 3. Dependencies

- SASS for styling components.
- React router to enabling the browser back button in the views.
- React i18: For internationalization.
- React testing library for unit-testing

## 4. Internationalization

- I'm using React-i18-next to translate the strings from the project. The folder src/internationalization contains translations from English and Swedish.
- The project can scale to multiple languages by adding more json files and show a menu with all the languages available.
- The documentation also mentions how to start with the device language, this is another feature that i would like to implement as well; or store and applied the user preferable language by localStorage 
- The Swedish translation is done by copying the english text to Google Translate, some minor misspellings may appear.

## 5. Testing

Testing APIs calls and verify showing corresponding components following React testing library documentation.
```npm t```

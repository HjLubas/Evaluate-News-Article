# Project Instructions

This project used the starter code from the Udacity Nanodegree Front End Web Development Evaluate News Article Project 4 Lesson 2.

Project goals:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Using Natural language processing (NLP)
> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

Project challenge:
- API:

  The app should make a successful call to the api on form submission. If this is     successful, the api keys and response handling were done correctly. Information from the api response must show up in the view. It is not enough for the response to be logged to the console or saved in js, etc..

- Offline functionality:  The project must have set up service workers in webpack.

- Testing:  

  Check that the project has Jest installed, that there is an npm script to run Jest, and that the tests all pass. Every src/client/js file should have at least one test.

- Interactions:  

  The page built can be very simple, but should include:

    A single field form that uses the correct html tags and structure. There should be some attempt to validate the form input. Bonus points if you use regex to correctly check for a URL and give back helpful error messages


## Getting started

Need to install everything:

`cd` into your new folder and run:
- `npm install`
- `npm i -D @babel/core @babel/preset-env babel-loader`
- `npm i -D style-loader node-sass css-loader sass-loader`
- `npm i -D clean-webpack-plugin`
- `npm i -D html-webpack-plugin`
- `npm i -D mini-css-extract-plugin`
- `npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`

## Setting up the API

### Step 1: Signup for a MeaningCloud API key
You can find the API https://www.meaningcloud.com/developer/sentiment-analysis. Once you create an account with MeaningCloud, you will be given a license key to start using the API.

### Step 2: Using the API

We're ready to go! The API has a lot of different endpoints but using this (https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/what-is-sentiment-analysis).

### Step 3: Running the Server

- npm start:  starts the server
- npm run build-dev:  builds the development folders
- npm run build-prod:  builds the production folders which includes the distribution folders
- npm test:  to run tests



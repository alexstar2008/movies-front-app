## Intro

This is the front-end part of "Movie-app".

Live example [Heroku]: https://movies-app-front.herokuapp.com/

Technologies: React + Redux + react-bootstrap (simple UI)

Project structure:
  
  -actions ( fetching data and setting filters)
  
  -components ( form elements & single movie )
  
  -containers ( main 'movies' element & Searchbar & Toolbar )
  
  -reducers ( movie reducer & filter reducer )

  -Utils ( filter & sort for list of movies )

## Installation

1) Clone this repository: git clone https://github.com/alexstar2008/movies-front-app.git
1) Make sure that you have latest @node and @npm versions
2) Run "npm install" to install dependencies
3) Run "npm start" to start live-reload app

Other scripts can be found in "Available Scripts"

Enjoy:)

## Deploy to heroku

  Link: https://blog.heroku.com/deploying-react-with-zero-configuration

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


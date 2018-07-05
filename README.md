## Data visualisation

 - This application is intended to demostrate a front-end which visualises data about US states:
    - Uses React & Redux & Immutable.JS javascript libraries,
    - Uses Jest testing library,
    - Uses react-bootstrap responsive components,
    - Uses chartist responsive data visualisation library,
    - Monitors the sass files and producess the css files automatically (crrently no custom css),
    - Contains a search field through which a user can search for a particular state,
    - Connected to the jobs.search.gov via cors enabled backend application,
    - Runs in a docker
    
 - Prerequisites
    - git, Node.js, yarn, docker

## Getting Started

### `git clone https://github.com/bbellikan/dashboard.git`<br>
### `cd dashboard`<br>

## Dashboard install
### `yarn install`<br>

## Install backend and run with node.js
### `cd backend`<br>
### `yarn install`<br>
### `node server.js`<br>
You should see the message:<br>
CORS-enabled web server listening on port 8080<br>
Data files and API fetches are served by the backend application<br>

## Available Scripts

In the dashboard project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `yarn test`

Testing: Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.<br>


## Dockerizing the applicaiton
Fallowing the article on the below link, a dockerized build is created; <br>
[https://medium.com/ai2-blog/dockerizing-a-react-application-3563688a2378](https://medium.com/ai2-blog/dockerizing-a-react-application-3563688a2378)

(on ubuntu you may be required to run the fallowing commands starting with sudo)<br>
### `time docker build -t react-docker .`
Successfully built 2430a7febd88

### `docker run -p 5000:5000 react-docker`
INFO: Accepting connections at http://localhost:5000

Start the application<br>

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.<br>

### `docker ps`
Run from a different terminal to whatch the running containers

### `docker kill [CONTAINER ID]`
Kill the applicaiton
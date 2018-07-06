## Simple Login & Grid

 - This application is intended to demostrate a front-end to be able to log in and out and create a grid to display the sample data:
    - Uses React & Redux javascript libraries,
    - Uses Jest testing library,
    - Uses react-bootstrap responsive components,
    - Monitors the sass files and producess the css files automatically,
    - Can run in a docker
    
 - Prerequisites
    - git, Node.js, yarn, docker(optional)

## Getting Started

### `git clone https://github.com/bbellikan/login.git`<br>
### `cd login`<br>

## Login install
### `yarn install`<br>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `yarn test`

Testing: Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.<br>
Test Results:<br>
 PASS  src\components\Menubar.spec.js<br>
 PASS  src\containers\LoginContainer.spec.js<br>
 PASS  src\components\App.spec.js<br>
 PASS  src\containers\GridContainer.spec.js<br>
 PASS  src\actions\grid.spec.js<br>
 PASS  src\components\Col.spec.js<br>
 PASS  src\reducers\gridCols.spec.js<br>
 PASS  src\components\Editable.spec.js<br>
 PASS  src\reducers\login.spec.js<br>
 PASS  src\reducers\gridData.spec.js<br>
 PASS  src\components\ColDelete.spec.js<br>
 PASS  src\actions\login.spec.js<br>
 PASS  src\components\CellHeader.spec.js<br>

Test Suites: 13 passed, 13 total<br>
Tests:       23 passed, 23 total<br>
Snapshots:   9 passed, 9 total<br>
Time:        1.73s<br>

## Dockerizing the applicaiton (optional)
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
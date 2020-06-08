// Creatin a new React App
/*
  React Application is the best way to start building single page application.

  Here we can create a simple app called my-app using following commands.

  npm install -g create-react-app
  create-react-app my-app
  cd my-app
  npm start
*/

// Hello World Application
/*
  The easiest way to get started with React is to use this Hello World example code.

    //index.html
    <div id="root">
        <!-- This element's contents will be replaced with your component. -->
    </div>

    //index.js
    ReactDOM.render(
      <h1>Hello, world!</h1>,
      document.getElementById('root')
    );
*/

// Jest setup for React Apps
/*
  Run the following command to install Jest.

    $ npm install jest

  In the app folder, create a folder, __tests__ to store the test files.

  To run the added test use the below command.

    npm run test //or npm test or npm t
*/

//By default, Jest searches all directories for the test folder with name __test__ and runs all .js files inside it.

// Testing React Component with Enzyme
/*
  To assert and manipulate rendered components, you can use Enzyme or React's TestUtils. Here we use Enzyme for this example.

  Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse a React Component's output.

  To install Enzyme, run the following command:

    $ npm install --save-dev enzyme react-addons-test-utils
*/

// How Enzymes work
/*
  //welcome.jsx

  export default class Welcome extends React.Component {
    render() {
      return (
        <div>Hello world</div>
      );
    }
}
*/
/*
import React from 'react';

import expect from 'expect';

import { shallow } from 'enzyme';

import Welcome from '../src/client/components/welcome.jsx';

  describe('Welcome', () => {
    it('Welcome renders hello world', () => {
      const welcome = shallow(<Welcome />);
      expect(welcome.find('div').text()).toEqual('Hello world');
    });
  });
*/

// Introdution to SnapShot Testing
/*
  Snapshot tests are a useful tool whenever you want to make sure your UI does not change unexpectedly.

  It is a way to test your UI component without writing actual test cases.

  Here is how it works:

    Step 1: Save a snapshot of a single state of UI.

    Step 2: While adding a new feature, it generates new snapshots for the updated UI components.

    Step 3: Then it compares it to a reference image stored alongside the test.

  The word snapshot has nothing to do with images or screenshots. They are purely textual.
*/

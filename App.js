import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Main from './src/screens/main';
import LibraryCat from './src/screens/libraryCat';
import LibraryCont from './src/screens/libraryCont';
import DevCat from './src/screens/devCat';
import DevCont from './src/screens/devCont';
import SocialMain from './src/screens/socialMain';
import SocialAction from './src/screens/socialActions';

export default class App extends Component {
  render(){
    // redux and reduxthunk store.
    const store = createStore(reducers);

    // provides the navigation block within the redux store.
    //
    // mainScene: initial screen upon loading oryggi. contains buttons to navigate to the other scenes.
    //
    // libraryScenes: => "Library". ./data/oryggi_lib.json
    // devicesecurityScenes: => "Device Security". ./data/oryggi_dev.json
    // socialScenes: => "Social Engineering". ./data/oryggi_social.json

    return(
      <Provider store={store}>
        <Router>
          <Scene key="mainScene" hideNavBar component={Main} initial />
          <Scene key="libraryCategory" onBack={() => Actions.mainScene()} hideNavBar={false} component={LibraryCat} />
          <Scene key="libraryContent" hideNavBar={false} onBack={() => Actions.libraryCategory()} component={LibraryCont} />
          <Scene key="deviceCategory" hideNavBar={false} onBack={() => Actions.mainScene()} component={DevCat} />
          <Scene key="deviceContent" hideNavBar={false} onBack={() => Actions.deviceCategory()} component={DevCont} />
          <Scene key="socialMain" hideNavBar={false} onBack={() => Actions.mainScene()} component={SocialMain} />
          <Scene key="socialActions" hideNavBar={false} onBack={() => Actions.socialMain()} component={SocialAction} />
        </Router>
      </Provider>
    );
  }

}

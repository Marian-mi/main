import './assets/scss/home-page.scss';
import Homepage from './Pages/home-page';
import SooreList from './Pages/soore-list';
import AyatPage from './Pages/ayate-page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Fragment } from 'react';



function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={() => {
            return <Fragment>
              <Homepage />
              <SooreList />
            </Fragment>
          }}></Route>
          <Route path="/Aye" exact={false} component={AyatPage}></Route>
        </Switch>
      </>
    </Router> 
  );
}

export default App;

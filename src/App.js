import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { 
  Header, Footer, Contact_us, Privacy_policy, Terms_of_use 
} from './components/layout/index';
import {
  Volunteer, Request_help, Supply_stores, Covid19_data, How_it_works, About
} from './components/content/index';
import {
  VolunteerSignUp
} from './components/content/index';
import HomePage from './components/homepage';

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={About}/>

        <Route exact path="/volunteer" component={Volunteer}/>
        <Route exact path="/volunteer/signup" component={VolunteerSignUp}/>

        <Route exact path="/request_help/:id" component={Request_help}/>

        <Route exact path="/supply_stores" component={Supply_stores}/>
        <Route exact path="/covid19_data" component={Covid19_data}/>
        <Route exact path="/how_it_works" component={How_it_works}/>
        
        <Route exact path="/contact_us" component={Contact_us}/>
        <Route exact path="/privacy_policy" component={Privacy_policy}/>
        <Route exact path="/terms_of_use" component={Terms_of_use}/>

      </Switch>

      <Footer />

    </div>
  )
}

export default App

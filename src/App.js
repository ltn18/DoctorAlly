import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { 
  Header, Footer, Contact_us, Privacy_policy, Terms_of_use 
} from './components/layout/index';
import HomePage from './components/homepage';

const App = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage}/>
        {/* <Route path="/about" component={About}/>
        <Route path="/volunteer" component={Volunteer}/>
        <Route path="/request_help" component={Request_help}/>
        <Route path="/supply_stores" component={Supply_stores}/>
        <Route path="/covid19_data" component={Covid19_data}/>
        <Route path="/how_it_works" component={How_it_works}/> */}
        
        <Route path="/contact_us" component={Contact_us}/>
        <Route path="/privacy_policy" component={Privacy_policy}/>
        <Route path="/terms_of_use" component={Terms_of_use}/>
      </Switch>

      <Footer />
    </div>
  )
}

export default App

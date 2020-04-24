import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LocaleContext from './components/context/localeCtx';

import {
  Header, HomePage, Footer, Contact_us, Feedbacks, Privacy_policy, Terms_of_use
} from './components/layout/index';

import {
  Volunteer, Request_help, Supply_stores, Covid19_data, How_it_works, About
} from './components/content/index';

import {
  VolunteerSignUp, RequestResponse, OfferHelp, SuccessVolunteer, SuccessRequest, SuccessOffer
} from './components/content/index';

const App = () => {
  const [lang, setLang] = useState("ENG");
  return (
    <LocaleContext.Provider value={{ lang: lang, setLang: setLang }}>
      <div style={{ fontFamily: 'Lexend Giga' }}>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />

          <Route exact path="/volunteer" component={Volunteer} />
          <Route exact path="/volunteer/signup" component={VolunteerSignUp} />
          <Route exact path="/volunteer/signup/success" component={SuccessVolunteer} />

          <Route exact path="/requests/:id" component={RequestResponse} />

          {/* <Route exact path="/request_help">
            <Redirect push to="/request_help/1" />
          </Route> */}
          <Route exact path="/request_help/:id" component={Request_help} />
          <Route exact path="/request_help/2/success" component={SuccessRequest} />
          
          <Route exact path="/offer_help/:id" component={OfferHelp} />
          <Route exact path="/offer_help/:id/success" component={SuccessOffer} />

          <Route exact path="/supply_stores" component={Supply_stores} />
          <Route exact path="/covid19_data" component={Covid19_data} />
          <Route exact path="/how_it_works" component={How_it_works} />

          <Route exact path="/contact_us" component={Contact_us} />
          <Route exact path="/feedbacks" component={Feedbacks} />
          <Route exact path="/privacy_policy" component={Privacy_policy} />
          <Route exact path="/terms_of_use" component={Terms_of_use} />

        </Switch>

        <Footer />

      </div>
    </LocaleContext.Provider>
  )
}

export default App

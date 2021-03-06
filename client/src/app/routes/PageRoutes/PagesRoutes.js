import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from '../../modules/main-page/pages/MainPage';
import Authentification from './../../modules/authentification/pages/Authentification';
import { AboutPage } from '../../modules/about/pages/AboutCafe';
import CafeCatalog from './../../modules/cafe-catalog/pages/CafeCatalog';
import AppCafe from '../../modules/cafe-info/AppCafe';
import { BookingCondition } from '../../modules/booking-conditions/pages/BookingCondition';
import ReservationInfo from '../../modules/reservation-info/pages/ReservationInfo';

class PagesRouter extends React.Component {

  render() {

    return (
      <main role="main" className="mb-5">
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/authentification" component={Authentification} />
        <Route path="/about" component={AboutPage} />
        <Route path="/catalog/:page/:entry?" component={CafeCatalog} />
        <Route path="/cafe/:placeId" component={AppCafe} />
        <Route path="/booking-conditions" component={BookingCondition} />
        <Route path="/reservation-info" component={ReservationInfo} />
      </main>
    );
  }
}

export default PagesRouter;

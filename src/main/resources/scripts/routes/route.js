'use strict';

import React, {Component} from 'react';
import {Router, Route, Link, IndexRoute} from 'react-router';
import {createHistory, useBasename} from 'history';
import CustomerApp from '../containers/customerApp';
import CustomerIndex from '../containers/customerIndex';
import InvestmentHall from '../components/investmentHall';
import Reg from '../components/reg';
import RegFormContainer from '../containers/regFormContainer';
import InvestorNextstep from '../components/investorNextStep';
import FinshInvestorReg from '../components/finshInvestorReg';
import CompanyNextContainer from '../containers/companyNextContainer';
import LoginContainer from '../containers/LoginContainer';
import InvestorApp from '../containers/investorApp';
import InvestorIndexContainer from '../containers/investorIndexContainer';
import InvestorModelContainer from '../containers/InvestorModelContainer';
import ReleaseTenderContainer from '../containers/releaseTenderContainer';
import DebtPubContainer from '../containers/DebtPubContainer';
import DebtPurchaseContainer from '../containers/DebtPurchaseContainer';
import ChatContainer from '../containers/chatContainer';
import NewsContainer from '../containers/newsContainer';
import ManageSocket from '../containers/manageSocketContainer';
import IfollowContainer from '../containers/ifollowContainer';
import Inews from '../containers/inewsContainer';
import CompanyApp from '../containers/companyApp';
import CompanyIndexContainer from '../containers/companyIndexContainer';
import CorporateModelContainer from '../containers/corporateModelContainer';
import FinancePubContainer from '../containers/financePubContainer';
import Compub from '../components/comPub';
import RaisedbondsContainer from '../containers/raisedbondsContainer';
import CompanyNewsConatainer from '../containers/companyNewsContainer';
import NewsReleaseContainer from '../containers/newsReleaseContainer';
import ComInews from '../components/comInews';
import AdminNewsContainer from '../containers/adminNewsContainer';
import Reservation from '../components/reservation';
import ToReservationContainer from '../containers/toReservationContainer';
import FinanceCompanyContainer from '../containers/financeCompanyContainer';
import BusinessServiceContainer from '../containers/businessServiceContainer';

const history = useBasename(createHistory)({
  basename: '/'
})

export default class CustomerRoute extends Component {
  render() {
	return (
	  <Router history={history}>
		 <Route path="/customer" component={CustomerApp}>
		  <IndexRoute component={CustomerIndex} />
		  <Route path="index/:index" component={CustomerIndex} />
      <Route path="invest/:index" component={InvestmentHall} />
      <Route path="finance/:index" component={FinanceCompanyContainer} />
      <Route path="service/:index" component={BusinessServiceContainer} />
      <Route path="login" component={LoginContainer} />
      <Route path="reg" component={Reg}>
        <Route path="investorNext" component={InvestorNextstep} />
        <Route path="finshInvestor" component={FinshInvestorReg} />
        <Route path="companyNext" component={CompanyNextContainer}/>
        <IndexRoute component={RegFormContainer} />
      </Route>
		</Route>
		<Route path="/investor" component={InvestorApp}>
		  <IndexRoute component={InvestorIndexContainer} />
		  <Route path="index/:index" component={InvestorIndexContainer} />
		  <Route path="investModel/:index" component={InvestorModelContainer}/>
		  <Route path="pub" component={DebtPubContainer}>
		    <Route path="render/:index" component={ReleaseTenderContainer} />
		    <Route path="debt/:index" component={DebtPurchaseContainer} />
		  </Route>
		  <Route path="chat/:index" component={ChatContainer} />
		  <Route path="news/:index/:newsType" component={NewsContainer} />
		  <Route path="manage/:index/:investType" component={ManageSocket} />
		  <Route path="ifollow" component={IfollowContainer} />
		  <Route path="inews" component={Inews} />
		</Route>
		<Route path="/company" component={CompanyApp}>
		  <IndexRoute component={CompanyIndexContainer} />
      <Route path="index/:index" component={CompanyIndexContainer} />
      <Route path="corporateModel/:index" component={CorporateModelContainer} />
      <Route path="pub" component={Compub}>
        <Route path="finance/:index" component={FinancePubContainer} />
        <Route path="raisedbonds:/index" component={RaisedbondsContainer} />
      </Route>
      <Route path="chat/:index" component={ChatContainer} />
      <Route path="infoPublish/:index" component={CompanyNewsConatainer}>
        <Route path="release" component={NewsReleaseContainer}/>
        <IndexRoute component={NewsReleaseContainer}/>
      </Route>
      <Route path="manage/:index/:investType" component={ManageSocket} />
      <Route path="ifollow" component={IfollowContainer} />        
      <Route path="inews" component={ComInews}>
        <IndexRoute component={AdminNewsContainer} />
        <Route path="admin" component={AdminNewsContainer} />
      </Route>
      <Route path="reservation" component={Reservation}>
        <Route path="current" componnet={ToReservationContainer} />
        <IndexRoute component={ToReservationContainer} />
      </Route>
		</Route>
	 </Router>
	 )
  }
}
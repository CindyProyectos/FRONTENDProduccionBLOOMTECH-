/**
 * Basic Table
 */
import React, { Component, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import { connect } from 'react-redux';

// api
import api from 'Api';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import { apiCall } from 'MyApi';

class BasicTable extends Component {

   constructor(props) {
      super(props);
      this.state = {
         dataBTC: { valor: '', label: true },
         dataETH: { valor: '', label: true },
         dataBNB: { valor: '', label: true },
         intervalBTC: 0,
         intervalETH: 0,
         intervalBNB: 0
      };
   };

   componentDidMount = () => {
      this.getPriceBTC();
      this.getPriceETH();
      this.getPriceBNB();
      this.setState({ intervalBTC: setInterval(() => this.getPriceBTC(), 2000) });
      this.setState({ intervalETH: setInterval(() => this.getPriceETH(), 2000) });
      this.setState({ intervalBNB: setInterval(() => this.getPriceBNB(), 2000) });
   }

   componentWillUnmount() {
      clearInterval(this.state.intervalBTC);
      clearInterval(this.state.intervalETH);
      clearInterval(this.state.intervalBNB);
   };

   // get price BITCOIN
   getPriceBTC() {
      const headers = {
         "Content-type": "application/json",
      }
      apiCall('/pagoCripto/all/checkPriceBTC', '', '', 'GET')
         .then((responseJson) => {
            this.setState({
               dataBTC: responseJson.data
            })
         })
         .catch((error) => {
            console.error(error);
         });
   }

   // get price ETHEREUM
   getPriceETH() {
      const headers = {
         "Content-type": "application/json",
      }
      apiCall('/pagoCripto/all/checkPriceETH', '', '', 'GET')
         .then((responseJson) => {
            this.setState({
               dataETH: responseJson.data
            })
         })
         .catch((error) => {
            console.error(error);
         });
   }

   // get price BNB
   getPriceBNB() {
      const headers = {
         "Content-type": "application/json",
      }
      apiCall('/pagoCripto/all/checkPriceBNB', '', '', 'GET')
         .then((responseJson) => {
            this.setState({
               dataBNB: responseJson.data
            })
         })
         .catch((error) => {
            console.error(error);
         });
   };

   render() {
      const { match } = this.props;

      return (
         <div className="table-wrapper">
            <PageTitleBar title={<IntlMessages id="sidebar.realTimeTitle" />} match={match} />
            <RctCollapsibleCard align="center" heading={<IntlMessages id="sidebar.realTimeTable.title" />} fullBlock>
               <div className="table-responsive">
                  <Table>
                     <TableHead>
                        <TableRow hover>
                           <TableCell>{<IntlMessages id="sidebar.realTimeTable.name" />}</TableCell>
                           <TableCell align="center">{<IntlMessages id="sidebar.realTimeTable.price" />}</TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        <Fragment>
                           <TableRow hover key="BTC">
                              <TableCell>Bitcoin</TableCell>
                              <TableCell align="center">{this.state.dataBTC.valor}</TableCell>
                           </TableRow>
                           <TableRow hover key="ETH">
                              <TableCell>Ethereum</TableCell>
                              <TableCell align="center">{this.state.dataETH.valor}</TableCell>
                           </TableRow>
                           <TableRow hover key="BNB">
                              <TableCell>BNB</TableCell>
                              <TableCell align="center">{this.state.dataBNB.valor}</TableCell>
                           </TableRow>
                        </Fragment>
                     </TableBody>
                  </Table>
               </div>
            </RctCollapsibleCard>
         </div>
      );
   }
}

// En caso de que se necesite usar actions redux (middleware pendiente)
/*export default connect(
   (state) => ({
      dataBTC: state.realTimePricing.dataBTC,
      dataETH: state.realTimePricing.dataETH,
      dataBNB: state.realTimePricing.dataBNB
   }), { getPriceBTC, getPriceETH, getPriceBNB }
)(BasicTable);*/

export default BasicTable;

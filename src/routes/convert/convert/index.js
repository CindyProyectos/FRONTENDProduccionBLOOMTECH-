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

 class Convert extends Component {

     constructor(props) {
         super(props);
     };

     render() {
         const { match } = this.props;
         return (
             <div className="table-wrapper">
                 <PageTitleBar title={<IntlMessages id="sidebar.convert.convert" />} match={match} />
                 <RctCollapsibleCard align="center" heading={<IntlMessages id="sidebar.convert.convert" />} fullBlock>
                 </RctCollapsibleCard>
             </div>
         );
     }
 }

 export default Convert;
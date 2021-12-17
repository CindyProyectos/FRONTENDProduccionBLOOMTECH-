/**
 * Add Users
 */
 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 import Button from '@material-ui/core/Button';
 import { Form, FormGroup, Input } from 'reactstrap';

 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 import { RctCard } from '../../../components/RctCard';
 import { AppBar, Typography } from '@material-ui/core';
 import Tabs from '@material-ui/core/Tabs';
 import Tab from '@material-ui/core/Tab';


 import Addnormal from './components/Addnormal';
 import Addsponsor from './components/Addsponsor';
 
 function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
 }
 
 export default class Addusers extends Component {
    state = {
        activeTab: this.props.location.state ? this.props.location.state.activeTab : 0
     }
  
     handleChange = (event, value) => {
        this.setState({ activeTab: value });
     }

     render() {
        const { activeTab } = this.state;
         return (
             <div className="blank-wrapper">
                 <Helmet>
                     <title>Add Users Page</title>
                     <meta name="description" content="Reactify Add Users Page" />
                 </Helmet>
                 <RctCard>
                     <div className="rct-tabs">
                         <AppBar position="static">
                             <Tabs value={activeTab}
                                 onChange={this.handleChange}
                                 variant="scrollable"
                                 scrollButtons="off"
                                 indicatorColor="primary"
                                 >
                                 <Tab
                                    label={<IntlMessages id="components.addnormaluser" />}
                                 />
                                 <Tab
                                    label={<IntlMessages id="components.addsponsoruser" />}
                                 />
                             </Tabs>
                         </AppBar>
                         {activeTab === 0 &&
                         <TabContainer>
                             <Addnormal />
                         </TabContainer>}
                        {activeTab === 1 &&
                        <TabContainer>
                            <Addsponsor />
                        </TabContainer>}
                     </div>
                 </RctCard>                 
             </div>
         );
     }
 }
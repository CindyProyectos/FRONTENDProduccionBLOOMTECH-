/**
 * mY TEAM Page
 */
 import React, { Component } from 'react';
 import { Helmet } from "react-helmet";
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

 //components
 import { OrderStatusWidget } from "Components/Widgets";
 import MUIDataTable from "mui-datatables";
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';

 // rct collapsible card
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

 
 import { apiCall } from 'MyApi';
 import Moment from 'moment';

 import level1 from './nivel_1.json';

 /*import authToken from '/Users/Usuario/Desktop/PROYECTO3/bloomtech-front/src/Auth/utils/authToken'
   if(localStorage.getItem('token')){
      authToken(localStorage.getItem('token'));
   }*/

 const initialState = [];
 const headers = {
   'Authorization': 'Bearer '+localStorage.getItem('token')};

 export default class MyTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
           dataLevel: initialState
        };
     };

    componentDidMount = () => {
        this.getLevel(1);
     }
     getLevel(level) {
        apiCall('/red/level/'+level+'/father/'+localStorage.getItem("iduser"), '', headers, 'GET')
           .then((responseJson) => {
              this.setState({
                 dataLevel: responseJson.data.map((sons) => (
                    [sons.hijo_id.email, sons.hijo_id.nombres, Moment(sons.fecha_creacion).format('MMM d, Y'), Moment(sons.fecha_creacion).format('MMM d, Y'), "-", "", '-', "-"]
                 ))
             })
           })
           .catch((error) => {
              this.setState({
                   dataLevel: initialState
                })
           });
        /*this.setState({
           dataLevel: level1.map((sons) => (
              [sons.hijo_id.email, sons.hijo_id.nombres, Moment(sons.fecha_creacion).format('MMM d, Y'), Moment(sons.fecha_creacion).format('MMM d, Y'), "-", 50, '-', "-"]
           ))
        })*/
     };
    render() {
      const columns = ["User ID", "Name", "Joined On", "Active On", "Staked USD", "Team", "Active Team", "Total Business"];
      const data = [this.state.dataLevel];
      const options = {
         filterType: 'dropdown',
         selectableRows: false
      };
      console.log(data[0]);
       return (
          <div className="myteam-wrapper">
             <Helmet>
                <title>Mi Equipo Page</title>
                <meta name="description" content="Reactify Mi Equipo Page" />
             </Helmet>
             <h2 className="heading"><IntlMessages id="sidebar.myteam" /></h2>
             <div className="allteam-status mb-30">
               <ul className="list-inline d-flex align-content-center">
                  <li className="list-inline-item col">
                     <h4>Team</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">10</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/man.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <h4>Direct</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">5</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/united.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <h4>Active</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/checked.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
                  <li className="list-inline-item col">
                     <h4>UVAD Price</h4>
                     <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                           <h2 className="title">$0</h2>
                        </li>
                        <li className="list-inline-item col">
                           <img src={require(`Assets/img/uvad.png`)} height="55" />
                        </li>
                     </ul>
                  </li>
               </ul>
             </div>
             <RctCollapsibleCard
               heading="Direct Team"
               fullBlock
            >
                <MUIDataTable
                  data={data[0]}
                  columns={columns}
                  options={options}
               />
            </RctCollapsibleCard>
          </div>
       );
    }
 }
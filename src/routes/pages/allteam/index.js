/**
 * ALL TEAM Page
 */
 import React, { Component } from 'react';
 import MUIDataTable from "mui-datatables";
 import update from 'react-addons-update';
 import Moment from 'moment';
 import { Helmet } from "react-helmet";
 // page title bar
 import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
 
 // intl messages
 import IntlMessages from 'Util/IntlMessages';
 
 // rct collapsible card
 import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
 
 /*import authToken from '/Users/Usuario/Desktop/PROYECTO3/bloomtech-front/src/Auth/utils/authToken'
if(localStorage.getItem('token')){
   authToken(localStorage.getItem('token'));
}*/

 import { apiCall } from 'MyApi';
 
 import level1 from './nivel_1.json'
 import level2 from './nivel_2.json'
 
 const initialState = [];
 const headers = {
    'Authorization': 'Bearer '+localStorage.getItem('token')};
 
 export default class AllTeam extends Component {
 
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
      
      apiCall('/red/level/'+level+'/father/'+localStorage.getItem('iduser'), '', headers , 'GET')
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
   };

   // Método de prueba para nivel dos
   getLevelDos(level) {
      this.setState({
         dataLevel: level2.map((sons) => (
            [sons.hijo_id.email, sons.hijo_id.nombres, Moment(sons.fecha_creacion).format('MMM d, Y'), Moment(sons.fecha_creacion).format('MMM d, Y'), "-", "0", '-', "-"]
         ))
      })
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
               <title>Todo el Equipo Page</title>
               <meta name="description" content="Reactify Todo el Equipo Page" />
            </Helmet>
            <h2 className="heading"><IntlMessages id="sidebar.allteam" /></h2>
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
               heading="Team"
               fullBlock
            >
               <ul className="list-inline d-flex align-content-center">
                  <li className="list-inline-item col">
                     <a className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(1)}><h4>Level 1</h4></a>
                  </li>
                  {/*

                  <li className="list-inline-item col">
                     <a className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(2)}><h4>Level 2</h4></a>
                  </li>*/
                  }
                  {/* Prueba para nivel 2 */

                     <li className="list-inline-item col">
                     <a className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(2)}><h4>Level 2</h4></a>
                     </li>
                  }
                  <li className="list-inline-item col">
                     <a className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(3)}><h4>Level 3</h4></a>
                  </li>
                  <li className="list-inline-item col">
                     <a className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(4)}><h4>Level 4</h4></a>
                  </li>
                  <li className="list-inline-item col">
                     <button className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(5)}><h4>Level 5</h4></button>
                  </li>
                  <li className="list-inline-item col">
                     <a className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(6)}><h4>Level 6</h4></a>
                  </li>
                  <li className="list-inline-item col">
                     <a className="MuiButtonBase-root 
                                    MuiButton-text"
                        tabIndex="0"
                        role="button"
                        onClick={() => this.getLevel(7)}><h4>Level 7</h4></a>
                  </li>
               </ul>

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
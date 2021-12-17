/**
 * User Block
 */
import React, { Component } from 'react';
import { Input } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';


class UserBlock extends Component {

    state = {
        baseImage : ""
    }
    fileSelectionHandler = event =>{
        let file = event.target.files[0];
        const base64 = this.getBase64(file)
    } 
    getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = ()=>{
                localStorage.setItem("fotouser", fileReader.result);
                this.setState({
                    baseImage : fileReader.result
                });
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    render() {
        const { baseImage } = this.state;
        console.log("Base Image: "+baseImage);
        return (
            <div className="profile-top mb-20">
                <img src={require('Assets/img/finalprofile.png')} alt="profile banner" className="img-fluid" width="1920" height="345" />
                <div className="profile-content">
                    <div className="media">
                    <ul className="list-inline d-flex align-content-center">
                        <li className="list-inline-item col">
                            <ul className="list-inline d-flex align-content-center">
                                <li className="list-inline-item row">
                                    {/* <img src={require('Assets/avatars/profile.jpg')} alt="user profile" className="rounded-circle mr-25 bordered" width="150" height="150" /> */}
                                    <img src={(baseImage === "" ? require('Assets/avatars/profile.jpg') : baseImage)} alt="user profile" className="rounded-circle mr-25 bordered" width="150" height="150" />
                                    <label htmlFor='icon-button-file'>
                                        <IconButton color="primary" aria-label="upload picture" component="span" size='large'>
                                            <i className="zmdi zmdi-camera-add "></i>
                                        </IconButton>
                                    </label>
                                    <Input accept="image/*" id="icon-button-file" type="file" style={{display:'none'}} onChange={this.fileSelectionHandler}/>
                                </li>
                            </ul>

                        </li>
                    </ul>
                        
                        <div className="media-body pt-25">
                            <div className="mb-20">

                                <h2>{localStorage.getItem("nombreuser")}</h2>
                                <p>{localStorage.getItem("emailuser")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserBlock;

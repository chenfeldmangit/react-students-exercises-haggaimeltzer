import React from 'react';
import NavBarAssets from '../../assets/NavBarAssets';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import UserAPI from '../../db/userAPI';
import LoginActions from '../../actions/login_actions';
import {connect} from 'react-redux';

class MoreNavBarItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLogoutOpen: false};  
    }

    showLogoutModal = () => {
      this.setState({isLogoutOpen:true});
    };

    hideLogoutModal = () => {
      this.setState({isLogoutOpen:false});
    };

    getIcon = ()=>{
        return NavBarAssets.getItemIcon(this.props.name);
    };

    getName = ()=>{
      return NavBarAssets.getItemText(this.props.name);
    };

    onMenuItemClick = (eventKey, event)=>{
        switch(eventKey){
            case "logout" :
                this.showLogoutModal();
                break;
            default:
                break;
        }
    }

    onLogout = ()=>{
        UserAPI.logout();
        this.hideLogoutModal();
        this.props.onLoggedOut();
    }

    render() {
      return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="nav-item" >
                    <img className="svg-img nav-icon" src={this.getIcon()} alt={this.getName()}/>
                    <span className="navitem-text"> {this.props.name} </span>
                </Dropdown.Toggle>
            
                <Dropdown.Menu >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="logout" onSelect={this.onMenuItemClick}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Modal show={this.state.isLogoutOpen} onHide={this.hideLogoutModal}>
                <Modal.Header>
                <Modal.Title>Log out?</Modal.Title>
                </Modal.Header>
                <Modal.Body>hope you remember your pass to log back in.... </Modal.Body>
                <Modal.Footer>
                <button onClick={this.hideLogoutModal}>Cancel</button>
                <button onClick={this.onLogout}>Log out</button>
                </Modal.Footer>
            </Modal>
        </>
      );
    }
}

const mapStateToProps = (state)=>{
    return { 
        loginData: state.loginData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoggedIn: username=>{
            dispatch(LoginActions.createLoggedInAction(username));
        },
        onLoggedOut:()=>{
            dispatch(LoginActions.createLoggedOutAction());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoreNavBarItem);
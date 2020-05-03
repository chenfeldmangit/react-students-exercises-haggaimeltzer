import React from 'react';
import NavBarAssets from '../../assets/NavBarAssets';
import { NavLink } from 'react-router-dom'

export default class NavBarItem extends React.Component {
    getIcon = ()=>{
        return NavBarAssets.getItemIcon(this.props.name);
    };

    getName = ()=>{
      return NavBarAssets.getItemText(this.props.name) + ((this.props.count && this.props.count>0)? `(${this.props.count})` : "");
  };

  getRef = ()=>{
      return NavBarAssets.getItemRef(this.props.name);
  };

    onClicked = ()=>{

    }

    render() {
      return (
        // eslint-disable-next-line
        <NavLink className="nav-item" href={this.getRef()} to={this.getRef()} onClick={this.onClicked()}>
            {this.getIcon()?
              <img className="svg-img nav-icon" src={this.getIcon()} alt={this.getName()}/>
              :
              null
            }
            <span className="navitem-text"> {this.getName()} </span>
        </NavLink>
      );
    }
  }
import React from 'react';
import NavBarAssets from '../../assets/NavBarAssets';

export default class NavBarItem extends React.Component {
    getIcon = ()=>{
        return NavBarAssets.getItemIcon(this.props.name);
    };

    getName = ()=>{
      return NavBarAssets.getItemText(this.props.name);
  };

  getRef = ()=>{
      return NavBarAssets.getItemRef(this.props.name);
  };

    onClicked = ()=>{

    }

    render() {
      return (
        // eslint-disable-next-line
        <a className="nav-item" href={this.getRef()} onClick={this.onClicked()}>
            <img className="svg-img nav-icon" src={this.getIcon()} alt={this.getName()}/>
            <span className="navitem-text"> {this.props.name} </span>
        </a>
      );
    }
  }
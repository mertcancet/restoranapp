import React from 'react';
import "./Sidebar.css"
class SideNav extends React.Component{
    render(){
        return(
            <div className="sideBar"></div>
        );
    }
}




export default class Sidebar extends React.Component {
  render() {
    return (
        <SideNav></SideNav>
    );
  }
}
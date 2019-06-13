import React, { Component } from 'react'
import {connect} from 'react-redux'
class UserInfo extends Component {
    render() {
        return (
            <div>
                <h3 style={{margin:"25px"}}>FirstName :  {this.props.profil.FirstName} <br/></h3>
                <h3>LastName :  {this.props.profil.LastName}<br/></h3>
                <h3>Username :  {this.props.profil.Username}<br/></h3>
                <h3>Email :  {this.props.profil.Email}<br/></h3>
                <h3>Password :  {this.props.profil.Password}<br/></h3>
                <h3>City :  {this.props.profil.City}<br/></h3>
                <h3>State :  {this.props.profil.State}<br/></h3>
                <h3>Zip : {this.props.profil.Zip} </h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profil: state.userReducer.profil,
    }
}
export default connect(mapStateToProps)(UserInfo)
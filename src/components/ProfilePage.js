import React from 'react';
import { connect } from 'react-redux';

function ProfilePage(props){

    //props = username
    return(
        <div className ='profile-page'>
            <p>{props.user.email}</p>
        </div>
    )
};

const mapStatetoProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStatetoProps)(ProfilePage);
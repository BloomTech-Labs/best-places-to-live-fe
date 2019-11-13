import React from "react";
import { connect } from "react-redux";

function ProfilePage({ user }) {
  console.log(user);
  //props = username
  return (
    <div className="profile-page">
      <p>{user.email}</p>
    </div>
  );
}

const mapStatetoProps = state => {
  const { user } = state;
  return {
    user
  };
};

export default connect(mapStatetoProps)(ProfilePage);

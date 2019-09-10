import React from 'react';
import PropTypes from 'prop-types'; //impt
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url} }) => { //destructuring user prop needed up here and pulling from prop what we need
    return (
      <div className="card text-center">
        <img src={avatar_url} alt='' className='round-img' style={{ width:'60px' }}
        />
        <h3>{login}</h3>

        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            Message
          </Link>
        </div>
      </div>
    );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired, //ptor, pta snippet shortcut
}

export default UserItem

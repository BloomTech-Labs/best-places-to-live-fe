import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Navigation from '../Navigation'

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://mongo3.letsmovehomie.com:3001/')
      .then((response) => {
        setWelcomeMessage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome Message:</h2>
      <p>{welcomeMessage}</p>
    </div>
  );
};

export default Home;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Navigation from '../Navigation'

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    const fetchWelcomeMessage = () => {
      axios
        .get('http://mongo3.letsmovehomie.com:3001/')
        .then((response) => {
          setWelcomeMessage(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchNames = () => {
      axios
        .get('http://mongo3.letsmovehomie.com:3001/all')
        .then((response) => {
          setPersonList(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchWelcomeMessage();
    fetchNames();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome Message:</h2>
      <p>{welcomeMessage}</p>

      <form>
        <label htmlFor='person'>Add Person</label>
        <input type='text' />
        <button type='submit'>Add Person</button>
      </form>

      <h2>List of names:</h2>
      <div>
        {personList.map((person) => (
          <p key={person._id}>{person.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;

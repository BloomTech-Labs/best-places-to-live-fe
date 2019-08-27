import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navigation from '../Navigation';

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [personList, setPersonList] = useState([]);
  const [inputs, setInputs] = useState({
    name: '',
  });

  useEffect(() => {
    const fetchWelcomeMessage = () => {
      axios
        .get('http://stagingbe.letsmovehomie.com:3001/')
        .then((response) => {
          setWelcomeMessage(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const fetchNames = () => {
      axios
        .get('http://stagingbe.letsmovehomie.com:3001/all')
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

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://stagingbe.letsmovehomie.com:3001/add', {
        name: inputs.name,
      })
      .then((response) => {
        setPersonList((persons) => [response.data, ...persons]);
        setInputs({
          name: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navigation />
      <h1>Home</h1>
      <h2>Welcome Message:</h2>
      <p>{welcomeMessage}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor='person'>Add Person</label>
        <input
            autoFocus
            className="nameInput"
            type='text'
            id='name'
            value={inputs.name}
            onChange={handleChange}
        />
        <button data-cy="submit" type='submit'>Add Person</button>
      </form>

      <h2>List of names:</h2>

      <div>
        {personList.map((person) => (
          <li key={person._id}>{person.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { fetchLocations } from "../actions/actionCreatorr";

const ExplorePage = ({ fetchLocations }) => {
  const [factors, setFactors] = useState([]);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    //Per BE, will be searchTerm
    fetchLocations({ searchTerm: data.location });
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="location"
        name="location"
        ref={register({ required: true, minLength: 1 })}
      />

      <button type="submit">Search</button>
      <Link to="/search-results-page">
        <button>Explore!</button>
      </Link>
    </form>
  );
};

export default connect(
  null,
  { fetchLocations }
)(ExplorePage);

// Link connected to redux
//  - fetchLocations
//  - pass in array of factors selected
// import top 10 factors from another file (which maybe would be an endpoint in the future)

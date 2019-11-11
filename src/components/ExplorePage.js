import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { fetchLocations } from "../actions/locations";
import Error from "./Error";
// seth
const ExplorePage = ({ fetchLocations }) => {
  const [factors, setFactors] = useState([
    "Job Market",
    "Food",
    "Chicken",
    "Number of Diapers",
    "Proximity to Rack City"
  ]);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    console.log(data);

    const fetchResult = await fetchLocations({ factors });
    //If no error, push user to new page else
    !error ? history.push("/search-results-page") : null;
  };
  console.log(errors);

  return (
    <>
      <Error error={error} />
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
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchLocations, fetchFactors }
)(ExplorePage);

// Link connected to redux
//  - fetchLocations
//  - pass in array of factors selected
// import top 10 factors from another file (which maybe would be an endpoint in the future)

import React from "react";
import useForm from "react-hook-form";
import { fetchLocations } from "../action/actionCreator";
import { connect } from "react-redux";

function SearchByCity({ fetchLocations }) {
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
    </form>
  );
}

export default connect(
  null,
  { fetchLocations }
)(SearchByCity);

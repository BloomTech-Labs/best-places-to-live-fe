import React from "react";
import useForm from "react-hook-form";

export default function SearchByCity({fetchLocations}) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    //Per BE, will be searchTerm
    fetchLocations({searchTerm: data.location});
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

      <input type="submit">Search</input>
    </form>
  );
}

export default connect(
    null,
    { fetchLocations }
  )(SearchByCity);
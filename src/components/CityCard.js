import React from "react";
import { Card, Image } from "../styles/index";

function CityCard({ city }) {
  return (
    <Card width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }} m={2}>
      <p className="city-location">{city.name}</p>
      <p className="population">Population: {city.population}</p>
      <p className="costOfLiving">
        Cost of Living Rank: {city.cost_of_living}{" "}
      </p>

      {city.photo !==
        "https://letsmovehomie-city-photoes.nyc3.digitaloceanspaces.com/no-photo-available.jpg" && (
        <Image
          src={city.photo}
          alt="city"
          className="city-image"
          width={"100%"}
          max-width={300}
        />
      )}
    </Card>
  );
}

//will probably props drill city card, state will have array of cities for search results
export default CityCard;

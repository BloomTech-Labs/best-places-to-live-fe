import React from "react";
import { Card, Image, Text } from "../styles/index";

function CityCard({ city }) {
  return (
    <Card
      border={"1.5px solid #333"}
      p={[1, 2]}
      width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
      m={2}
    >
      <Text>{city.name}</Text>
      <Text>Population: {city.population}</Text>
      {city.photo !==
        "https://letsmovehomie-city-photoes.nyc3.digitaloceanspaces.com/no-photo-available.jpg" && (
        <Image src={city.photo} alt="city" width={"100%"} maxWidth={300} />
      )}
    </Card>
  );
}

//will probably props drill city card, state will have array of cities for search results
export default CityCard;

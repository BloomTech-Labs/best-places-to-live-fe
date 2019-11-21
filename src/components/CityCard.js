import React, { useEffect } from "react";
import { Card, Image, Text } from "../styles/index";

function CityCard({ city, page }) {
  console.log(window.innerWidth);
  if (page && window.innerWidth <= 500) {
    return (
      <Card
        as="article"
        border={"1.5px solid #333"}
        p={[1, 2]}
        width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
        m={2}
        flex="0 0 50%"
      >
        <Text as="h2">{city.short_name}</Text>
        <Text as="h4">{city.state}</Text>
        <Text as="h6">Population: {city.population}</Text>
        <Image
          src={city.photoMobile}
          alt={city.name}
          width={"100%"}
          maxWidth={300}
        />
      </Card>
    );
  }
  return (
    <Card
      as="article"
      border={"1.5px solid #333"}
      p={[1, 2]}
      width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
      m={2}
    >
      <Text as="h2">{city.short_name}</Text>
      <Text as="h4">{city.state}</Text>
      <Text as="h6">Population: {city.population}</Text>
      <Image
        src={city.photoWeb}
        alt={city.name}
        width={"100%"}
        maxWidth={300}
      />
    </Card>
  );
}

//will probably props drill city card, state will have array of cities for search results
export default CityCard;

/* 
    <Card
      as="article"
      border={"1.5px solid #333"}
      p={[1, 2]}
      width={{ _: 1, sm: 1, md: 1 / 2, lg: 1 / 4 }}
      m={2}
    >
      <Text as="h2">{city.short_name}</Text>
      <Text as="h4">{city.state}</Text>
      <Text as="h6">Population: {city.population}</Text>
      <Image
        src={city.photoWeb}
        alt={city.name}
        width={"100%"}
        maxWidth={300}
      />
    </Card>


*/

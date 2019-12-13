import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import { Container, Text, Hero, Image } from "../styles/index";
import LoadingComponent from "./LoadingComponent";
import Footer from "./Footer";
import LikeIcon from "./LikeIcon";
import theme from "../theme";
import { factors } from "../utils/factors";
import axios from "axios";
import Attribution from "./Attribution";

const CityPage = ({ match, likes }) => {
  const cityID = match.params.id;
  const [imgUrl, setImgUrl] = useState("");
  const response = useFetch(`${baseURL}city`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ids: [cityID] })
  });

  console.log(response);

  useEffect(() => {
    const dataViz = () => {
      axios({
        method: "post",
        url: "https://best-places-api.herokuapp.com/visual",
        data: { input1: factors.map(factor => factor.factor), input2: cityID },
        responseType: "blob"
      })
        .then(res => {
          setImgUrl(URL.createObjectURL(res.data));
        })
        .catch(err => console.log(err));
    };
    dataViz();
  }, [cityID]);

  if (!response.response || response.isLoading) {
    return (
      <Container as="main">
        <LoadingComponent />
        <Footer />
      </Container>
    );
  } else {
    const cityInfo = response.response.data[0];
    const cityName = cityInfo.short_name;
    const stateName = cityInfo.state;
    const cityID = cityInfo._id;
    const photo = cityInfo.secure_url;
    const summary = cityInfo.Summary;

    //For Backend
    const city = {
      city_name: cityInfo.name,
      city_id: cityID
    };

    const isLiked = (currentCityID, likedCities) =>
      likedCities.find(({ _id }) => _id === currentCityID);

    return (
      <Container as="main" maxWidth="600px" margin="0 auto">
        <Container textAlign="center">
          <Text as="h1">{cityName}</Text>
          <Text as="h2">{stateName}</Text>
          <LikeIcon iconColor city={city} liked={isLiked(cityID, likes)} />
          <Hero
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            background={` 
          linear-gradient(
            rgba(0, 0, 0, 0.30), 
            rgba(0, 0, 0, 0.30)
          ),
          
          url(${photo})`}
            backgroundSize="cover"
            backgroundPosition="center"
            padding="130px 100px 100px"
          />
          <Container
            backgroundColor={theme.colors.silver}
            padding="1.2rem 1.5rem"
            margin="3rem 4rem"
          >
            <Text
              as="p"
              lineHeight="1.5"
              fontSize="1rem"
              m={0}
              textAlign="left"
            >
              {summary}
            </Text>
            <Attribution />
          </Container>

          <Container padding="2rem 2rem">
            {!imgUrl && <LoadingComponent />}
            <Image
              maxWidth="550px"
              width="100%"
              alt="data-viz"
              id="blob"
              src={imgUrl}
            />
          </Container>
        </Container>
        <Footer />
      </Container>
    );
  }
};

const mapStateToProps = state => {
  const { user } = state;
  return {
    likes: user.likes
  };
};

export default connect(mapStateToProps, {})(CityPage);

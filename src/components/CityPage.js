import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { baseURL } from "../utils/axiosWithAuth";
import { Container, Text, Hero, Image, Button, Grid } from "../styles/index";
import LoadingComponent from "./LoadingComponent";
import LikeIcon from "./LikeIcon";
import theme from "../theme";
import { factors } from "../utils/factors";
import axios from "axios";
import Icon from "./Icon";
import Attribution from "./Attribution";
import CityComparisonForm from "./CityComparisonForm";
import CityCard from "./CityCard";
import LazyLoad from "react-lazyload";

const CityPage = ({ match, likes, history }) => {
  const cityID = match.params.id;
  const [imgUrl, setImgUrl] = useState("");
  const [show, setShow] = useState(false);

  const response = useFetch(`${baseURL}city`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ids: [cityID] })
  });

  //Change to BE endpoint
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
        ""
      </Container>
    );
  } else {
    const city = response.response.data[0];

    return (
      <Container as="main" maxWidth="600px" margin="0 auto">
        <Container textAlign="center">
          <Text as="h1">{city.short_name}</Text>
          <Text as="h2">{city.state}</Text>
          <LazyLoad resize>
            <CityCard
              city={{
                _id: city._id,
                name: city.short_name,
                secure_url: city.secure_url
              }}
              page="city"
            />
          </LazyLoad>
          <Container>
            <CityComparisonForm cityID={city._id} history={history} />
          </Container>
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
              {city.Summary}
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
        ""
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

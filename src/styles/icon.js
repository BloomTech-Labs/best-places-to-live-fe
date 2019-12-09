import styled from "styled-components";
import { layout, space, flexbox, background, color } from "styled-system";
import {
  FaMoneyBill,
  FaLeaf,
  FaRegHospital,
  FaHome,
  FaWpforms,
  FaWifi
} from "react-icons/fa";
import {
  IoIosClock,
  IoIosWarning,
  IoIosRocket,
  IoIosMore,
  IoMdSchool,
  IoMdPeople
} from "react-icons/io";
import { GiAqueduct, GiForestCamp, GiCoins } from "react-icons/gi";

/* 
React Icon Names for Each Factor
"Commute Time"               IoIosClock
"Cost of Living"             FaMoneyBill
"Economy"                    giCoins
"Education"                 IoMdSchool
"Environmental Quality"     FaLeaf
"Healthcare"                FaRegHospital
"Housing"                  FaHome
"Internet"                     FaWifi
"Leisure and Culture"       GiAqueduct
"Outdoors"                  GiForestCamp
"Safety"                  IoIosWarning
"Start Ups"                IoIosRocket
"Taxation"              FaWpforms
"Population"               IoMdPeople
"More"                      IoIosMore
*/

//Currently using variables to make code dryer
const fontSize = "20px";

const CommuteTimeIcon = styled(IoIosClock)``;

const StyledRegHeart = styled(FiHeart)`
  color: ${() => (rest.iconColor ? "black" : "white")};
  font-size: 20px;
  fill: ${() => (liked ? "red" : "transparent")};
  transition: all 0.225s ease-in-out;

  &:hover {
    cursor: pointer;
    fill: #e81919;
    transform: scale(1.5);
  }
`;

const StyledFaTimes = styled(FaTimes)`
  color: ${() => (rest.iconColor ? "black" : "white")};

  font-size: 20px;

  transition: all 0.225s ease-in-out;

  &:hover {
    cursor: pointer;
    fill: #e81919;
    opacity: 0.75;
    transform: scale(1.5);
  }
`;

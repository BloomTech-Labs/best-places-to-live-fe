import React from "react";
import {
  MainComponentBox,
  TitleBox,
  CategoryContentBox,
  CategoryCard,
  IconBox
} from "./styled";
import costofliving from "../images/budget.png";
import commute from "../images/travel.png";
import safety from "../images/police-car.png";
import tolerance from "../images/tolerance.png";

const CategoryContent = () => {
  return (
    <MainComponentBox>
      <TitleBox>
        <h1>How we can help a Homie out</h1>
        <p>
          With over 5,000 cities available to explore our categories can help
          you easily find a place to call home. Use them to find the top scoring
          cities in the category that's most significant to you.
        </p>
      </TitleBox>
      <CategoryContentBox>
        <CategoryCard>
          <IconBox src={costofliving}></IconBox>
          <h4>Cost of Living</h4>
          <p>
            The amount of money needed to sustain a certain standard of living
            by affording basic expenses such as housing, food, taxes, and
            healthcare.
          </p>
        </CategoryCard>
        <CategoryCard>
          <IconBox src={commute}></IconBox>
          <h4>Commute</h4>
          <p>
            A regular journey of some distance such as to and from your place of
            work. How long will it take the homies to get where they want to go?
          </p>
        </CategoryCard>
        <CategoryCard>
          <IconBox src={safety}></IconBox>
          <h4>Safety</h4>
          <p>
            A collection of overall crime rates in the area so all our homies
            can stay safe!
          </p>
        </CategoryCard>
        <CategoryCard>
          <IconBox src={tolerance}></IconBox>
          <h4>Tolerance</h4>
          <p>
            We respect homies of all races, religions, and orientations. Find a
            place to call home that does too!
          </p>
        </CategoryCard>
      </CategoryContentBox>
    </MainComponentBox>
  );
};

export default CategoryContent;

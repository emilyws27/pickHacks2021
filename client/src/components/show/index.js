import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "../../components/show/item";
import "../../components/show/style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Index() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Top Games</h1>
      <div className="Ap">
        <Carousel breakPoints={breakPoints}>
          <Item>Pubg</Item>
          <Item>Need For Speed</Item>
          <Item>GTA V</Item>
          <Item>GTA SanAndreas</Item>
          <Item>Assasins Creed</Item>
          <Item>Apex</Item>
          <Item>GTA Vice City</Item>
          <Item>Road Rash</Item>
        </Carousel>
      </div>
    </>
  );
}

export default Index;
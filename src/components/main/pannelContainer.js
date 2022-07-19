import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import styled from "styled-components";
import { AutoPlay } from "@egjs/flicking-plugins";
import pannel1 from "../../assets/img/pannel1.png";
import pannel2 from "../../assets/img/pannel2.png";
import pannel3 from "../../assets/img/pannel3.png";

const Pannel = styled.div`
  width: 1000px;
  height: 300px;
  background-color: red;
  margin-right: 50px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PannelContainer = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  return (
    <Flicking
      plugins={plugins}
      defaultIndex={1}
      align="center"
      circular={true}
      onMoveEnd={(e) => {
        console.log(e);
      }}
    >
      <Pannel>
        <img src={pannel1} alt="pannel" />
      </Pannel>
      <Pannel>
        <img src={pannel2} alt="pannel" />
      </Pannel>
      <Pannel>
        <img src={pannel3} alt="pannel" />
      </Pannel>
    </Flicking>
  );
};

export default PannelContainer;

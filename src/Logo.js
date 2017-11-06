import React from "react";
import styled from "styled-components";

import { Border, Heading, Text } from "rebass";

const Name = styled(Text)`
  font-family: "Bungee", cursive;
  letter-spacing: 2px;
`;

export default () => (
  <Border bottom pb={16} mb={16}>
    <Heading center f={[4, 5, 6, 8]} color="#bb00cc">
      <Name>Twarze ciernistych wycinek</Name>
      <span role="img" aria-label="Logo">
        ✂️
      </span>
      <span role="img" aria-label="Logo">
        ✂️
      </span>
      <span role="img" aria-label="Logo">
        ✂️
      </span>
    </Heading>
  </Border>
);

import React from "react";
import styled from "styled-components";

import { Border, Heading, Text, Lead } from "rebass";

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
    <Lead f={[3, 4, 5, 6]} center mt={16}>
      <em>
        To uczucie gdy chcesz wrócić do krawędzi twarzy twojego ulubionego
        celebryty ale internet jest jak ulotna mgła chwil.
      </em>
      <br />
      - Paulo Coelho
    </Lead>
  </Border>
);

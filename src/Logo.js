import React from "react";

import { Border, Heading } from "rebass";

export default () => (
  <Border bottom pb={16} mb={16}>
    <Heading center f={[4, 5, 6]} color="#bb00cc">
      Twarze ciernistych wycinek<br />
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

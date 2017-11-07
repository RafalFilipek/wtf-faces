import React from "react";

import { Flex, Text } from "rebass";

export default () => (
  <Flex justify="center">
    <Text f={3} center>
      <span role="img" aria-label="Dude">
        🤷
      </span>
      <br />
      code Rafał, design Rafał, idea Rafał, Rafał, Rafał, Rafał ...
      <br />
      twarze{" "}
      <strong>
        <a href="https://o2.pl">o2.pl</a>
      </strong>
      <br />
      <strong>
        <span role="img" aria-label="Beer">
          🍻
        </span>{" "}
        <a
          href="https://twitter.com/rafalfilipek"
          ithout
          rel="noopener noreferrer"
          target="_blank"
        >
          Rafał
        </a>
      </strong>
    </Text>
  </Flex>
);

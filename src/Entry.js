import React from "react";
import styled from "styled-components";

import {
  Box,
  Card,
  Text,
  BackgroundImage,
  Border,
  Relative,
  Absolute,
  Link,
  Truncate
} from "rebass";

import Stars from "./Stars";

const Image = styled(BackgroundImage)`
  transition: all 0.25s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export default ({ entry, setOverlay }) => (
  <Box width={[1, 1 / 2, 1 / 3, 1 / 3, 1 / 4]}>
    <Card m={8} p={16}>
      <Relative>
        <Link href={entry.url} target="_blank" rel="noopener">
          <Absolute top right>
            <span role="img" aria-label="Show me what you got!">
              🔗
            </span>
          </Absolute>
        </Link>

        <Image
          ratio={1}
          src={`https://i.wpimg.pl/412x/${entry.thumbnail.replace(
            "https://",
            ""
          )}`}
          onClick={() => setOverlay(entry.thumbnail)}
        />
        <Border top bottom mt={8}>
          <Text
            p={2}
            f={5}
            center
            color="fuschia"
            style={{ textDecoration: "none" }}
          >
            <Truncate bold>{entry.signature}</Truncate>
          </Text>
        </Border>
        {false && <Stars />}
      </Relative>
    </Card>
  </Box>
);

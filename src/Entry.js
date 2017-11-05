import React from "react";

import {
  Box,
  Card,
  Text,
  BackgroundImage,
  Border,
  Relative,
  Absolute,
  Link
} from "rebass";

import Stars from "./Stars";

export default ({ entry, setOverlay }) => (
  <Box width={[1, 1 / 2, 1 / 3, 1 / 4]}>
    <Card m={8} p={16}>
      <Relative>
        <Link href={entry.url} target="_blank">
          <Absolute top right>
            <span role="img" aria-label="Show me what you got!">
              🔗
            </span>
          </Absolute>
        </Link>

        <BackgroundImage
          ratio={1}
          src={entry.thumbnail}
          onClick={() => setOverlay(entry.thumbnail)}
        />
        <Border top bottom mt={8}>
          <Text
            p={2}
            center
            bold
            color="fuschia"
            style={{ textDecoration: "none" }}
          >
            <span>{entry.signature}</span>
          </Text>
        </Border>
        <Stars />
      </Relative>
    </Card>
  </Box>
);

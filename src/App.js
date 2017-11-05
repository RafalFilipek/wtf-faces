import React from "react";
import { Provider, Flex, Image, Divider, Overlay, Fixed } from "rebass";
import { graphql } from "react-apollo";
import InfiniteScroll from "react-infinite-scroller";
import Spinner from "react-spinkit";
import withState from "recompose/withState";

import query from "./query";
import Logo from "./Logo";
import Entry from "./Entry";
import Footer from "./Footer";

export default graphql(query, {
  options(props) {
    return {
      variables: {
        skip: 0,
        first: 16
      },
      fetchPolicy: "network-only"
    };
  },
  props({ data: { loading, entries, meta = {}, fetchMore } }) {
    return {
      loading,
      entries,
      hasMore: meta.count === undefined || meta.count > entries.length,
      loadNextPage() {
        return fetchMore({
          variables: {
            skip: entries.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return Object.assign({}, previousResult, {
              entries: [...previousResult.entries, ...fetchMoreResult.entries]
            });
          }
        });
      }
    };
  }
})(
  withState(
    "overlay",
    "setOverlay",
    false
  )(({ loading, entries, hasMore, loadNextPage, overlay, setOverlay }) => (
    <Provider>
      <Flex wrap mx="auto" column width={[1, 0.8]} p={16}>
        {overlay && (
          <div>
            <Fixed top right bottom left onClick={() => setOverlay(false)} />
            <Overlay style={{ zIndex: 1000 }}>
              <Image src={overlay} />
            </Overlay>
          </div>
        )}
        <Logo />
        {entries && (
          <InfiniteScroll
            pageStart={0}
            hasMore={hasMore}
            loader={
              <Flex p={16} justify="center">
                <Spinner name="pacman" color="#bb00cc" />
              </Flex>
            }
            loadMore={loadNextPage}
          >
            <Flex wrap>
              {entries.map(entry => (
                <Entry
                  setOverlay={setOverlay}
                  key={entry.id}
                  id={entry.id}
                  entry={entry}
                />
              ))}
            </Flex>
          </InfiniteScroll>
        )}
        <Divider color="#bb00cc" w={1} />
        <Footer />
      </Flex>
    </Provider>
  ))
);

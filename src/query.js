import gql from "graphql-tag";

export default gql`
  query entries($skip: Int, $first: Int) {
    entries: allFaces(orderBy: contentId_DESC, skip: $skip, first: $first) {
      id
      url
      contentId
      thumbnail
      signature
    }
    meta: _allFacesMeta {
      count
    }
  }
`;

import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Category {
    category {
      slug
      name
    }
  }
`;

export default CATEGORIES_QUERY;
import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug: String!){
    articles(where: {slug: $slug}) {
      slug
      title
      category {
        slug
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLE_QUERY;
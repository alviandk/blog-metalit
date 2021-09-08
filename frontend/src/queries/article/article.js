import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug: String!){
    articles(where: {slug: $slug} limit:3) {
      slug
      title
      content
      description
      author{
        name
      }
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
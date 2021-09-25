import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug:String!){
    article(slug:$slug) {
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
      image
    }
  }
`;

export default ARTICLE_QUERY;
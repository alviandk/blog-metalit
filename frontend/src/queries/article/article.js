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
      image
      Category{
        name
        slug
      }
    }
  }
`;

export default ARTICLE_QUERY;
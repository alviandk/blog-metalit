import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles($first: Int = null, $skip: Int = null){
    articles(first:$first, skip:$skip){
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

export default ARTICLES_QUERY;
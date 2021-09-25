import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
  query Category($slug: String!){
    category(where: {slug: $slug}) {
      name
      articles {
        slug
        title
        content
        description
        author{
        name
        }
        image
        category {
          slug
          name
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
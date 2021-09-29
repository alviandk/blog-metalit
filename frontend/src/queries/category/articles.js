import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
  query Categories($slug: String!){
    categories(slug:$slug) {
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
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
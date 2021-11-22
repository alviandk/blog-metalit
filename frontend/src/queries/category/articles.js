import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
  query Categories($slug: String!, $after: String){
    categories(slug:$slug){
      id
      name
      article(first: 1, after: $after){
        pageInfo{
          startCursor
          hasNextPage
          endCursor
        }
        edges{
          node{
            id
            title
            description
            content
            slug
            image
            author{
              name
            }
            Category{
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;
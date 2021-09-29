import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
  query Categories($slug: String!){
    categories(slug:$slug) {
      name
      slug
      article{
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
  }
`;

export default CATEGORY_ARTICLES_QUERY;
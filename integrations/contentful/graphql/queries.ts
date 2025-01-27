import { gql } from 'graphql-request';

// Query for Page including referenced Teaser Cards
export const GET_PAGE_WITH_TEASERS = gql`
    query GetPageWithTeasers($url: String!) {
        pageCollection(where: { url: $url }, limit: 1) {
            items {
                title
                url
            }
        }
    }
`;

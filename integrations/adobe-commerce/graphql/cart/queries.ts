import {gql} from 'graphql-request';

// Query for specific product details
export const CREATE_GUEST_CART = gql`
    query createCart {
        mutation {
            createEmptyCart
        }
    }
`;

import {gql} from 'graphql-request';

// Query for specific product details
export const GET_PRODUCT_DETAILS = gql`
    query GetProduct($sku: String!) {
        products(filter: { sku: { eq: $sku } }) {
            items {
                id
                sku
                name
                price_range {
                    minimum_price {
                        regular_price {
                            value
                            currency
                        }
                    }
                }
                description {
                    html
                }
                image {
                    url
                    label
                }
            }
        }
    }
`;

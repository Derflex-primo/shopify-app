export const CUSTOMER_FRAGMENT = `#graphql
  fragment Customer on Customer {
    id
    firstName
    lastName
    defaultAddress {
      ...Address
    }
    addresses(first: 6) {
      nodes {
        ...Address
      }
    }
  }
  fragment Address on CustomerAddress {
    id
    formatted
    firstName
    lastName
    company
    address1
    address2
    territoryCode
    zoneCode
    city
    zip
    phoneNumber
  }
`;

export const CUSTOMER_DETAILS_QUERY = `#graphql
  query CustomerDetails {
    customer {
      ...Customer
    }
  }
  ${CUSTOMER_FRAGMENT}
`;

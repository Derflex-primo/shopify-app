export const CUSTOMER_UPDATE_MUTATION = `#graphql
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
  ){
    customerUpdate(input: $customer) {
      customer {
        firstName
        lastName
        emailAddress {
          emailAddress
        }
        phoneNumber {
          phoneNumber
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;

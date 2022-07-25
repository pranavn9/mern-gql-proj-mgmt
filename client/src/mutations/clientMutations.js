const { gql } = require("@apollo/client");

// const ADD_CLIENT = gql`
//   mutation addClient($name: String!, $email: String!, $phone: String!) {
//     addClient(name: $name, email: $email, phone: $phone) {
//       id
//       name
//       email
//       phone
//     }
//   }
// `;

const DELETE_CLIENT = gql`
  mutation deleteClient($id: String!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;

export { DELETE_CLIENT };

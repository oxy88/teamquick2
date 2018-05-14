import gql from 'graphql-tag'

const USERS_QUERY = gql`
query users_query {
    users {
        id
        name
    }
}
`

export default USERS_QUERY
import gql from 'graphql-tag'

const USERS_QUERY = gql`
query usersQuery {
    users {
        id
        name
    }
}
`

export default USERS_QUERY
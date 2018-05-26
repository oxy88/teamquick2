import gql from 'graphql-tag'

const USERS_QUERY = gql`
query usersQuery {
    users {
        id
        name
        avatarUrl
    }
}
`

export default USERS_QUERY
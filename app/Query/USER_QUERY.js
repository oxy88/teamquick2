import gql from 'graphql-tag'

const USER_QUERY = gql`
query userQuery($id: ID!) {
    user(id: $id) {
        id
        name
        avatarUrl
        teams {
            id
            category
            name
            logoUrl
        }
        events {
            id
            name
        }
        interests {
            id
            category
            description
        }
    }
}
`

export default USER_QUERY
import gql from 'graphql-tag'

const USER_QUERY = gql`
query userQuery($id: ID!) {
    user(id: $id) {
        id
        name
        avatarUrl
        introduction
        events {
            id
            name
        }
        interests {
            id
            category
            firstLine
            secondLine
            thirdLine
            teams {
            id
            category
            name
            logoUrl
            }
        }
    }
}
`

export default USER_QUERY
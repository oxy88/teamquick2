import gql from 'graphql-tag'

const MY_PROFILE_QUERY = gql`
query myProfileQuery {
    myProfile {
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

export default MY_PROFILE_QUERY
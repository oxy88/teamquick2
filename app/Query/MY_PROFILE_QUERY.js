import gql from 'graphql-tag'

const MY_PROFILE_QUERY = gql`
query myProfileQuery {
    myProfile {
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
            categoryIconUrl
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

export default MY_PROFILE_QUERY


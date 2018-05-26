import gql from 'graphql-tag'

const TEAM_QUERY = gql`
query teamQuery($id: ID!) {
    team(id: $id) {
        id
        name
        category
        description
        logoUrl
        members {
            id
        }
    }
}
`

export default TEAM_QUERY
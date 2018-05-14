import gql from 'graphql-tag'

const TEAM_QUERY = gql`
query teamQuery($id: ID!) {
    team(id: $id) {
        id
        name
        logoUrl
        members {
            id
            name
        }
    }
}
`

export default TEAM_QUERY
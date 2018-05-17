import gql from 'graphql-tag'

const TEAMS_QUERY = gql`
query teamsQuery {
    teams {
        id
        name
        description
        logoUrl
        members {
            id
            name
        }
    }
}
`

export default TEAMS_QUERY
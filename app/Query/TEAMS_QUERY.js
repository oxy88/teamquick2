import gql from 'graphql-tag'

const TEAMS_QUERY = gql`
query teamsQuery {
    teams {
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

export default TEAMS_QUERY
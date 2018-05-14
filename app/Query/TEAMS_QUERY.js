import gql from 'graphql-tag'

const TEAMS_QUERY = gql`
query teams_query {
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
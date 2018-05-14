import gql from 'graphql-tag'

const EVENTS_QUERY = gql`
query events_query {
    events {
        id
        name
        iconUrl
    }
}
`

export default EVENTS_QUERY
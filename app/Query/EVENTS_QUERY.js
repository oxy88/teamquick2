import gql from 'graphql-tag'

const EVENTS_QUERY = gql`
query eventsQuery {
    events {
        id
        name
        iconUrl
    }
}
`

export default EVENTS_QUERY
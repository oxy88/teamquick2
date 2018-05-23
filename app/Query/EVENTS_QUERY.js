import gql from 'graphql-tag'

const EVENTS_QUERY = gql`
query eventsQuery {
    events {
        id
        name
        category
        type
        startTime
        place {
            description
            lat
            lng
        }
        iconUrl
    }
}
`

export default EVENTS_QUERY
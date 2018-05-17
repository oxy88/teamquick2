import gql from 'graphql-tag'

const MY_ID_QUERY = gql`
query myIdQuery {
    myId
}
`

export default MY_ID_QUERY
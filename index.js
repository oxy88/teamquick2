import React from 'react'
import { AsyncStorage, Platform, AppRegistry, YellowBox } from 'react-native';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import { setContext } from 'apollo-link-context'

import { API_ENDPOINT, GENYMOTION_API, TOKEN } from './app/config/constants'

import App from './app/App';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const API = Platform.OS === "ios" ? API_ENDPOINT : GENYMOTION_API

const httpLink = new HttpLink({
  uri: API
})

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem(TOKEN)
  return {
    headers: { 
      ...headers,
      authorization: token ? `Bearer ${token}` : null
    }
  }
})

const wsLink = new WebSocketLink({
  uri: API,
  options: {
    reconnect: true,
    connectionParams: async() => ({
      authToken: await AsyncStorage.getItem(TOKEN)
    })
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink)
)

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
})

const Apollo = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

AppRegistry.registerComponent('front3', () => Apollo);

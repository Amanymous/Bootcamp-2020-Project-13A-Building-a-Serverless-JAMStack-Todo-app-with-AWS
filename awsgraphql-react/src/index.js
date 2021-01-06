import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import { ApolloProvider } from 'react-apollo'

const client = new AWSAppSyncClient({
    url: 'https://yh7djjhwlrbrnooyybmff4c22a.appsync-api.us-east-1.amazonaws.com/graphql',
    region: aws_config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: 'da2-gv53rajcsfeilhduqvelejx6we'

    }
});



ReactDOM.render(<ApolloProvider client={client}>
    <App />
</ApolloProvider>, document.getElementById('root'));



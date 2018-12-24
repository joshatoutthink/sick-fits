import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

import Form from './styles/Form'
import Error from './ErrorMessage'


const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email:String!){
    requestReset(email:$email ){
     message
    }
  }
`

export default class RequestReset extends Component {
  state = {
    email: '',
  }

  handleOnChange = (e) => {
    this.setState(
      { [e.target.name]: e.target.value }
    )
  }
  render() {
    return (
      <Mutation 
        mutation={REQUEST_RESET_MUTATION} 
        variables={this.state}
      >
        {(resetRequest, { loading, error, called }) => {
          return (
            <Form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                const res = await resetRequest()
                console.log(res)
                this.setState({
                  email: '',
                })
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Request Password</h2>
                <Error error={error} />
                {!error && !loading && called && <p>Check your Email to reset your password</p>}
                <label htmlFor="email">
                  Email
                <input type="text" name="email" value={this.state.email} onChange={this.handleOnChange} />
                </label>
                

                <input type="submit" />
              </fieldset>
            </Form>
          )
        }}
      </Mutation>
    )
  }
}

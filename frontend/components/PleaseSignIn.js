import {Query } from 'react-apollo'
import { CURRENT_USER_QUERY } from './User'
import SignIn from './SignIn'

const PleaseSignIn = props =>(
  <Query query={CURRENT_USER_QUERY}>
  {({data, loading})=>{
    if(loading) return <p>loading...</p>
    if(!data.me){
      return (
        <div>
          <p>Pleaase Sign in</p>
          <SignIn/>
        </div>
      )
    }
    return props.children
  }}
  </Query>
)
export default PleaseSignIn
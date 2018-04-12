import React, {Component} from 'react'
// import LinkedinSDK from 'react-linkedin-sdk'
import axios from 'axios'

class Test extends Component {

getRecord = () => {
  axios.get('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=123456789&redirect_uri=https%3A%2F%2Fwww.example.com%2Fauth%2Flinkedin&state=987654321&scope=r_basicprofile').then( result => {
    console.log('result', result);
  })
}
  responseLinkedin = response => {
    console.log(response)
  }
  render() {
    return (
      // <LinkedinSDK
      //   clientId="7123456789"
      //   callBack={this.responseLinkedin}
      //   fields=":(id,num-connections,picture-url)"
      //   className={'className'}
      //   textButton={'Login with Linkedin'}
      //   buttonType={'button'}
      // />
      <button type="submit" onClick={this.getRecord}>Click Me</button>
    )
  }
}


export default Test;

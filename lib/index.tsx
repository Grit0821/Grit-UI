import ReactDOM from 'react-dom'
import React from 'react'
import Icon from './icon/icon'

ReactDOM.render( <div>
  <Icon name="amazon" onClick={() => console.log('')}/>
  <Icon name="apple"/>
  <Icon name="facebook"/>
  <Icon name="google"/>
  <Icon name="microsoft"/>
  <Icon name="twitter"/>

</div> , document.querySelector("#root"))

import React, { Component } from 'react'
import styled from 'styled-components'

const ValueDisplayer = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  border: 2px solid green;
  margin-bottom: 15px;
  padding: 0 20px;
  h6{
      margin:10px;
  }
  .author{
      margin-bottom: 5px;
      margin-top: 15px;
  }
  button{
      margin-bottom: 5px;
  }
`


export default class ValueBox extends Component {
  render() {
    return (
      <ValueDisplayer>
        <h1>{this.props.value}</h1>
      </ValueDisplayer>
    )
  }
}
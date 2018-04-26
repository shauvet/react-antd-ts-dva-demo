import React from 'react';

import {connect} from 'dva';

const A = ({a, dispatch}: any) => {
  return (
    <div>
      <h1>{a}</h1>
      <p>fetch result from model a</p>
      <hr/>
      <button onClick={() => dispatch({type: 'a/fetch'})}>Fetch</button>
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    a: state.a
  }
}

export default connect(mapStateToProps)(A);
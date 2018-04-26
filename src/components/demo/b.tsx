import React from 'react';

import {connect} from 'dva';

const B = ({b, dispatch}: any) => {
  return (
    <div>
      <h1>{b}</h1>
      <p>foo result from model b and fetch result from model a</p>
      <hr/>
      <button onClick={() => dispatch({type: 'b/foo'})}>Foo</button>
    </div>
  )
};

function mapStateToProps(state: any) {
  return {
    b: state.b
  }
}

export default connect(mapStateToProps)(B);
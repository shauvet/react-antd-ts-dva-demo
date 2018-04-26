import React from 'react';

import { connect } from 'dva';

const Counter = ({count, dispatch}: any) => {
    return (
        <div>
            Count: { count }
            <hr/>
            <button onClick={() => { dispatch({type: 'count/add'})}}>add</button>
            <button onClick={() => { dispatch({type: 'count/minus'})}}>minus</button>
            <button onClick={() => { dispatch({type: 'count/redirect'})}}>redirect</button>
            <button onClick={() => { dispatch({type: 'count/addWithDelay'})}}>add With Delay</button>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);
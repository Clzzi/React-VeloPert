// import React,{ useReducer, useState } from 'react';

// function reducer(state, action) {
//     switch(action.type) {
//         case 'INCREMENT' : 
//             return state + 1;
//         case 'DECREMENT' :
//             return state - 1;
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// function Counter() {

//     const [number, dispatch] = useReducer(reducer, 0);
//     //const [number, setNumber] = useState(0);
//     const onIncrease = () => {
//         dispatch({
//             type: 'INCREMENT'
//         })
//         //setNumber(number + 1);
//         //setNumber(prevNum => pervNum + 1); - 함수형 업데이터
//     }

//     const onDecrease = () => {
//         dispatch({
//             type: 'DECREMENT'
//         })
//         //setNumber(number - 1);
//         //setNumber(prevNum => pervNum - 1); - 함수형 업데이터
//     }
//     return(
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

// export default Counter;



import React, { Component } from 'react';
class Counter extends Component {
    state = {
        counter : 0,
        fixed : 1,
        update: {
            toggleMe: false,
            dontChangeMe: 1,
        },
    };

    handleIncrease = () => {
        this.setState({
            counter: this.state.counter + 1
        });
        // 함수형 업데이트
        // this.setState(state => ({
        //     counter: state.counter + 1,
        // }));
    };

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };

    handleToggle = () => {
        this.setState({
            updateMe: {
                toggleMe: !this.state.updateMe.toggleMe,
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 : {this.state.fixed}</p>
            </div>
        )
    }
}

export default Counter;
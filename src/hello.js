// import React from 'react';

// function Hello({ color, name, isSpecial }) {
//     return (
//         <>
//         <div style={{
//             color
//         }}>
//             {/* {isSpecial ? <b>*</b> : null} */}
//             {isSpecial && <b>*</b>}
//             안녕하세요! {name}
//         </div>
//         </>
//     )
// }


// Hello.defaultProps = {
//     name: 'NONAME',
// };

// export default Hello;


import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: '이름없음',
    };
    render() {
        const { isSpecial, name, color } = this.props; 
        return (
            <div style = {{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

export default Hello;
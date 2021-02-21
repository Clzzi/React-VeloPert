import { useState, useCallback, useReducer } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    
    return [form, onChange,  reset];
};

export default useInputs;

// function reducer(state, action) {
//     switch(action.type) {
//         case 'ONCHANGE':
//             return {

//             }
//         case 'ONRESET':
//             return {
                
//             }
//         default:
//             throw new Error('Unhandled action');
//     }
// }

// const [state, dispatch] = useReducer(reducer, initialState); 
// const onChange = useCallback((e) => {
//     dispatch({
//         type: 'ONCHANGE',
//     })
// })


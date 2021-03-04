import React, { useState } from 'react';
import { addingSmurf } from './store/actions/actions';
import { connect } from 'react-redux';

const SmurfForm = () => {
    const [input, setInput] = useState({})

    const handleChange = e => {
        setInput({...input, [e.target.name] : e.target.value})
    }

    return (
        <form onSubmit={addingSmurf(input)}>
            <input
                type='text'
                name='name'
                value={input.name}
                onChange={handleChange}
                placeholder='Please enter a name'
                />
            <input
                type='number'
                name='height'
                value={input.height}
                onChange={handleChange}
                placeholder='Enter height'
                />
            <input
                type={'number'}
                name='age'
                value={input.age}
                onChange={handleChange}
                placeholder='Enter an age'
                />
            <button type='submit'>ADD A SMURF</button>
        </form>
    )
}
export default connect(null, { addingSmurf })(SmurfForm)
import React from 'react';
const Input = ({ title, name, value, setValue }) => {
    return (<label>
        <input
            name={title}
            value={value}
            placeholder={title}
            onChange={e => setValue(p => ({ ...p, [name]: e.target.value }))} />
    </label>)
}

export default Input;
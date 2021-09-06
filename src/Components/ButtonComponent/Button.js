import React from 'react'

function Button({name,HandleAc}) {
    return <button onClick={HandleAc}>{name}</button>
}

export default Button

import React from 'react'

export default function Button({handleDelete}) {
    return (
        <button type="button" style={{background: 'orangered', outline: 'none', fontSize: '1em', border: 'none', color: '#fff'}} onClick={handleDelete}>
            Delete me
        </button>
    )
}

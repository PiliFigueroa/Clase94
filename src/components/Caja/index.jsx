import React from 'react';
import './Caja.css'

const Caja = ({ texto }) => {
    return(
        <div className='caja'>{texto}</div>
    )
}

export { Caja }
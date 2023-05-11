import React from 'react'
import loader from './loading.gif'

function Spinner() {

    return (
      <div className='text-center'>
        <img src={loader} alt="loading" />
      </div>
    )
}

export default Spinner
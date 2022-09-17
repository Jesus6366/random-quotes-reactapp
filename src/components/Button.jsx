import React from 'react'

const Button = ({ getRandomAll, randomColor }) => {


    const backgroundObj = {
        backgroundColor: randomColor
    }

    return (
        <button onClick={getRandomAll} className='card__btn' style={backgroundObj}>Next Quote &#62;</button>
    )
}

export default Button
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    justify-content: space-between;
`
const Number = styled.p`
    font-size: 24px;
    color: white;
    text-transform: uppercase;
`
const Button = styled.button`
    height: 50px;
    width: 50px;
    background-color: yellow;
    font-size: 36px;
    border: none;
    border-radius: 5px;
`
const Stepper = ({ step, setStep }) => {
    const subtract = () => {
        if (step > 1) {
            setStep((prev)=>prev - 1)
        }
    }
    const Add = () => {
        setStep((prev)=>prev + 1)
    }
    return (
        <Container>
            <Button onClick={subtract}>-</Button>
            <Number>Step: {step}</Number>
            <Button onClick={Add}>+</Button>
        </Container>
    )
}

export default Stepper
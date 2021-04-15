import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
    width: ${props => props.buttonOption.width ? `${props.buttonOption.width}px` : '100%'};
    height: ${props => props.buttonOption.height ? `${props.buttonOption.height}px` : '50px'};
    color: #faf8f3;
    background: ${props => props.buttonOption.primary ? '#4c5168' : '#303446'};
    border: 1px solid #252838;
    transition: all 0.5s ease-out;

    &:hover {
        color: #fff;
        background: #4d5164;
    }
`

function Button({ children, width, height, callback, primary }) {
    const buttonOption = {
        width,
        height,
        primary,
        callback
    }
    return (
        <ButtonContainer buttonOption={buttonOption} onClick={callback}>
            { children }
        </ButtonContainer>
    )
}

export default Button

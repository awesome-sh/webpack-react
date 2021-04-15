import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.input`
    width: ${props => props.inputStyle.width ? props.inputStyle.width : '100%'};
    height: ${props => props.inputStyle.height ? props.inputStyle.height : '50px'};
    padding-left: 15px;
    border: 1px solid #eee;
    transition: all 0.4s ease-out;

    &:focus {
        border: 1px solid #303446;
    }
`

function Input({ type, width, height, placeholder, handleChange, children }) {
    const inputStyle = { width, height }
    return (
        <InputContainer type={type} inputStyle={inputStyle} placeholder={placeholder} onChange={handleChange}>
            { children }
        </InputContainer>
    )
}

export default Input

import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const UserRegisterContainer = styled.div`
    padding: 50px;
    width: 700px;
    background: #fff;
    display: flex;
    flex-direction: column;
`

function UserRegister({ handleUserRegister }) {
    return (
        <UserRegisterContainer>
            <h3><FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '15px' }} /> 유저 직접 등록 폼 예시</h3>
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="나이" />
            <Input type="text" placeholder="성별" />
            <Input type="text" placeholder="전화번호" />
            <Input type="email" placeholder="이메일" />
            <div style={{ display: 'flex', marginTop: '20px'}}>
                <Button callback={handleUserRegister}>닫기</Button>
                <Button primary={true}>등록</Button>
            </div>
        </UserRegisterContainer>
    )
}

export default UserRegister

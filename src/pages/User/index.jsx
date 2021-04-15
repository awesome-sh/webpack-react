import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Table from '../../components/Table'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

import UserRegister from './UserRegister'
import UserLoad from './UserLoad'

const UserContainer = styled.div`
    padding: 50px;

    h3 {
        font-size: 24px;
        font-weight: lighter;
        margin-bottom: 40px;
    }
`

const UserBackBlur = styled.div`
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.514);
    display: flex;
    justify-content: center;
    align-items: center;
`

const UserController = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const UserSearch = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
`

const UserList = styled.div`
    width: 100%;
`


function index() {
    const [ isRegister, setRegister ] = useState(false)
    const [ isUserLoad, setUserLoad ] = useState(false)
    const testArr = new Array(15).fill(0)

    const handleButtonClick = () => {
        window.alert('버튼 클릭')
    }

    const handleUserRegister = () => {
        setRegister(state => {
            if(!state) {
                window.document.body.style.overflow = 'hidden'
            } else {
                window.document.body.style.overflow = 'scroll'
                window.document.body.style.overflowX = 'hidden'
            }
            return !state
        })
    }

    const handleUserLoad = () => {
        setUserLoad(state => {
            if(!state) {
                window.document.body.style.overflow = 'hidden'
            } else {
                window.document.body.style.overflow = 'scroll'
                window.document.body.style.overflowX = 'hidden'
            }
            return !state
        })
    }

    return (
        <UserContainer>
            <h3>유저 관리　|　Users</h3>

            <UserController>
                <Button width={200} height={50} callback={handleUserRegister}>
                    <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '15px' }} />
                    유저 등록
                </Button>
                <Button width={200} height={50} callback={handleUserLoad}>
                    <FontAwesomeIcon icon={faCloudDownloadAlt} style={{ marginRight: '15px' }} />
                    유저 불러오기
                </Button>
            </UserController>

            <UserSearch>
                <FontAwesomeIcon icon={faSearch} style={{ marginRight: '15px' }} />
                <Input type={'text'} width={200} height={50} placeholder={'이름'} style={{ marginRight: '15px' }} />
                <Input type={'text'} width={200} height={50} placeholder={'전화번호'}/>
                <Button width={200} height={50} callback={handleButtonClick}>검색</Button>
            </UserSearch>

            <UserList>
                <Table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>성별</th>
                            <th>전화번호</th>
                            <th>가입일</th>
                        </tr>
                    </thead>
                    <tbody>
                        { testArr.map((item, idx) => 
                            <tr key={idx}>
                                <td>1</td>
                                <td>박성화</td>
                                <td>남</td>
                                <td>010-2575-7939</td>
                                <td>2021-04-15</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </UserList>
            

            { isRegister && 
                <UserBackBlur >
                    <UserRegister handleUserRegister={handleUserRegister} />
                </UserBackBlur>
            }

            { isUserLoad && 
                <UserBackBlur >
                    <UserLoad handleUserLoad={handleUserLoad} />
                </UserBackBlur>
            }
        </UserContainer>
    )
}

export default index

import React from 'react'
import styled from 'styled-components'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Table from '../../components/Table'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserPlus, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

const UserLoadContainer = styled.div`
    padding: 50px;
    width: 700px;
    background: #fff;
    display: flex;
    flex-direction: column;

    h3 {
        margin-bottom: 20px !important;
    }
`

function UserLoad({ handleUserLoad }) {
    const testArr = new Array(6).fill(0)

    return (
        <UserLoadContainer>
            <h3><FontAwesomeIcon icon={faCloudDownloadAlt} style={{ marginRight: '15px' }} /> 앱 유저 불러오기</h3>
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="나이" />
            <Input type="text" placeholder="성별" />
            <Input type="text" placeholder="전화번호" />
            <Input type="email" placeholder="이메일" />
            <Button>검색</Button>

            <h3 style={{ marginTop: '20px'}}>검색 결과</h3>
            <Table>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>이름</th>
                        <th>성별</th>
                        <th>전화번호</th>
                        <th>가입일</th>
                    </tr>
                </thead>
                <tbody>
                    { testArr.map((item, idx) =>
                        <tr key={idx}>
                            <td><input type="checkbox"/></td>
                            <td>박성화 {idx}</td>
                            <td>남</td>
                            <td>010-2575-7939</td>
                            <td>2021-01-18</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div style={{ display: 'flex ', marginTop: '20px'}}>
                <Button callback={handleUserLoad}>닫기</Button>
                <Button primary={true}>선택한 유저 불러오기</Button>
            </div>
        </UserLoadContainer>
    )
}

export default UserLoad

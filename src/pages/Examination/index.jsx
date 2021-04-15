import React from 'react'
import styled from 'styled-components'

import Table from '../../components/Table'

const ExaminationContainer = styled.div`
    padding: 50px;

    h3 {
        font-size: 24px;
        font-weight: lighter;
    }

    .exam-container {
        display: flex;
    }
`

const ExamLeftContainer = styled.div`
    margin-top: 30px;
    width: 300px;
    height: 100%;
    padding-top: 25px;
    margin-right: 25px;

    .exam-items {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;

        .exam-item {
            margin: 5px;
            width: 50%;
            border: 1px solid #ebebeb;
            border-bottom: 1px solid #303446;
            transition: all 0.5s ease-out;
            
            .title {
                margin-top: 15px;
                padding-left: 15px;
                font-size: 16px;
            }

            .count {
                padding-right: 15px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                color: #707070;
                border-radius: 10px;
                height: 50px;
                font-size: 16px;
                font-weight: 500;
            }

            &:hover {
                background: #f5f6f8;
            }

            &:hover .count {
                color: #2c3872;
            }
        }
    }
`

const ExamRightContainer = styled.div`
    margin-left: 15px;
    margin-top: 30px;
    width: 85%;
    height: 100%;

    padding: 15px;
`

function index() {
    const Sample = new Array(15).fill(0)

    return (
        <ExaminationContainer>
            <h3>측정 관리　|　Examination</h3>
            <div className="exam-container">
                <ExamLeftContainer>
                    <h3 style={{ marginBottom: '15px', fontSize: '18px' }}>
                        검사 별 측정 회수 (회)
                    </h3>
                    <div className="exam-items">
                        <div className="exam-item">
                            <div className="title">시력</div>
                            <div className="count">545</div>
                        </div>
                        <div className="exam-item">
                            <div className="title">시야</div>
                            <div className="count">5245</div>
                        </div>
                    </div>

                    <div className="exam-items">
                        <div className="exam-item">
                            <div className="title">외안근</div>
                            <div className="count">145416</div>
                        </div>
                        <div className="exam-item">
                            <div className="title">입체시</div>
                            <div className="count">7547</div>
                        </div>
                    </div>

                    <div className="exam-items">
                        <div className="exam-item">
                            <div className="title">복시</div>
                            <div className="count">7456</div>
                        </div>
                        <div className="exam-item">
                            <div className="title">동공</div>
                            <div className="count">6435</div>
                        </div>
                    </div>

                    <div className="exam-items">
                        <div className="exam-item">
                            <div className="title">색맹</div>
                            <div className="count">6435</div>
                        </div>
                        <div className="exam-item">
                            <div className="title">동체시력</div>
                            <div className="count">6343</div>
                        </div>
                    </div>
                    
                    <div className="exam-items">
                        <div className="exam-item">
                            <div className="title">황반변성</div>
                            <div className="count">5437</div>
                        </div>
                        <div className="exam-item">
                            <div className="title">난시</div>
                            <div className="count">643627</div>
                        </div>
                    </div>

                    <div className="exam-items">
                        <div className="exam-item">
                            <div className="title">대비감도</div>
                            <div className="count">643</div>
                        </div>
                    </div>
                </ExamLeftContainer>

                <ExamRightContainer>
                    <Table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Code</th>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Telephone</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            { Sample.map((item, idx) => 
                                <tr key={idx}>
                                    <td>1</td>
                                    <td>Eyedoc-Pro 542875</td>
                                    <td>2021-04-12</td>
                                    <td>Sunghwa, Park</td>
                                    <td>Pulpil</td>
                                    <td>010-2575-7939</td>
                                    <td>Male</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </ExamRightContainer>
            </div>
        </ExaminationContainer>
    )
}

export default index

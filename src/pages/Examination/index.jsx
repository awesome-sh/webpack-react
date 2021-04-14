import React from 'react'
import styled from 'styled-components'

const ExaminationContainer = styled.div`
    padding: 50px;

    h3 {
        font-size: 24px;
    }

    .exam-container {
        display: flex;
    }
`

const ExamLeftContainer = styled.div`
    margin-top: 30px;
    background: #eeeff3;
    border-radius: 20px;
    width: 300px;
    height: 100%;
    padding-top: 25px;

    .exam-items {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;

        .exam-item {
            margin: 5px;
            width: 40%;
            
            .title {
                padding-left: 10px;
                margin-bottom: 5px;
                font-size: 16px;
            }

            .count {
                display: flex;
                justify-content: center;
                align-items: center;
                background: #fff;
                color: #707070;
                border-radius: 10px;
                height: 50px;
                font-size: 18px;
                font-weight: 300;
                font-family: 'Ubuntu';
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

    table {
        text-align: center;
        width: 100%;
        border-collapse: collapse;
    }

    thead tr th {
        color: #575757;
        height: 60px;
        border-bottom: 5px solid #303446;
    }

    tbody tr {
        border: 1px solid #eee;
    }

    tbody tr td {
        height: 60px;
        color: #7c7c7c;
        border: 1px solid #eee;
        font-size: 15px;
    }
`

function index() {
    const Sample = new Array(25).fill(0)

    return (
        <ExaminationContainer>
            <h3>Examination</h3>
            <div className="exam-container">
                <ExamLeftContainer>
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
                    <table>
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
                    </table>
                </ExamRightContainer>
            </div>
        </ExaminationContainer>
    )
}

export default index

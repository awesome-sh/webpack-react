import React from 'react'
import styled from 'styled-components'

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
                border: 1px solid #dbdbdb;
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
        border-bottom: 5px solid #e4e5ec;
    }

    tbody tr {
        background-color: #fff;
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
            <h3>통계　|　Statistics</h3>
        </ExaminationContainer>
    )
}

export default index

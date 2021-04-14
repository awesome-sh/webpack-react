import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
    width: 1000px;
    height: 700px;
    background-color: #faf8f3;
    display: flex;
    letter-spacing: -0.7px;

    .login-left {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #faf8f3;
        background-color: #303446;

        h3 {
            font-size: 36px;
            margin-bottom: 5px;
        }

        p {
            font-weight: lighter;
            letter-spacing: 1px;
        }
    }

    .login-right {
        width: 50%;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
            margin-top: 20px;
            width: 100%;
            height: 50px;
            color: #faf8f3;
            background: #303446;
            border: 1px solid #252838;
        }
    }

    .login-frm {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 10px 0 10px 0;
    }

    .login-label {
        font-size: 18px;
        height: 40px;
    }

    .login-item {
        input {
            width: 100%;
            height: 50px;
            padding-left: 15px;
            border: 1px solid #ebe7de;
        }
    }

    .login-bottom {
        margin-top: 30px;
        display: flex;
        font-size: 14px;
        justify-content: center;
        align-items: center;

        span {
            margin-left: 20px;
            font-size: 15px;
        }
    }
`

function Login() {
    return (
        <LoginContainer>

            {/* Login Left */}
            <div className="login-left">
                <h3>VROR</h3>
                <p>Client Dashboard</p>
            </div>

            {/* Login Right */}
            <div className="login-right">
                <div className="login-frm">
                    <div className="login-label">
                        아이디
                    </div>
                    <div className="login-item">
                        <input type="text" placeholder="아이디를 입력해주세요" />
                    </div>
                </div>

                <div className="login-frm">
                    <div className="login-label">
                        비밀번호
                    </div>
                    <div className="login-item">
                        <input type="text" placeholder="아이디를 입력해주세요" />
                    </div>
                </div>

                <button>로그인</button>

                <div className="login-bottom">
                    클라이언트 코드 등록을 하지 않으셨나요? <span>클라이언트 등록</span>
                </div>
                
            </div>
        </LoginContainer>
    )
}

export default Login

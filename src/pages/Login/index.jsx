import React, { useState } from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
    position: relative;
    width: 1000px;
    height: 700px;
    background-color: #fff;
    display: flex;
    letter-spacing: -0.7px;
    box-shadow: 5px 15px 15px 5px rgba(53, 53, 53, 0.034);
    overflow: hidden;

    .login-left {
        position: absolute;
        z-index: 100;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #303446;

        h3 {
            font-size: 48px;
            margin-bottom: 5px;
        }

        p {
            font-weight: lighter;
            letter-spacing: 1px;
        }
    }

    .login-right-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .login-right {
        width: 100%;
        padding: 50px;
        transition: all 0.4s ease-out;

        h3 {
            margin-top: 30px;
            margin-bottom: 30px;
            font-weight: 500;
            letter-spacing: -1px;
        }

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
        margin: 30px 0 10px 0;
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
            border: 1px solid #eee;
            transition: all 0.4s ease-out;

            &:focus {
                border: 1px solid #303446;
            }
        }
    }

    .login-bottom {
        margin-top: 30px;
        display: flex;
        font-size: 14px;
        justify-content: center;
        align-items: center;

        span {
            padding: 5px 15px 5px 15px;
            cursor: pointer;
            font-size: 15px;
            transition: background 0.5s ease-out;
           

            &:hover {
                color: #ebe7de;
                background: #303446;
            }
        }
    }

    #login {
        transform: ${props => props.toggle ? 'translateX(0%)' : 'translateX(100%)'};
        opacity: ${props => props.toggle ? '0' : '1'};
    }

    #register {
        transform: ${props => props.toggle ? 'translateX(0%)' : 'translateX(-100%)'};
        transform: ${props => props.toggle ? '1' : '0'};

        span {
            padding: 5px 15px 5px 15px;
            cursor: pointer;
            font-size: 13px;
            transition: all 0.5s ease-out;
            color: #ebe7de;
            background: #303446;

            &:hover {
                color: #fff;
                background: #404458;
            }
        }
    }
`

function Login() {
    const [ toggle, setToggle ] = useState(false)

    const handleRegister = () => {
        setToggle( state => !state )
        console.log( `>> Toggle : ${toggle}` )
    }

    return (
        <LoginContainer toggle={toggle}>

            {/* Login Left */}
            <div className="login-left">
                <h3>VROR</h3>
                <p>Client Dashboard</p>
            </div>

            {/* Login Right */}
            <div className="login-right-container">

                <div className="login-right" id="login">
                    <div className="login-frm">
                        <div className="login-label">
                            아이디
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="아이디를 입력해주세요" autofocus="true" />
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
                        클라이언트 등록을 하지 않으셨나요? <span style={{marginLeft: '15px'}} onClick={handleRegister}>클라이언트 등록</span>
                    </div>
                </div>

                {/* Client Register */}
                <div className="login-right" id="register">
                    <span onClick={handleRegister}>뒤로가기</span>
                    <h3>클라이언트 등록</h3>

                    <div className="login-frm">
                        <div className="login-label">
                            이름
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="이름을 입력해주세요" />
                        </div>
                    </div>

                    <div className="login-frm">
                        <div className="login-label">
                            소속
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="소속을 입력해주세요" />
                        </div>
                    </div>

                    <div className="login-frm">
                        <div className="login-label">
                            클라이언트 코드
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="ex) 0000-0000-0000-0000" />
                        </div>
                    </div>

                    <button>등록</button>

                    
                </div>
            </div>
        </LoginContainer>
    )
}

export default Login

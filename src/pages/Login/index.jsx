import React, { useState } from 'react'
import styled from 'styled-components'

import BG from '../../assets/proSlide4.png'

const LoginContainer = styled.div`
    position: relative;
    width: 1000px;
    height: 700px;
    background-color: #faf8f3;
    display: flex;
    letter-spacing: -0.7px;
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
        background-color: rgba(36, 38, 44, 0.973);
        background-image: url(${BG});
        background-size: 200%;
        background-position: center;
        background-repeat: no-repeat;
        background-blend-mode: overlay;

        h3 {
            font-size: 36px;
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

function Login({ history }) {
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
                    {/* <div className="login-frm">
                        <div className="login-label">
                            ?????????
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="???????????? ??????????????????" autoFocus={true} />
                        </div>
                    </div>

                    <div className="login-frm">
                        <div className="login-label">
                            ????????????
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="???????????? ??????????????????" />
                        </div>
                    </div>

                    <button onClick={() => history.push('/dashboard')}>?????????</button>

                    <div className="login-bottom">
                        ??????????????? ????????? ?????? ???????????????? <span style={{marginLeft: '15px'}} onClick={handleRegister}>??????????????? ??????</span>
                    </div> */}
                    ????????? ?????????<br/><br/>
                    - M2S Development Team -
                </div>

                {/* Client Register */}
                <div className="login-right" id="register">
                    <span onClick={handleRegister}>????????????</span>
                    <h3>??????????????? ??????</h3>

                    <div className="login-frm">
                        <div className="login-label">
                            ??????
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="????????? ??????????????????" />
                        </div>
                    </div>

                    <div className="login-frm">
                        <div className="login-label">
                            ??????
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="????????? ??????????????????" />
                        </div>
                    </div>

                    <div className="login-frm">
                        <div className="login-label">
                            ??????????????? ??????
                        </div>
                        <div className="login-item">
                            <input type="text" placeholder="ex) 0000-0000-0000-0000" />
                        </div>
                    </div>

                    <button>??????</button>

                    
                </div>
            </div>
        </LoginContainer>
    )
}

export default Login

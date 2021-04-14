import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube, faEye, faChartBar, faBars, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route } from 'react-router-dom'

import Products from '../Products'
import Examination from '../Examination'
import Statistics from '../Statistics'

// Loading Component
import Loading from '../Loading/index'

const DashboardContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
`

const DashboardLeft = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: ${props => props.isToggle ? '100px' : '350px'};
    height: 100%;
    border-right: 1px solid #212331;
    padding-top: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    z-index: 100;
    transition: all 0.4s ease-out;
    color: #fff;
    background-color: #303446;

    p {
        width: ${props => props.isToggle ? '50%' : '20%'};
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        text-align: center;
        color: #293242;
        font-family: 'Ubuntu';
        letter-spacing: 0;
        font-weight: 400;
        background: #fff;
        border-radius: 20px;
        margin-bottom: 10px;
    }

    h1 {
        cursor: pointer;
        width: 100%;
        font-size:  ${props => props.isToggle ? '24px' : '28px'};
        text-align: center;
        font-family: 'Ubuntu';
    }

    ul {
        margin-top: 50px;
        list-style: none;

        li {
            position: relative;
            cursor: pointer;
            width: ${props => props.isToggle ? '100px' : '330px'};
            height: ${props => props.isToggle ? '90px' : '60px'};
            border-bottom: ${props => props.isToggle ? '1px solid #3e4252' : '1px solid #303446'};
            margin: ${props => props.isToggle ? '0px' : '10px'};
            font-size: ${props => props.isToggle ? '24px' : '18px'};
            transition: all 0.4s ease-out;

            span {
                position: ${props => props.isToggle ? 'absolute' : ''};
                right: ${props => props.isToggle ? '-40px' : ''};
                visibility: ${props => props.isToggle ? 'hidden' : 'visible'};
                margin-left: ${props => props.isToggle ? '0px' : '25px'};
                opacity: ${props => props.isToggle ? '0' : '1'};
                font-size: ${props => props.isToggle ? '12px' : '16px'};
                transform: ${props => props.isToggle ? 'translateY(50%)' : 'translateY(0%)'};
                background: ${props => props.isToggle ? '#3e4252' : 'none'};
                padding: ${props => props.isToggle ? '8px 15px 8px 15px' : '0'};
                transition: all 0.4s ease-out;
            }

            &:hover .hover-bg {
                height: 100%;
            }

            .menu-item {
                position: absolute;
                z-index: 1;
                display: flex;
                width: 100%;
                height: 100%;
                padding-left: ${props => props.isToggle ? '0px' : '50px'};
                justify-content:  ${props => props.isToggle ? 'center' : 'flex-start'};
                flex-direction: ${props => props.isToggle ? 'column' : 'rows'};
                align-items: center;
            }

            .hover-bg {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 0%;
                background: #3e4252;
                transition: all 0.5s ease-out;
            }

            &:hover span {
                visibility: visible;
                transform: ${props => props.isToggle ? 'translateY(0%)' : 'translateY(0%)'};
                opacity: 1;
            }
        }
    }
`

const DashboardRight = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.isToggle ? '100px' : '350px'};
    width: ${props => props.isToggle ? 'calc(100% - 100px)' : 'calc(100% - 350px)'};
    transition: all 0.4s ease-out;

    .navigation-bar {
        position: fixed;
        top: 0;
        z-index: 100;
        display: flex;
        width: ${props => props.isToggle ? 'calc(100% - 100px)' : 'calc(100% - 350px)'};
        height: 80px;
        border-bottom: 1px solid #eee;
        background: #fff;
        box-shadow: 15px 5px 15px 5px rgba(238, 238, 238, 0.349);
        
        .menu-toggle {
            cursor: pointer;
            width: 100px;
            color: #7c7c7c;
            font-size: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.4s ease-out;

            &:hover {
                background-color: #eee;
            }
        }

        .top-info {
            padding-right: 10px;
            width: calc(100% - 100px);
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: #b6b6b6;
            font-size: 21px;

            .top-item {
                cursor: pointer;
                margin: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                height: 50px;
                border-radius: 10px;
                transition: all 0.4s ease-out;

                &:hover {
                    color: #3e4252;
                }
            }
        }
    }

    .content-container {
        padding-top: 80px;
        height: 100%;
    }
`

function index({ history }) {
    const [ isToggle, setToggle ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    const toggleHandler = () => {
        setToggle( prevState => !prevState )
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <DashboardContainer>
            { loading ? 
                <>
                    <Loading />
                </>
                :
                <>
                     <DashboardLeft isToggle={isToggle}>
                        <p>Client</p>
                        <h1 onClick={() => history.push('/')} >VROR</h1>
                        <ul>
                            <li onClick={() => history.push('/products')} >
                                <div className="menu-item">
                                    <FontAwesomeIcon icon={faCube} /><span>내 제품</span>
                                </div>
                                <div className="hover-bg"></div>
                            </li>
                            <li onClick={() => history.push('/examination')} >
                                <div className="menu-item">
                                    <FontAwesomeIcon icon={faEye} /><span>측정 관리</span>
                                </div>
                                <div className="hover-bg"></div>
                            </li>
                            <li onClick={() => history.push('/statistics')} >
                                <div className="menu-item">
                                    <FontAwesomeIcon icon={faChartBar} /><span>통계</span>
                                </div>
                                <div className="hover-bg"></div>
                            </li>
                        </ul>
                    </DashboardLeft>

                    <DashboardRight isToggle={isToggle}>
                        <div className="navigation-bar">
                            <div className="menu-toggle" onClick={toggleHandler}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div className="top-info">
                                <div className="top-item">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <div className="top-item" onClick={() => history.push('/')}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </div>
                            </div>
                        </div>
                        <div className="content-container">
                            <Switch>
                                <Route exact path="/" component={null} />
                                <Route path="/products" component={Products} />
                                <Route path="/examination" component={Examination} />
                                <Route path="/statistics" component={Statistics} />
                            </Switch>
                        </div>
                    </DashboardRight>
                </>
            }
        </DashboardContainer>
    )
}

export default index

import React from 'react'
import styled from 'styled-components'
// Images
import eyedocPro from '../../assets/eyedoc-pro.png'

const ProductsContainer = styled.div`
    padding: 50px;

    h3 {
        font-size: 24px;
    }

    .product-container {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        .product-left {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 600px;
                border-radius: 300px;
            }
        }

        .product-info {
            font-size: 15px;
            width: 60%;

            table {
                width: 100%;

                tr {
                    height: 50px;
                    border-bottom: 1px solid #eee;
                }

                th {
                    width: 20%;
                    font-weight: 500;
                    letter-spacing: -0.5px;
                }

                td {
                    width: 80%;
                    padding-left: 25px;
                    border-bottom: 1px solid #eee;
                    font-size: 14px;
                }
            }
        }
    }
`


function index() {
    return (
        <ProductsContainer>
            <h3>My Products</h3>
            <div className="product-container">
                <div className="product-left">
                    <img src={eyedocPro} />
                </div>
                <div className="product-info">
                    <table>
                        <tr>
                            <th>제품코드</th>
                            <td>eyedoc-0000000146</td>
                        </tr>
                        <tr>
                            <th>등록일자</th>
                            <td>2021-04-12</td>
                        </tr>
                        <tr>
                            <th>고객사 코드</th>
                            <td>79544</td>
                        </tr>
                        <tr>
                            <th>고객사이름</th>
                            <td>엠투에스</td>
                        </tr>
                        <tr>
                            <th>담당자</th>
                            <td>박성화</td>
                        </tr>
                        <tr>
                            <th>담당자 연락처</th>
                            <td>010-2575-7939</td>
                        </tr>
                    </table>
                </div>
            </div>
        </ProductsContainer>
    )
}

export default index

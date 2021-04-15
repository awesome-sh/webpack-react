import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.table`
    width: 100%;
    text-align: center;
    border-collapse: collapse;

    thead tr th {
        height: 60px;
        border-bottom: 1px solid #575a69;
    }

    tbody tr td {
        height: 60px;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }

    tbody tr {
        cursor: pointer;
        transition: all 0.5s ease-out;
    }

    tbody tr:hover {
        background: #f8f9fc;
    }
`

function Table({ children }) {
    return (
        <TableContainer>
            {children}
        </TableContainer>
    )
}

export default Table

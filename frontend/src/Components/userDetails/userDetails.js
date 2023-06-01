import * as React from 'react';

import axios from "axios";
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, email, dob, city, phone, reservationDate) {
    return { name, email, dob, city, phone, reservationDate };
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));


export default function UserDetails(){
    const [details, setDetails] = React.useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3001/user/list').then((res)=>{
            // console.table(res.data);
            let tableRows = [];
            for (const [key, value] of Object.entries(res.data)) {
                tableRows.push(createData(value.firstName + ' ' + value.lastName, value.email, value.dob, value.city, value.phone, value.reservationDate))
            }
            console.log(tableRows)
            setDetails(tableRows);
        })
    }, []);

    useEffect(()=>{
        console.log(details)
    }, [details])
    

    return(
        <div className='grid m-10 gap-10 place-content-center'>
            <span className='place-content-center flex text-2xl'>User Data</span>
            {details.length === 0 ? <>No Data Found</> :<>
            <TableContainer sx={{minWidth: 500, alignItems: 'center'}} component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <StyledTableRow>
                <TableCell align="center">Reservation Date</TableCell>
                <TableCell align='left'>Name</TableCell>
                <TableCell align="center">Date of birth</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="left">Contact</TableCell>
                <TableCell align="center">Email</TableCell>
            </StyledTableRow>
            </TableHead>
            <TableBody>
            {details.map((row, index) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="center">{row.reservationDate}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.dob}</TableCell>
                <TableCell align="left">{row.city}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
            </TableContainer>
            </>}
        </div>
    )
}
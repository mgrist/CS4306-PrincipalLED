import { React, useState, useEffect } from 'react';
import Axios from "axios";
import { Box, Collapse, IconButton, Table, TableBody, Typography } from '@mui/material';
import { TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './orderTable.css';

export default function DropDownTable(props) {
    var title = '';
    const {stage, order} = props;

    const [orderData, setOrderData] = useState([]);
    const getOrderData = () => {
        Axios.get("http://localhost:5000/work-orders/get-orders").then((response) => {
        setOrderData(response.data);
        });
    };

    const [orderCompletions, setOrderCompletion] = useState([]);
    // retrieves all of the completions that have been completed for a specific order.
    const getAllOrderCompletions = () => {
        Axios.get("http://localhost:5000/completions/get-order-completions", { params: { num: order.wo_number }})
        .then((response) => {
            setOrderCompletion(response.data);
        });
    }

    const [OpCompletions, setOpCompletion] = useState([]);
    // retrieves all of the completions that have been completed for a specific order.
    const getOpCompletions = () => {
        Axios.get("http://localhost:5000/completions/get-op-completions", { 
            params: { initials: order.wo_number, s: stage }})
        .then((response) => {
            console.log("Op", response.data);
            setOpCompletion(response.data);
        });
    }

    useEffect(() => {
        getOpCompletions();
        getOrderData();
      }, []);

    if (stage == "1") title = "S1 - SMT";
    else if (stage == "2") title = "S2 - Soldering";
    else if (stage == "3") title = "S3 - L&I Molding";
    else if (stage == "4") title = "S4 - Taping";
    else if (stage == "5") title = "S5 - Packaging";

    return (
        <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                {title}
            </Typography>
            <Table size="small" aria-label="purchases">
                <TableHead>
                    <TableRow>
                        <TableCell>Operator</TableCell>
                        <TableCell align="right">Amount</TableCell>
                        <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderData.map((history) => (
                        <TableRow key={history.updated_at}>
                            <TableCell>{history.wo_number}</TableCell>
                            <TableCell align="right">{history.quantity}</TableCell>
                            <TableCell align="right">
                                {5.00}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
  }
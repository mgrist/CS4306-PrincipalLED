import { React, useState, useEffect } from "react";
import Axios from "axios";
import { Collapse, IconButton, Table, TableBody } from "@mui/material";
import {
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DropDownTable from "./dropDownTable";
import "./orderTable.css";

export function Row(props) {
	const { order } = props;
	const [open, setOpen] = useState(false);

	const [products, setProduct] = useState([]);
	const getProducts = () => {
		Axios.get("http://localhost:5000/products/get-products").then(
			(response) => {
				setProduct(response.data);
			}
		);
	};

	const [orderCompletions, setOrderCompletion] = useState([]);

	const [orderDefects, setOrderDefect] = useState([]);

	useEffect(() => {
		// retrieves all of the completions that have been completed for a specific order.
		const getAllOrderCompletions = () => {
			Axios.get("http://localhost:5000/completions/get-order-completions", {
				params: { num: order.wo_number },
			}).then((response) => {
				setOrderCompletion(response.data);
			});
		};

		// retrieves all of the scraps that have been completed for a specific order.
		const getAllOrderDefects = () => {
			Axios.get("http://localhost:5000/scraps/get-order-scraps", {
				params: { num: order.wo_number },
			}).then((response) => {
				setOrderDefect(response.data);
			});
		};

		getProducts();
		getAllOrderDefects();
		getAllOrderCompletions();
	}, [order.wo_number]);

	// gets the products label that corresponds to a part number.
	// order is the supplied part number.
	const getLabel = (order) => {
		if (order === undefined) return "";
		const prod = products.find(({ part_number }) => part_number === order);
		if (prod === undefined) return "";
		return prod.label;
	};

	// formats numbers with a comma delimeter
	function formatNumber(number) {
		var nf = new Intl.NumberFormat();
		return nf.format(number); // "1,234,567,890"
	}

	// calculates the sum of all completions` for a specific work order
	function sumCompletions() {
		var sum = 0;
		orderCompletions.map((order) => (sum += order.quantity));

		return formatNumber(sum);
	}

	// calculates the sum of all defects for a specific work order
	function sumDefects() {
		var sum = 0;
		orderDefects.map((order) => (sum += order.quantity));

		return formatNumber(sum);
	}

	return (
		<>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="order">
					WO - {order.wo_number}
				</TableCell>
				<TableCell align="left">{getLabel(order.product_number)}</TableCell>
				<TableCell align="left">{formatNumber(order.wo_quantity)}</TableCell>
				<TableCell align="left">{sumCompletions()}</TableCell>
				<TableCell align="left">{sumDefects()}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<DropDownTable order={order} />
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

export default function OrderTable() {
	/* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the work orders array variable. This is used to view
  /  all of the work orders in the dropdown menu.*/
	const [workOrders, setOrder] = useState([]);

	const getOrders = () => {
		Axios.get("http://localhost:5000/work-orders/get-orders").then(
			(response) => {
				setOrder(response.data);
			}
		);
	};

	useEffect(() => {
		getOrders();
	}, []);

	return (
		<div className="table">
			<TableContainer component={Paper}>
				<Table aria-label="order table">
					<TableHead style={{ backgroundColor: "#212529" }}>
						<TableRow>
							<TableCell />
							<TableCell style={{ color: "#ffffff" }}>WO Number</TableCell>
							<TableCell style={{ color: "#ffffff" }} align="left">
								Product
							</TableCell>
							<TableCell style={{ color: "#ffffff" }} align="left">
								Quantity
							</TableCell>
							<TableCell style={{ color: "#ffffff" }} align="left">
								Completed
							</TableCell>
							<TableCell style={{ color: "#ffffff" }} align="left">
								Defects
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{workOrders.map((order) => (
							<Row key={order.wo_number} order={order} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

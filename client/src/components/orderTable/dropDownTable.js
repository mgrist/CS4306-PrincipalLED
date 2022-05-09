import { React, useState, useEffect } from "react";
import Axios from "axios";
import { Box, Table, TableBody, Typography } from "@mui/material";
import { TableCell, TableHead, TableRow } from "@mui/material";
import "./orderTable.css";

export function Cell(props) {
	// eslint-disable-next-line
	const { reasonId } = props;

	const [reason, setReason] = useState("");

	useEffect(() => {
		// retrieves all of the defect reasons.
		const getReason = () => {
			Axios.get("http://localhost:5000/reasons/get-reason-id", {
				params: { id: reasonId },
			}).then((response) => {
				setReason(response.data.label);
				console.log("reason", response.data);
			});
			return;
		};

		getReason();
	}, [reasonId]);

	return <TableCell> {reason} </TableCell>;
}

export default function DropDownTable(props) {
	// eslint-disable-next-line
	const { order } = props;

	const [defects, setDefects] = useState([]);

	const [ops, setOps] = useState([]);
	// retrieves all of the operators.
	const getOps = () => {
		Axios.get("http://localhost:5000/operators/get-operators").then(
			(response) => {
				setOps(response.data);
			}
		);
	};

	useEffect(() => {
		// retrieves all of the defects that have been completed for a specific order.
		const getDefects = () => {
			Axios.get("http://localhost:5000/scraps/get-order-scraps", {
				params: { num: order.wo_number },
			}).then((response) => {
				setDefects(response.data);
				console.log("defects", response.data);
			});
		};

		getDefects();
		getOps();
	}, [order.wo_number]);

	const getOpName = (defect) => {
		const operator = ops.find(
			({ initials }) => initials === defect.operator_initials
		);
		if (operator === "" || operator === undefined) return "";
		let name = operator.first_name + " " + operator.last_name;
		return name;
	};

	const getStageName = (stage) => {
		let name = "";
		if (stage === 1) name = "SMT";
		else if (stage === 2) name = "Soldering";
		else if (stage === 3) name = "L&I Molding";
		else if (stage === 4) name = "Taping";
		else if (stage === 5) name = "Packaging";

		return name;
	};

	return (
		<Box sx={{ margin: 1 }}>
			<Typography variant="h6" gutterBottom component="div">
				Order Defects
			</Typography>
			<Table size="small" aria-label="purchases">
				<TableHead>
					<TableRow>
						<TableCell>Operator</TableCell>
						<TableCell>Stage</TableCell>
						<TableCell>Defect Type</TableCell>
						<TableCell align="right">Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{defects.map((defect, index) => (
						<TableRow key={index}>
							<TableCell>
								{" "}
								{getOpName(defect)} - {defect.operator_initials}{" "}
							</TableCell>
							<TableCell>
								{" "}
								S{defect.stage_id} - {getStageName(defect.stage_id)}{" "}
							</TableCell>
							<Cell reasonId={defect.scrap_reason_id} />
							<TableCell align="right"> {defect.quantity} </TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Box>
	);
}

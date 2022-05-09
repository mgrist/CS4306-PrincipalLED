import { React, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, TextField, Button } from "@mui/material";
import Axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import "./addOperator.css";
import { useNavigate } from "react-router-dom";

// setting a green theme with the dropdown boxes
const theme = createTheme({
	palette: {
		primary: {
			main: "#53BA4D",
		},
		secondary: {
			main: "#D22B2B",
		},
	},
});

function Alert(props) {
	return (
		<div className="center">
			<MuiAlert id="alert" elevation={6} variant="filled" {...props} />
		</div>
	);
}

export default function CompletionForm() {
	const [status, setStatus] = useState("");

	function RenderAlert(props) {
		if (status === "success") {
			return (
				<Alert className="alert" severity="success">
					Successfully Submitted!
				</Alert>
			);
		} else if (status === "error") {
			console.log("in Error Alert");
			return (
				<Alert className="alert" severity="error">
					Error: Invalid Input Field(s)
				</Alert>
			);
		} else {
			return null;
		}
	}

	const [operator, setOperator] = useState({
		first_name: "",
		last_name: "",
		initials: "",
	});

	const createOperator = () => {
		console.log("op", operator);
		Axios.post("http://localhost:5000/operators/new-operator", operator)
			.then((response) => {
				setStatus("success");
			})
			.catch((response) => {
				setStatus("error");
			});
	};
	//before return start
	const navigate = useNavigate();

	return (
		<div>
			<Box
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			></Box>

			<ThemeProvider theme={theme}>
				<h3 className="center">New Operator</h3>

				<div className="center">
					<div className="inWrap" style={{ width: "35%", marginLeft: "unset" }}>
						<h6>First Name</h6>
						<TextField
							id="filled-helperText"
							label="First Name"
							value={operator.first_name}
							onChange={(event) => {
								setOperator({ ...operator, first_name: event.target.value });
							}}
							variant="filled"
							style={{ width: "100%" }}
						/>
					</div>

					<div className="inWrap" style={{ width: "35%", marginLeft: "unset" }}>
						<h6>Last Name</h6>
						<TextField
							id="filled-helperText"
							label="Last Name"
							value={operator.last_name}
							onChange={(event) => {
								setOperator({ ...operator, last_name: event.target.value });
							}}
							variant="filled"
							style={{ width: "100%" }}
						/>
					</div>

					<div className="inWrap" style={{ width: "15%", marginLeft: "unset" }}>
						<h6>Initials</h6>
						<TextField
							id="filled-helperText"
							label="Initials"
							value={operator.initials}
							onChange={(event) => {
								setOperator({ ...operator, initials: event.target.value });
							}}
							variant="filled"
							style={{ width: "100%" }}
						/>
					</div>
				</div>

				<div className="center" style={{ marginTop: "2%" }}>
					<div className="inWrap" id="saveBttn">
						<Button
							color="secondary"
							startIcon={<CancelIcon />}
							variant="contained"
							style={{ width: "100%" }}
							onClick={() => navigate(-1)}
						>
							cancel
						</Button>
					</div>

					<div
						className="inWrap"
						id="saveBttn"
						style={{ marginRight: "5%", marginLeft: "10%" }}
					>
						<Button
							color="success"
							startIcon={<SaveIcon />}
							variant="contained"
							style={{ width: "100%" }}
							onClick={createOperator}
						>
							save
						</Button>
					</div>
				</div>
				<RenderAlert />
			</ThemeProvider>
		</div>
	);
}

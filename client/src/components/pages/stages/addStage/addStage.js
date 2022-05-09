import { React, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, TextField, Button } from "@mui/material";
import Axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import "./addStage.css";
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
			return (
				<Alert className="alert" severity="error">
					Error: Invalid Input Field(s)
				</Alert>
			);
		} else {
			return null;
		}
	}

	const [stage, setStage] = useState({
		label: "",
		order: 0,
	});

	//before return start
	const navigate = useNavigate();

	const createCompletion = () => {
		Axios.post("http://localhost:5000/stages/new-stage", stage)
			.then((response) => {
				setStatus("success");
			})
			.catch((response) => {
				setStatus("error");
			});
	};

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
				<h3 className="center">New Stage</h3>

				<div className="center">
					<div className="inWrap" style={{ width: "50%", marginLeft: "unset" }}>
						<h6>Label</h6>
						<TextField
							id="filled-helperText"
							label="Label"
							value={stage.label}
							onChange={(event) => {
								setStage({ ...stage, label: event.target.value });
							}}
							variant="filled"
							style={{ width: "100%" }}
						/>
					</div>

					<div className="inWrap" style={{ width: "25%", marginLeft: "unset" }}>
						<h6>Order</h6>
						<TextField
							id="filled-number"
							label="Order"
							value={stage.order}
							type="number"
							inputProps={{ min: 0 }}
							onChange={(event) => {
								setStage({ ...stage, order: event.target.value });
							}}
							onFocus={(event) => {
								event.target.select();
							}}
							InputLabelProps={{
								shrink: true,
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
						style={{ marginRight: "12.5%", marginLeft: "10%" }}
					>
						<Button
							color="success"
							startIcon={<SaveIcon />}
							variant="contained"
							style={{ width: "100%" }}
							onClick={createCompletion}
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

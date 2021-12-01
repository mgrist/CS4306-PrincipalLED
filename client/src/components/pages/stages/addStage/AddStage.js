import { React, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import Axios from "axios";
import "./AddStage.css";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

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

export default function AddStage() {
  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the stages array variable. This is used to view
  /  all of the stages in the dropdown menu.*/
  const [stages, setStage] = useState([]);
  
  const getStages = () => {
    Axios.get("http://localhost:5000/stages/get-stages").then((response) => {
      setStage(response.data);
    });
  };

  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the products array variable. This is used to view
  /  all of the products in the dropdown menu.*/
  const [products, setProduct] = useState([]);
  
  const getProducts = () => {
    Axios.get("http://localhost:5000/products/get-products").then((response) => {
      setProduct(response.data);
    });
  };

  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the work orders array variable. This is used to view
  /  all of the work orders in the dropdown menu.*/
  const [workOrders, setOrder] = useState([]);
  
  const getOrders = () => {
    Axios.get("http://localhost:5000/work-orders/get-orders").then((response) => {
      setOrder(response.data);
      console.log("wo: ", response.data);
    });
  };

  const [defects, setDefect] = useState([]);
  
  const getDefects = () => {
    Axios.get("http://localhost:5000/reasons/get-reasons").then((response) => {
      setDefect(response.data);
      console.log("defects reasons: ", response.data);
    });
  };

  useEffect(() => {
    getStages();
    getProducts();
    getOrders();
    getDefects();
  }, []);

  const [completion, setCompletion] = useState({
    wo_number: 0,
    quantity: 0,
    operator_initials: "",
    stage_id: 0,
  });

  const [scrap, setScrap] = useState({
    wo_number: 0,
    quantity: 0,
    scrap_reason_id: "",
    stage_id: 0,
    operator_initials: "",
  });

  const testing = () => {
    console.log("completion: ", completion);
    console.log("scrap: ", scrap);
  }

  const createCompletion = () => {
    Axios.post("http://localhost:5000/completions/new-completion", completion).then((response) => {
      console.log(response);
    });
    if (scrap.quantity > 0) {
      Axios.post("http://localhost:5000/scraps/new-scrap", scrap).then((response) => {
        console.log(response);
      });
    }
  };

  // gets the products label that corresponds to a part number.
  // order is the supplied part number.
  const getLabel = (order) => {
    if (order === undefined) return "";
    const prod = products.find(({ part_number }) => part_number === order);
    if (prod === undefined) return ""; 
    return prod.label;
  }

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
        <h3 className="center">Add New Stages</h3>

        <div className="center">
          <div className="inWrap" style={{ marginLeft: "unset" }}>
            <h6>Work Order</h6>
            <TextField
              id="filled-select"
              select
              label="Work Order"
              value={completion.wo_number}
              onChange={(event) => {
                setCompletion({...completion, wo_number: event.target.value});
                setScrap({...scrap, wo_number: event.target.value});
              }}
              variant="filled"
              style={{ width: "100%" }}
            >
              {workOrders.map((order) => (
                <MenuItem key={order.wo_number} value={order.wo_number + ""}> 
                  {getLabel(order.product_number)} (WO - {order.wo_number})
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="inWrap" style={{ width: "45%" }}>
            <h6>Stage</h6>
            <TextField
              id="filled-select"
              select
              label="Stage"
              value={completion.stage_id}
              onChange={(event) => {
                setCompletion({...completion, stage_id: event.target.value});
                setScrap({...scrap, stage_id: event.target.value});
              }}
              variant="filled"
              style={{ width: "100%" }}
            >
              {stages.map((stage) => (
                <MenuItem key={stage.order} value={stage.order + ""}>
                  {stage.order} - {stage.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className="center">
          <div className="inWrap" style={{ width: "20%", marginLeft: "unset" }}>
            <h6>Quantity Completed</h6>
            <TextField
              id="filled-number"
              label="Number"
              value={completion.quantity}
              type="number"
              inputProps={{ min: 0 }}
              onChange={(event) => {
                setCompletion({...completion, quantity: event.target.value});
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              style={{ width: "100%" }}
            />
          </div>

          <div className="inWrap" style={{ width: "20%" }}>
            <h6>Quantity Defective</h6>
            <TextField
              id="filled-number"
              label="Number"
              value={scrap.quantity}
              type="number"
              inputProps={{ min: 0 }}
              onChange={(event) => {
                setScrap({...scrap, quantity: event.target.value});
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              style={{ width: "100%" }}
            />
          </div>

          <div className="inWrap">
            <h6>Defect Type</h6>
            <TextField
              id="filled-select"
              select
              label="Defect"
              value={scrap.scrap_reason_id}
              variant="filled"
              style={{ width: "100%" }}
              onChange={(event) => {
                setScrap({...scrap, scrap_reason_id: event.target.value});
              }}
            >
              {defects.map((defect) => (
                <MenuItem key={defect._id} value={defect._id + ""}>
                  {defect.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className="center">
          <div className="inWrap" style={{ width: "30%", marginLeft: "unset" }}>
            <h6>Operator</h6>
            <TextField
              id="filled-helperText"
              label="Initials"
              value={completion.operator_initials}
              onChange={(event) => {
                setCompletion({...completion, operator_initials: event.target.value});
                setScrap({...scrap, operator_initials: event.target.value});
              }}
              helperText="Enter operator initials or name"
              variant="filled"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="center">
          <div
            className="inWrap"
            style={{ width: "30%", position: "absolute", right: "7%" }}
          >
            <Button
              color="secondary"
              startIcon={<CancelIcon />}
              variant="contained"
            >
              cancel
            </Button>
          </div>

          <div style={{ position: "absolute", right: "0" }}>
            <Button
              color="success"
              startIcon={<SaveIcon />}
              variant="contained"
              onClick={createCompletion}
            >
              save
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

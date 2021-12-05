import { React, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import Axios from "axios";
import "./addOrder.css";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import MuiAlert from "@material-ui/lab/Alert";

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
  </div> );
}

export default function AddOrder() {
  const [status, setStatus] = useState('');
  function ForceUpdate(update) {
      setStatus(status => update);
  }

  function RenderAlert() {
    if (status === "success") {
      return <Alert className="alert" severity="success">Successfully Submitted!</Alert>;
    }
    else if (status === "error") {
      console.log("in Error Alert");
      return <Alert className="alert" severity="error">Error: Invalid Input Field(s)</Alert>
    }
    else {
      return null;
    }
  }
  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the products array variable. This is used to view
  /  all of the products in the dropdown menu.*/
  const [products, setProduct] = useState([]);
  
  const getProducts = () => {
    Axios.get("http://localhost:5000/products/get-products")
    .then((response) => { setProduct(response.data);})
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [order, setOrder] = useState({
    wo_number: 0,
    wo_quantity: 0,
    product_number: ''
  });

  const testing = () => {
    console.log("order: ", order);
  }

  const createOrder = () => {
    //if (order.wo_quantity > 0 && order.wo_number > 0 && order.product_number !== '') {
      Axios.post("http://localhost:5000/work-orders/new-order", order)
      .then((response) => { 
        console.log(response); 
        setStatus("success"); })
      .catch((response) => { 
        console.log(response);
        setStatus("error"); })
    //}
    ForceUpdate();
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
        <h3 className="center">Add New Order</h3>

        <div className="center">
          <div className="inWrap" style={{ marginLeft: "unset" }}>
            <h6>Product</h6>
            <TextField
              id="filled-select"
              select
              label="Product"
              value={order.product_number}
              onChange={(event) => {
                setOrder({...order, product_number: event.target.value});
              }}
              variant="filled"
              style={{ width: "100%" }}
            >
              {products.map((product) => (
                <MenuItem key={product.part_number} value={product.part_number + ""}>
                  {product.part_number} : {product.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="inWrap" style={{ width: "45%" }}>
            <h6>Work Order Number</h6>
              <TextField
                id="filled-helperText"
                label="Order Number"
                onFocus={(event) => {
                  event.target.select();
                }}
                value={order.wo_number}
                onChange={(event) => {
                  setOrder({...order, wo_number: event.target.value});
                }}
                variant="filled"
                style={{ width: "100%" }}
              />
          </div>
        </div>

        <div className="center">
          <div className="inWrap" style={{ width: "25%", marginLeft: "unset" }}>
            <h6>Quantity</h6>
            <TextField
              id="filled-number"
              label="Number"
              value={order.wo_quantity}
              type="number"
              inputProps={{ min: 0 }}
              onFocus={(event) => {
                event.target.select();
              }}
              onChange={(event) => {
                setOrder({...order, wo_quantity: event.target.value});
              }}
              InputLabelProps={{
                shrink: true,
              }}
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
              onClick={ createOrder }
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

import { React, useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import Axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import "./addProduct.css";
import { useNavigate } from 'react-router-dom';

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

export default function CompletionForm() {
  const [status, setStatus] = useState('');

  function RenderAlert(props) {
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
  const [products, setProducts] = useState([]);
  
  const getProducts = () => {
    Axios.get("http://localhost:5000/products/get-products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [product, setProduct] = useState({
    part_number: '',
    label: '',
    assemblie: '',
    cost: '0.00'
  });

  const createProduct = () => {
    Axios.post("http://localhost:5000/products/new-product", product)
    .then((response) => { setStatus("success"); })
    .catch((response) => { setStatus("error"); });
  };
  //use it for going back priv pages
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
        <h3 className="center">New Product</h3>

        <div className="center">
          <div className="inWrap" style={{ marginLeft: "unset" }}>
            <h6>Label</h6>
            <TextField
              id="filled-helperText"
              autoComplete="off"
              label="Label"
              value={product.label}
              onChange={(event) => {
                setProduct({...product, label: event.target.value});
              }}
              variant="filled"
              style={{ width: "100%" }}
            />
          </div>

          <div className="inWrap" style={{ width: '22%', marginLeft: 'auto' }}>
            <h6>Assemblie</h6>
            <TextField
              id="filled-helperText"
              label="Assemblie"
              value={product.assemblie}
              onChange={(event) => {
                setProduct({...product, assemblie: event.target.value});
              }}
              variant="filled"
              style={{ width: "100%" }}
            />
          </div>

          <div className="inWrap" style={{ width: '22%', marginLeft: 'auto'}}>
            <h6>Part Number</h6>
            <TextField
              id="filled-helperText"
              label="Serial"
              value={product.part_number}
              onChange={(event) => {
                setProduct({...product, part_number: event.target.value});
              }}
              variant="filled"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="center">
          <div className="inWrap" style={{ width: '20%', marginLeft: 'unset' }}>
            <h6>Cost</h6>
            <TextField
              id="filled-number"
              label="Number"
              value={product.cost}
              type="number"
              inputProps={{ min: 0 }}
              onChange={(event) => {
                setProduct({...product, cost: event.target.value});
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

        <div className="center">
          <div
            className="inWrap"
            style={{ width: "30%", position: "absolute", right: "7%" }}
          >
            <Button
              color="secondary"
              startIcon={<CancelIcon />}
              variant="contained"
              onClick={() => navigate(-1)}
            >
              cancel
            </Button>
          </div>

          <div style={{ position: "absolute", right: "0" }}>
            <Button
              color="success"
              startIcon={<SaveIcon />}
              variant="contained"
              onClick={createProduct}
              
            >
              save
            </Button>
          </div>
        </div>
        <RenderAlert/>
      </ThemeProvider>
    </div>
  );
}
import Button from '@restart/ui/esm/Button';
import { React, useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Paper } from '@mui/material';
import Axios from "axios";
import './report.css';
import BasicDateRangePicker from './datePicker/datePicker';
import FormControlLabelPosition from './checkbox/checkbox';

export default function SearchReport() {
  /* creating a react state hook, calling a GET api request to backend, then
  /  adding response data to the products array variable. This is used to view
  /  all of the products in multiple select box.*/
  const [products, setProduct] = useState([]);
  const getProducts = () => {
    Axios.get("http://localhost:5000/products/get-products").then((response) => {
      console.log("products", response.data);
      setProduct(response.data);
    });
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  // This does nothing, but re-renders page
  const [bttn, setBttn] = useState(Math.random());
  function ForceUpdate() {
      setBttn(bttn => Math.random());
  }
  function ViewButton(props){
      return(
        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '15%' }}>
         <Link to="/report">
            <Button 
            color="secondary"
            className='btn'
            onClick={ForceUpdate}
            >
              View&nbsp;<VisibilityIcon/>
            </Button>
          </Link>     
        </div>                                
      );
  }

  return (
    <>
      <h3 className='paper'>Generate Report</h3>
      <div className='paper' >                   
          <div className='item' style={{ marginLeft: 'unset'}}>
            <h6 className='title'>Products</h6>
            <MultipleSelectNative prods={products}/>
          </div>
          
          <div className='item' >
            <BasicDateRangePicker/>
          </div>
          
          <div className='item' style={{ width: '13%'}}>
            <FormControlLabelPosition />
          </div>
      </div>
      <div className='paper' style={{marginTop: '5%'}}>
        <ViewButton/>
      </div>
    </>
  );
}

export function MultipleSelectNative(props) {
  const productLabels = props.prods;

  const [prodList, setProdList] = useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0; i < options.length; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setProdList(value);
  };
  
  return (
    <div>
      <FormControl style={{height: '100%'}} sx={{minWidth: 260, maxWidth: 300}}>
        <Select
          multiple
          native
          value={prodList}
          inputProps={{
            id: 'select-multiple-native',
          }}
          onChange={handleChangeMultiple}
          style={{height: '250px', width: '100%'}}
          color='success'
        >
          {productLabels.map((product) => (
            <option key={product.part_number} value={product.label}>
              {product.label}
            </option>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );

}
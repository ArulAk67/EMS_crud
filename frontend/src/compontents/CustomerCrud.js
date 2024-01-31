import axios from 'axios';
import {useEffect, useState } from "react";

function CustomerCrud()
{
  const [customerid, setId] = useState('');
  const [customername, setName] = useState("");
  const [customeraddress, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [customers, setUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);


  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8084/api/v1/customer/getAllCustomer");
         setUsers(result.data);
         console.log(result.data);
  }
 
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8084/api/v1/customer/save",
        {
          customername: customername,
          customeraddress: customeraddress,
          mobile: mobile
        });
          alert("Customer Registation Successfully");
          setId("");
          setName("");
          setAddress("");
          setMobile("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

   async function editCustomer(customers)
   {
    setName(customers.customername);
    setAddress(customers.customeraddress);
    setMobile(customers.mobile); 
    setId(customers.customerid);
   }

   async function DeleteCustomer(customerid)
   {
        await axios.delete("http://localhost:8084/api/v1/customer/delete/" + customerid); 
        alert("Employee deleted Successfully");
        Load();
   }

   async function update(event)
   {
    event.preventDefault();

   try
       {
        await axios.post("http://localhost:8084/api/v1/customer/update",
       {
        customerid: customerid,
        customername: customername,
        customeraddress: customeraddress,
        mobile: mobile
       
       });
         alert("Registation Updateddddd");
         setId("");
         setName("");
         setAddress("");
         setMobile("");
         Load();
       }
   catch(error)
       {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Server Error:", error.response.data);
            alert("Server Error: " + error.response.data.message);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("Network Error:", error.request);
            alert("Network Error: Unable to send request");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error:", error.message);
            alert("Error: " + error.message);
        }
       }
  }


  return (
    <div>
       <h1>Customer Details</h1>
       <div class="container mt-4" >
          <form>
              <div class="form-group">
               <input  type="text" class="form-control" id="customerid" hidden
               value={customerid}
               onChange={(event) =>
                {
                  setId(event.target.value);      
                }} 
               />
                <label>Customer Name</label>
                <input  type="text" class="form-control" id="customername"
                value={customername}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>
              <div class="form-group">
                <label>Customer Address</label>
                <input  type="text" class="form-control" id="customeraddress" 
                 value={customeraddress}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />
              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>

<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Customer Id</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Customer Address</th>
      <th scope="col">Customer Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {customers.map(function fn(customer)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{customer.customerid} </th>
                <td>{customer.customername}</td>
                <td>{customer.customeraddress}</td>
                <td>{customer.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editCustomer(customer)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteCustomer(customer.customerid)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
 
export default CustomerCrud;
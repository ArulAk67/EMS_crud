package com.Spring.CRUD_Application.CustomerController;

import com.Spring.CRUD_Application.DTO.CustomerDTO;
import com.Spring.CRUD_Application.DTO.CustomerSaveDTO;
import com.Spring.CRUD_Application.DTO.CustomerUpdateDTO;
import com.Spring.CRUD_Application.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {


    @Autowired
    private CustomerService customerService;


    @PostMapping(path="/save")
    public String saveCustomer(@RequestBody CustomerSaveDTO customerSaveDTO)
    {
        String id=customerService.addCustomer(customerSaveDTO);
        return id;
    }

    @GetMapping(path="/getAllCustomer")
    public List<CustomerDTO> getAllCustomer()
    {
       List<CustomerDTO> allCustomer = customerService.getAllCustomer();
       return allCustomer;
    }

    @PostMapping(path="/update")
    public String updateCustomer(@RequestBody CustomerUpdateDTO customerUpdateDTO)
    {
        String id=customerService.updateCustomers(customerUpdateDTO);
        return id;
    }

    @DeleteMapping(path="/delete/{id}")
    public String deleteCustomer(@PathVariable(value = "id") int id)
    {
        boolean deletecustomer = customerService.deleteCustomer(id);
        return "deleted sucessfully";
    }



}

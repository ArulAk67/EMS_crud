package com.Spring.CRUD_Application.Service;

import com.Spring.CRUD_Application.DTO.CustomerDTO;
import com.Spring.CRUD_Application.DTO.CustomerSaveDTO;
import com.Spring.CRUD_Application.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomers(CustomerUpdateDTO customerUpdateDTO);


   boolean deleteCustomer(int id);
}

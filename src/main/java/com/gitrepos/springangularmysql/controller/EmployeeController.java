package com.gitrepos.springangularmysql.controller;

import com.gitrepos.springangularmysql.entity.Employee;
import com.gitrepos.springangularmysql.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class EmployeeController {
    @Autowired
    EmployeeService service;

    @PostMapping
    public void createEmployee (@RequestBody Employee employee) {
        service.createEmployee(employee);
    }


}

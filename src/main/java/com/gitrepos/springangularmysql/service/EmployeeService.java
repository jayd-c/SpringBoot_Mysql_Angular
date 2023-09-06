package com.gitrepos.springangularmysql.service;

import com.gitrepos.springangularmysql.entity.Employee;
import com.gitrepos.springangularmysql.exception.EmployeeNotFoundException;
import com.gitrepos.springangularmysql.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee addEmployee (Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }
    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(Long id) {
        return employeeRepository.findEmployeeById(id)
                .orElseThrow(()-> new EmployeeNotFoundException("Employee by id " + id + " was not found"));
//        Employee employee;
//        Optional<Employee> employeeOptional = employeeRepository.findById(id);
//        if(employeeOptional.isPresent()) {
//             employee = employeeOptional.get();
//            return employee;
//        } else throw new EmployeeNotFoundException("Employee by id " + id + " was not found");

    }
    public String deleteEmployeeById (Long id) {
        employeeRepository.deleteEmployeeById(id);
        return "Delete successful";
    }

}

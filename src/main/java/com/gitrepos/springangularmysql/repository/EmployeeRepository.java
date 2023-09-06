package com.gitrepos.springangularmysql.repository;

import com.gitrepos.springangularmysql.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    Employee findEmployeeById(Long id);
    void deleteEmployeeById(Long id);
}

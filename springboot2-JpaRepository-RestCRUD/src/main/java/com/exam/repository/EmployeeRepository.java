package com.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exam.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}

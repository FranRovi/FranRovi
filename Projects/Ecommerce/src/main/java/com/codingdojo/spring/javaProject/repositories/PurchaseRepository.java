package com.codingdojo.spring.javaProject.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.spring.javaProject.models.Purchase;

@Repository
public interface PurchaseRepository extends CrudRepository <Purchase, Long> {
	List<Purchase> findAll();
}

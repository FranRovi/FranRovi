package com.codingdojo.spring.javaProject.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.spring.javaProject.models.Item;

@Repository
public interface ItemRepository extends CrudRepository <Item, Long> {
	List<Item> findAll();
}

package com.codingdojo.spring.javaProject.services;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.spring.javaProject.models.Item;
import com.codingdojo.spring.javaProject.repositories.ItemRepository;

@Service
public class ItemService {
	@Autowired
	private ItemRepository itemRepo;
	
	// CREATE AN ITEM
	public Item createItem(Item item) {
		return itemRepo.save(item);
	}
	
	// RETREIVE ALL ITEMS
	public List<Item> allItems(){
		return itemRepo.findAll();
	}
		
	// RETREIVE ONE ITEM
	public Item singleItem(Long id) {
		return itemRepo.findById(id).orElse(null);
	}
	
	// UPDATE AN ITEM
	public void itemUpdate(@Valid Item updateItem) {
		itemRepo.save(updateItem);
	}
	
	// DELETE AN ITEM
	public void deleteItem(Long id) {
		itemRepo.deleteById(id);
	}
	
	public ArrayList<Item> itemsIds(ArrayList<Long> ids) {
		return (ArrayList<Item>) itemRepo.findAllById(ids);
	}
}

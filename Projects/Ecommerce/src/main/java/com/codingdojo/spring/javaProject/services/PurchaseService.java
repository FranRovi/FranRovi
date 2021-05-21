package com.codingdojo.spring.javaProject.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.spring.javaProject.models.Purchase;
import com.codingdojo.spring.javaProject.repositories.PurchaseRepository;

@Service
public class PurchaseService {
	@Autowired
	private PurchaseRepository purchaseRepo;
	
	// CREATE ONE PURCHASE
	public Purchase createPurchase(Purchase purchase) {
		return purchaseRepo.save(purchase);
	}
	
	// RETREIVE ALL PURCHASES
	public List<Purchase> allPurchases(){
		return purchaseRepo.findAll();
	}
	
	// RETREIVE ONE PURCHASE
	public Purchase singlePurchase(Long id) {
		return purchaseRepo.findById(id).orElse(null);
	}
	
	// UPDATE A PURCHASE
	public void purchaseUpdate(@Valid Purchase updatePurchase) {
		purchaseRepo.save(updatePurchase);
	}
	
	// DELETE A PRUCHASE
	public void deletePurchase(Long id) {
		purchaseRepo.deleteById(id);
	}
}

package com.codingdojo.spring.javaProject.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.spring.javaProject.models.Item;
import com.codingdojo.spring.javaProject.models.User;
import com.codingdojo.spring.javaProject.services.ItemService;
import com.codingdojo.spring.javaProject.services.UserService;

@Controller
public class ItemController {
	@Autowired
	private ItemService itemServ;
	
	@Autowired
	private UserService userServ;
	
	@GetMapping("/items")
	public String dashboard(HttpSession session, Model model) {
		Long loggedUser_id = (Long) session.getAttribute("loggedUser_id");
		User loggedUser = userServ.findUserById(loggedUser_id);
		boolean cartDisplay = false;
		if (((ArrayList<Item>) session.getAttribute("cart")).size() >= 1) {
			cartDisplay = true;
		}
		model.addAttribute("loggedUser", loggedUser);
		model.addAttribute("allItems", itemServ.allItems());
		model.addAttribute("cartDisplay", cartDisplay);
		
		return "dashboard.jsp";
	}
	
	@GetMapping("/items/new")
	public String displayNewItemForm(@ModelAttribute("itemObj") Item emptyItem, HttpSession session, Model model) {
		Long loggedUser_id = (Long) session.getAttribute("loggedUser_id");
		model.addAttribute("loggedUser_id", loggedUser_id);
		return "newItem.jsp";
	}
	
	@PostMapping("/items/process")
	public String processNewItem(@Valid @ModelAttribute("itemObj") Item filledItem, BindingResult results, HttpSession session, Model model) {
		User loggedUser = userServ.findUserById((Long) session.getAttribute("loggedUser_id"));
		model.addAttribute("loggedUser_id", loggedUser);
		System.out.println(filledItem.toString());
		if(results.hasErrors()) {
			System.out.println(results);
			return "newItem.jsp";
		} else {
			filledItem.setCreator(loggedUser);
//			filledItem.setItem_image("https://images-na.ssl-images-amazon.com/images/I/61-rymNKhCL._AC_UY500_.jpg");
//			System.out.println(filledItem.toString());
			itemServ.createItem(filledItem);
			return "redirect:/items";
		}
		
	}
	
	@GetMapping("/items/{id}")
	public String itemsDetails(@PathVariable("id") Long id, HttpSession session, Model model) {
		User loggedUser = userServ.findUserById((Long) session.getAttribute("loggedUser_id"));
		model.addAttribute("loggedUser_id", loggedUser);
		Item oneItem = itemServ.singleItem(id);
		model.addAttribute("oneItem", oneItem);
		return "itemDetails.jsp";
	}
	
	@GetMapping("/items/{id}/edit")
	public String itemsUpdateProcess(@PathVariable("id") Long id, HttpSession session, Model model) {
		Item oneItem = itemServ.singleItem(id);
//		oneItem.setItem_image("https://images-na.ssl-images-amazon.com/images/I/61-rymNKhCL._AC_UY500_.jpg");
//		itemServ.createItem(oneItem);
		model.addAttribute("oneItem", oneItem);
		return "editItem.jsp";
	}
	
	@GetMapping("/current_order")
	public String orderProcess(HttpSession session, Model model) {
//		Item oneItem = itemServ.singleItem(id);
//		model.addAttribute("oneItem", oneItem);
		ArrayList<Long> cart = (ArrayList<Long>) session.getAttribute("cart");
		model.addAttribute("allItems", itemServ.itemsIds(cart));
		return "order.jsp";
	}

}

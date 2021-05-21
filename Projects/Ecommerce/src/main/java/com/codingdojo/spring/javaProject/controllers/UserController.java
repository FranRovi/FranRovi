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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.codingdojo.spring.javaProject.models.User;
import com.codingdojo.spring.javaProject.services.UserService;
import com.codingdojo.spring.javaProject.validators.UserValidator;

@Controller
public class UserController {
	@Autowired
	private UserService userServ;
	
	@Autowired
	private UserValidator userValid;
	
	@GetMapping("")
	public String displayLogin(@ModelAttribute("userObj") User emptyUser) {
		return "login.jsp";
	}
	
	@PostMapping("/login")
	public String processLogin(
		@RequestParam("email") String email,
		@RequestParam("password") String password,
		HttpSession session,
		RedirectAttributes redirectAttributes) {
		if(userServ.authenticateUser(email, password)) {
			User user = userServ.findByEmail(email);
			session.setAttribute("loggedUser_id",  user.getId());
			ArrayList<Long> cart = new ArrayList<Long>();
			session.setAttribute("cart",  cart);
			return "redirect:/items";
		} else {
			redirectAttributes.addFlashAttribute("error", "INVALID CREDENTIALS");
			return "redirect:/";
		}
	}
		
	@GetMapping("/register")
	public String displayRegister(@ModelAttribute("userObj") User emptyUser) {
		return "register.jsp";
	}
	
	@PostMapping("/register/process")
	public String  addUser(@Valid @ModelAttribute("userObj") User filledUser, BindingResult results, HttpSession session) {
		userValid.validate(filledUser, results);
		if(results.hasErrors()) {
			return "register.jsp";
		} else {
			User newUser = userServ.registerUser(filledUser);
			session.setAttribute("loggedUser_id", newUser.getId());
			return "redirect:/items";
		}
	}
	
	@GetMapping("/profile")
	public String logout(HttpSession session, Model model) {
		Long loggedUser_id = (Long) session.getAttribute("loggedUser_id");
		User loggedUser = userServ.findUserById(loggedUser_id);
		model.addAttribute("loggedUser", loggedUser);
		return "profile.jsp";
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
	
	@GetMapping("/addToCart/{id}")
	public String addToCart(@PathVariable("id") Long id, HttpSession session) {
		ArrayList<Long> cart = (ArrayList<Long>) session.getAttribute("cart");
		System.out.println("cart: " + cart);
		cart.add(id);
		System.out.println("cart: " + cart);
		session.setAttribute("cart",  cart);
		return "redirect:/items";
	}
	
	@GetMapping("/cancel_order")
	public String cance(HttpSession session) {
		session.setAttribute("cart", new ArrayList<Long>());
		return "redirect:/items";
	}
	
	
}

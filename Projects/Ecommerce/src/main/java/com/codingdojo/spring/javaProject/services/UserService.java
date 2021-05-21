package com.codingdojo.spring.javaProject.services;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.spring.javaProject.models.User;
import com.codingdojo.spring.javaProject.repositories.UserRepository;

@Service
public class UserService {
	
@Autowired
private UserRepository userRepo;
	
	// REGISTER USER AND HAS THEIR PASSWORD
	public User registerUser(User user) {
		String hashed = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		user.setPassword(hashed);
		return userRepo.save(user);
	}
	
	// FIND USER BY EMAIL
	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}
	
	// FIND USER BY ID
	public User findUserById(Long id) {
		return userRepo.findById(id).orElse(null);
	}
	
	// AUTHENTICATE USER
	public boolean authenticateUser(String email, String password) {
		User user = userRepo.findByEmail(email);
		if(user == null) {
			return false;
		} else {
			if(BCrypt.checkpw(password, user.getPassword())) {
				return true;
			} else {
				return false;
			}
		}
	}

}

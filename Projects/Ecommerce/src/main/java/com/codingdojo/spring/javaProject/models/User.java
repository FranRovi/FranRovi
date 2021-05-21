package com.codingdojo.spring.javaProject.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message="First Name must be provided")
	@Size(min=2, max=25, message="First Name must be greater or equal than 2 but less than 25 characters")
	private String first_name;
	
	@NotEmpty(message="Last Name must be provided")
	@Size(min=2, max=25, message="Last Name must be greater or equal than 2 but less than 25 characters")
	private String last_name;
	
	@NotEmpty(message="Email must be provided")
	@Email(message="Email must be valid")
	private String email;
	
	@Size(min=8, message="Password must be at least 8 characters long")
	private String password;
	
	private double amountSpent;
	
	@Transient
	private String passwordConfirmation;
	
	@Transient
	private String duplicate;
	
	@OneToMany(mappedBy="purchaser", fetch=FetchType.LAZY)
	private List <Purchase> orders_purchased;
	
	@OneToMany(mappedBy="creator", fetch=FetchType.LAZY)
	private List<Item> items_created;
		
	public User() {
	
	}
	
	public User(String first_name, String last_name, String email, String password, double amountSpent) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
		this.amountSpent = 0.0;
	}

	public double getAmountSpent() {
		return amountSpent;
	}

	public void setAmountSpent(double amountSpent) {
		this.amountSpent = amountSpent;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPasswordConfirmation() {
		return passwordConfirmation;
	}

	public void setPasswordConfirmation(String passwordConfirmation) {
		this.passwordConfirmation = passwordConfirmation;
	}

	public String getDuplicate() {
		return duplicate;
	}

	public void setDuplicate(String duplicate) {
		this.duplicate = duplicate;
	}
	
	public List<Purchase> getOrders_purchased() {
		return orders_purchased;
	}

	public void setOrders_purchased(List<Purchase> orders_purchased) {
		this.orders_purchased = orders_purchased;
	}
	
	public List<Item> getItems_created() {
		return items_created;
	}

	public void setItems_created(List<Item> items_created) {
		this.items_created = items_created;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	@Column(updatable =false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;
	
	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}
	
	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

}

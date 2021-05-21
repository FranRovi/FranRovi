package com.codingdojo.spring.javaProject.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="items")
public class Item {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotEmpty(message = "Name must be provided")
	@Size(min=2, max=20, message="Name must be greater or equal than 2 but less than 21 characters")
	private String name;
	
	@NotEmpty(message = "Description must be provided")
	@Size(min=10, message="Description must have at least 10 characters long")
	private String description;
	
	@Positive(message = "Price must be a decimal number greater than zero")
	private double price;
	
	@Positive(message = "Quantity must be an integer number greater than zero")
	private int quantity;

//	@Positive(message = "Quantity must be an integer number greater than zero")
	private double rating;
	
	private String item_image;
	
	@OneToMany(mappedBy="purchased_item", fetch = FetchType.LAZY)
	private List<Purchase> orders;
	
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="creator_id")
	private User creator;
	
	public Item() {
		rating = 0.0;
		item_image = "https://unilink-ph.com/img/no-image.png";
	}

	public Item(String name, String description, double price, int quantity, double rating, String item_image) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.quantity = quantity;
		this.rating = rating;
		this.item_image = item_image;
	}

	public String toString() {
		return this.name + " " + this.description + " " + this.price + " " + this.quantity + " " + this.rating + " " + this.item_image;
	}
	
	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public String getItem_image() {
		return item_image;
	}

	public void setItem_image(String item_image) {
		this.item_image = item_image;
	}

	public List<Purchase> getOrders() {
		return orders;
	}

	public void setOrders(List<Purchase> orders) {
		this.orders = orders;
	}
	
	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
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

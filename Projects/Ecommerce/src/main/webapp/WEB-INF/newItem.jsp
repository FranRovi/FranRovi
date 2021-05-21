<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 	<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form"%>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Create an Item</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">		
			<h1>Create a new Item</h1>
			<form:form action="/items/process" method="POST" modelAttribute="itemObj">
				
					
					<form:errors path="name" class="text-danger"></form:errors><br>
					<label class="w-25 p-3">Name</label>
					<form:label path="name"></form:label>
					<form:input path="name"></form:input><br>
				
					<form:errors path="price" class="text-danger"></form:errors><br>
					<label class="w-25 p-3">Price</label>
					<form:label path="price"></form:label>
					<form:input path="price"></form:input><br>
					
					<form:errors path="description" class="text-danger"></form:errors><br>
					<label class="w-25 p-3">Description</label>
					<form:label path="description"></form:label>
					<form:textarea path="description" rows="5" col="40"></form:textarea><br>
					
					<form:errors path="quantity" class="text-danger"></form:errors><br>
					<label class="w-25 p-3">Quantity</label>
					<form:label path="quantity"></form:label>
					<form:input path="quantity" type="number"></form:input><br>
				
				<button type="submit" class="mt-4 btn btn-secondary">Create</button>
						
				</form:form>
			<a href="/items">Go back to Dashboard</a>
		</div>
	</body>
</html>



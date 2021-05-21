<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 	<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form"%>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>See all the products</title>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/project.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<div class="row justify-content-around">
				<h1>Welcome,  <c:out value="${loggedUser.first_name}"/></h1>
				<a href="/profile">User Profile</a>
				<a href="/logout">Logout</a>		
			</div>
			<h2>See all the available products</h2>
			<%-- <h3>Amount Spent:  $<c:out value="${loggedUser.amountSpent}"/></h3> --%>
				<c:choose>
					<%-- <c:when test= "${oneItem.id == oneItem.id}">
					<h1 class="mt-3"><c:out value="${oneItem.creator.id}"/></h1>
					<h1 class="mt-3"><c:out value="${loggedUser_id.id}"/></h1> --%>
					<c:when test= "${cartDisplay == true}" >
						<a href="/current_order">Current Order</a>		
					</c:when>
					<c:otherwise>
						<c:out value=""/>
					</c:otherwise>
				</c:choose>
				
				
			<div class="container">
				<table class="m-5 table table-bordered table table-striped table-responsive-lg">
					<thead class="table-dark">
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Description</th>
							<th>Quantity</th>
							<th>Add to cart</th>
							
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${allItems}" var="item">					
							<tr>
								<td>
									<a href="/items/${item.id}">${item.name}</a>
								</td>
								<td>
									$<c:out value="${item.price}" />
								</td>
								<td>
									<c:out value="${item.description}" />
								</td>
								<td>
									<c:out value="${item.quantity}" />
								</td>
								<td>
									<a href="/addToCart/${item.id}"><img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" alt="cart" style="width:50px;height:50px;" class="filter-green"/></a>
								</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
			<a href="/items/new" class="mt-4 btn btn-secondary">Add a new Item</a>
			
		</div>
	</body>
</html>
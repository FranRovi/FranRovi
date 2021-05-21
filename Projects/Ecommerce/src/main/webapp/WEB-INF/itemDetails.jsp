<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 	<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form"%>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Item Details</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
		
			<h1 class="mt-3"><c:out value="${oneItem.name}"/></h1>
			<img src="${oneItem.item_image}" alt="no image available for this item" width="450" height="300" />
			<%-- <h3> <c:out value="${oneItem.item_image}"/></h3> --%>
			<h3><c:out value="${oneItem.description}"/></h3> 
			<h3>Price: $<c:out value="${oneItem.price}"/></h3>  

			</div>
			<div class="text-center">	
				<c:choose>
					<%-- <c:when test= "${oneItem.id == oneItem.id}">
					<h1 class="mt-3"><c:out value="${oneItem.creator.id}"/></h1>
					<h1 class="mt-3"><c:out value="${loggedUser_id.id}"/></h1> --%>
					<c:when test= "${oneItem.creator.id == loggedUser_id.id}">
						<a href="/items/${oneItem.id}/edit" class="mt-4 btn btn-secondary">Edit</a>
						<a href="/items">Go back to dashboard</a>
					</c:when>
					<c:otherwise>
						<a href="/items">Go back to dashboard</a>
					</c:otherwise>
				</c:choose>
					
				
			</div>
	</body>
</html>
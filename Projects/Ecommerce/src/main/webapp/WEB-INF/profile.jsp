<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 	<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form"%>
 	<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<div class="container">
				<h1>User: <c:out value="${loggedUser.first_name}"/> <c:out value="${loggedUser.last_name}"/></h1>
				<a href="/items">Go back to dashboard</a>
			</div>
			
			<h3>Currently Amount Spent:  $<c:out value="${loggedUser.amountSpent}"/></h3>
				<fmt:parseDate value="${loggedUser.createdAt}" pattern="yyyy-MM-dd" var="myDate"/>
				<fmt:formatDate value="${myDate}" type="time" var="startFormat" pattern="yyyy-MM-dd"/>
			<h3>Member since:  <c:out value="${myDate}"/></h3>				
		</div>
	</body>
</html>
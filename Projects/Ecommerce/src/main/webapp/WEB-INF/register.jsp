<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 	<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form"%>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Register</title>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/project.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<h1>Welcome!</h1>
			<h2>Register</h2>
    
  			<p><form:errors path="userObj.*" class="text-danger"/></p>
   
   			<form:form  action="/register/process" method="POST" modelAttribute="userObj">
		         <p>
		            <form:label path="first_name" class="label_tag">First Name:</form:label>
		            <form:input type="text" path="first_name"/>
		        </p>
		        <p>
		            <form:label path="last_name" class="label_tag">Last Name:</form:label>
		            <form:input type="text" path="last_name"/>
		        </p>
		        <p>
		            <form:label path="email" class="label_tag">Email:</form:label>
		            <form:input type="email" path="email"/>
		        </p>
		        <p>
		            <form:label path="password" class="label_tag">Password:</form:label>
		            <form:password path="password"/>
		        </p>
		        <p>
		            <form:label path="passwordConfirmation" class="label_tag">Password Confirmation:</form:label>
		            <form:password path="passwordConfirmation"/>
		        </p>
		        <input type="submit" value="Register" class="mt-4 btn btn-secondary"/>
   			</form:form>
		</div>
	</body>
</html>
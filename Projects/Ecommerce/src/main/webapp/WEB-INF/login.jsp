<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 	<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form"%>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Login</title>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/project.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<h1>Login</h1>
			<h2>Project Java</h2>
			
			<div class="text-danger mb-3">
				<c:out value="${error}" />			
			</div>	
    		<%-- <p><form:errors path="userObj.*"/></p> --%>
   		
   			<form method="POST" action="/login">
		        <p>
		            <label for="email" class="label_tag">Email:</label>
		            <input type="email" id="email" name="email"/>
		        </p>
		        <p>
		            <label for="password" class="label_tag">Password:</label>
		            <input type="password" id="password" name="password"/>
		        </p>
		        
		        <input type="submit" value="Login" class="mt-4 btn btn-secondary"/>
   			</form>
   			<p class="mt-5">Don't have an account? No problem! just click on the following link to <a href="/register">register</a> </p>
		</div>
	</body>
</html>
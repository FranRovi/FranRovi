<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
 	<%@ taglib prefix = "form" uri = "http://www.springframework.org/tags/form"%>


<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>My Order</title>
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/project.css">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container">
			<h1>My Current Order</h1>
			<div class="container">
				<table class="m-5 table table-bordered table table-striped table-responsive-lg">
					<thead class="table-dark">
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Action</th>
							<th>Total</th>
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
									<a href="/current_order"><img src="https://pics.freeicons.io/uploads/icons/png/19187836491541068764-512.png" alt="cart" style="width:45px;height:45px;" class="red-green"/></a>
								</td>
								<td></td>
							</tr>
						</c:forEach>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td>$ 0.0</td>
						</tr>
					</tbody>
				</table>
			</div >
			<div class="continer text-center">
				<a href="/cancel_order" class="mt-4 btn btn-secondary">Cancel Order</a>
				<a href="/items/new" class="mt-4 btn btn-secondary">Make Purchase</a>
			
			</div>
		</div>
	</body>
</html>
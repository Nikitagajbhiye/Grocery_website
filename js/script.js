let searchBar = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => 
{
	searchBar.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => 
{
	shoppingCart.classList.toggle('active');
	searchBar.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => 
{
	loginForm.classList.toggle('active');
	searchBar.classList.remove('active');
	shoppingCart.classList.remove('active');
	navbar.classList.remove('active');
}


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => 
{
	navbar.classList.toggle('active');
	searchBar.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
}


window.onscroll = () => 
{
	searchBar.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}














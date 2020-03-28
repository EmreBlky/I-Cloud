/************************ Loading Pages *************************/
function loadAllProducts() {
	$.post('products.php',function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e){
			console.log(e);
		}
	});
}

// removed
function loadProductsGrid(id) {
	$('#banner').remove();
	$.post('category.php?id='+id,function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

// removed
function loadSubProductsGrid(id) {
	$('#banner').remove();
	$.post('subcategory.php?id='+id,function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

// removed
function loadProductsList(id) {
	$('#banner').remove();
	$.post('categorylist.php?id='+id,function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

// removed
function loadSubProductsList(id) {
	$('#banner').remove();
	$.post('subcategorylist.php?id='+id,function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

// removed
function loadProductDetail(id,msg='') {
	$('#banner').remove();
	$.post('product.php?id='+id+'&message='+msg,function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

// removed
function loadCart(msg='') {
	$('#banner').remove();
	$.post('cart.php?message='+msg,function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}


function loadCartpopup(msg='') {
	$('#banner').remove();
	$.post('cart-ajax.php?message='+msg,function(contentHtml) {
		try{
			$('#top_popup_ajax_cart').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

// removed
function loadCartCheckout() {
	$('#banner').remove();
	$.post('checkout.php',function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

function loadAboutUs() {
	$('#banner').remove();
	$.post('aboutus.php',function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}
function loadSiteMap() {
	$('#banner').remove();
	$.post('sitemap.php',function(contentHtml) {
		try{
			$('#content').html(contentHtml);
		} catch(e) {console.log(e);}
	});
}

/************************ Product DetailView & Cart *************************/


function alert_popup(add_class, content){
	$('#alert-popup').removeClass();
	$('#alert-popup').addClass('alert');
	$('#alert-popup').addClass('alert-dismissible');
	$('#alert-popup').addClass(add_class);
	$('.alert-content').text(content);
	$('#alert-popup').css('display','block');
}
function addToCart(id) {
	var qty = parseInt($('#qty').val());
	if(isNaN(qty)) {
		$('#qty').val(1);
	} else {
		if(qty<0)
			$('#qty').val(1);
		else if(qty>999)
			$('#qty').val(999);
		else
		$.post('managecart.php?action=add&id='+id+'&quantity='+qty,function(msg) {
			
			try{
				$('#success-msg').html(msg);
				$('html, body').animate({
					scrollTop: "0"
				}, 800);
			} catch(e) {
				console.log(e);
			}
			
			//loadProductDetail(id,msg);
			//alert_popup('alert-success','This product was added to cart');
		});
	}
}
function updateToCart(id,count) {
	var qty = parseInt($('#qty'+count).val());
		$.post('managecart.php?action=update&id='+id+'&quantity='+qty,function(msg) {
			try{
				$('#success-msg').html(msg);
				location.reload();	
			} catch(e) {
				console.log(e);
			}
		});
}

function addToCartOne(id) {
	$.post('managecart.php?action=add&id='+id+'&quantity=1',function(msg) {
		
		try{
			
			$('#success-msg').html(msg);
			$('html, body').animate({
				scrollTop: "0"
			}, 800);
			console.log(msg);
		} catch(e) {
			
			console.log(e);
		}
		
		//loadProductDetail(id,msg);
		//alert (msg);
	});
}
function removeFromCart(id) {
	$.post('managecart.php?action=remove&id='+id,function(msg) {
		
		try{
			$('#success-msg').html(msg);
			$('html, body').animate({
				scrollTop: "0"
			}, 800);
		} catch(e) {
			console.log(e);
		}
		location.reload();
	});
}

// removed
function incQty() {
	var qty = parseInt($('#qty').val());
	if(isNaN(qty) | qty <= 0) {
		$('#qty').val(1);
	} else {
		if(qty > 999)
			qty=999;
		else
			$('#qty').val(qty);
	}
}

// removed
function decQty() {
	var qty = parseInt($('#qty').val());
	if(isNaN(qty) | qty < 0) {
		$('#qty').val(1);
	} else{
		if(qty>999) 
			qty=999;
		else
			$('#qty').val(qty);
	}
}
/***************** logout *************************/
function logout() {
	location.href="/?lo=R3re4gdD3T";
}




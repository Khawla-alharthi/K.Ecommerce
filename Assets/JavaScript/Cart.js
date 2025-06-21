function showHomePage() {
  window.location.href = "Home.html"; 
}

// add products to the cart
function addToCart(productId)
{
    // get the product from products array
    const product = products.find(p => p.id === productId);

    if(product === undefined)
    {
        alert("product not found");
        return;
    }

    // get cart from local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    

    // try to find the product inside the cart
    let existingItem = cart.find(item => item.id === productId);
    // If the product is already in the cart, increase the quantity
    if (existingItem)
    {
        existingItem.quantity += 1;
    }else{
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        })
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert(`"${product.title}" has been added to your cart.`);
}

function updateCartCount()
{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let count = 0;

    for(let item of cart)
    {
        count += item.quantity;
    }

    let cartCount = document.getElementById("cart-count");
    if(cartCount){
        cartCount.textContent = count;
    }
}

function renderCart() {
  // Get the cart data
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Find the container to display the cart items
  const cartContainer = document.getElementById("cart-items");

  // Stop if the container doesn't exist
  if (!cartContainer) return;

  // If the cart is empty, show a message
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p style="text-align:center;color:#666;">Your cart is empty</p>`;
    return;
  }
cartContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" width="100" height="100" />
      <div class="cart-item-details">
        <h3>${item.title}</h3>
        <p>Price: $${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        <p><strong>Total:</strong> $${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  `).join('');
}
// carouse slide 
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let slideInterval = setInterval(nextSlide, 5000); // change every 5 seconds 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
    currentIndex = index;
}

function nextSlide() {
    const newIndex = (currentIndex + 1) % totalSlides;
    showSlide(newIndex);
}

function prevSlide() {
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(newIndex);
}

function currentSlide(index) {
    showSlide(index);
    resetInterval();
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// get all products
const baseUrl = "https://fakestoreapi.com/products";
let products = [];
let productlist = document.getElementById('product-container');
// fetch(baseUrl).then(Response => Response.json()).then(data => data.json()).then(error = console.log(error));

async function getProducts()
{
    try {
        let response = await fetch(baseUrl);
        products = await response.json(); // store the fetched product data in the 'products' array
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

async function displayProduct()
{
    await getProducts();
    products.forEach(product => {
        productlist.innerHTML +=`
        <div class="product-card">
            <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
        </div>`;
    });
}
displayProduct();


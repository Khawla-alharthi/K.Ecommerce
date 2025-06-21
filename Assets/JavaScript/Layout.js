document.getElementById("navbar").innerHTML = 
    `<nav id="navbar" class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <h1 class="navbar-brand">K.E-commerce</h1>

        <!-- Toggler for mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar content -->
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        
        <!-- Left menu -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="Home.html">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#product-container">Products</a>
            </li>
        </ul>

        <!-- Center search bar -->
        <form class="d-flex mx-auto" role="search" style="max-width: 500px; width: 100%;">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <!-- Right-side buttons -->
        <div class="d-flex align-items-center gap-2">
            <a href="Login.html" class="btn btn-outline-primary">Login</a>
            <a href="Cart.html" class="btn btn-outline-dark position-relative">
            🛒 Cart
            <span id="cart-count" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
                <span class="visually-hidden">cart items</span>
            </span>
            </a>
        </div>
        </div>
    </div>
    </nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount?.(); // Only call it if defined (in Cart.js)
});

document.getElementById("footer").innerHTML =   
    `<div id="footer" class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>About K.E-commerce</h3>
                <p>
                    K.E-commerce is free Bootstrap 5 Alpha 2 HTML Template for e-commerce websites. You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.
                </p>
            </div>

            <div class="footer-section">
                <h3>Our Links</h3>
                <ul>
                    <li><a href="#">Advertise</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Our Company</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div class="footer-section social-section">
                <div class="social-icons">
                    <a href="#" title="Facebook">f</a>
                    <a href="#" title="Twitter">t</a>
                    <a href="#" title="Instagram">i</a>
                    <a href="#" title="Pinterest">p</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>Copyright 2020 K.E-commerce Company. All rights reserved.</p>
            <div>
                <a href="#">Terms of Use</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
`;
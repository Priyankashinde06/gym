'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Join Now button functionality
    const joinNowBtn = document.querySelector('.btn-secondary');
    const joinModal = document.getElementById('joinModal');
    const classModal = document.getElementById('classModal');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // Show Join Now modal
    if (joinNowBtn) {
        joinNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            joinModal.style.display = 'block';
        });
    }
    
    // Show Class Registration modal when clicking class cards
    const classCards = document.querySelectorAll('.class-card .card-title');
    classCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const className = this.textContent;
            document.getElementById('classModalTitle').textContent = `Register for ${className}`;
            document.getElementById('selectedClass').value = className;
            classModal.style.display = 'block';
        });
    });
    
    // Close modals
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close when clicking outside modal content
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        alert('Thank you for your registration! We will contact you soon.');
        // Remove the success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});
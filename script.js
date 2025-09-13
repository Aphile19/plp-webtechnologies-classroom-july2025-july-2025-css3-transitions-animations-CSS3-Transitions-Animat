/*
 * JavaScript Functions and Animation Control
 * Part 2 and 3 of Assignment: JavaScript Functions and Combining CSS with JS
 */

// Global variable to demonstrate scope
let globalVar;

// Part 2: JavaScript Functions

/**
 * Function with parameters and return value
 * Demonstrates parameter usage and return statement
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @returns {number} The calculated area
 */
function calculateArea(width, height) {
    return width * height;
}

/**
 * Function demonstrating variable scope
 * Shows difference between local and global variables
 * @returns {string} The local variable value
 */
function scopeDemo() {
    var localVar = "I'm local (function scoped)";
    globalVar = "I'm global (global scope)";
    return localVar;
}

/**
 * Demo function for calculation UI
 * Shows how functions with parameters and return values work
 */
function demoCalculation() {
    const width = 10;
    const height = 5;
    const area = calculateArea(width, height);
    document.getElementById('output').textContent = 
        `The area of a ${width}x${height} rectangle is ${area}`;
}

/**
 * Demo function for scope UI
 * Shows difference between local and global scope
 */
function demoScope() {
    const localResult = scopeDemo();
    document.getElementById('output').textContent = 
        `Local variable: ${localResult}, Global variable: ${globalVar}`;
}

// Part 3: Combining CSS with JavaScript

/**
 * Initialize all event listeners when DOM is loaded
 * Sets up all interactive functionality
 */
function initEventListeners() {
    // Card flip functionality
    document.getElementById('flipCard').addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
    
    // Part 2 function demo buttons
    document.getElementById('calcBtn').addEventListener('click', demoCalculation);
    document.getElementById('scopeBtn').addEventListener('click', demoScope);
    
    // Animation control buttons
    document.getElementById('startBtn').addEventListener('click', startAnimation);
    document.getElementById('stopBtn').addEventListener('click', stopAnimation);
    
    // Modal control buttons
    document.getElementById('modalBtn').addEventListener('click', openModal);
    document.getElementById('closeBtn').addEventListener('click', closeModal);
    
    // Dynamic styling buttons
    const colorButtons = document.querySelectorAll('[data-color]');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeColor(this.dataset.color);
        });
    });
    
    const sizeButtons = document.querySelectorAll('[data-size]');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeSize(this.dataset.size);
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

/**
 * Start CSS animation on box
 * Demonstrates adding CSS classes with JavaScript
 */
function startAnimation() {
    document.getElementById('jsBox').classList.add('animate');
}

/**
 * Stop CSS animation on box
 * Demonstrates removing CSS classes with JavaScript
 */
function stopAnimation() {
    document.getElementById('jsBox').classList.remove('animate');
}

/**
 * Open modal with CSS transition
 * Shows how to trigger CSS animations with JS
 */
function openModal() {
    document.getElementById('demoModal').classList.add('active');
}

/**
 * Close modal with CSS transition
 * Shows how to reverse CSS animations with JS
 */
function closeModal() {
    document.getElementById('demoModal').classList.remove('active');
}

/**
 * Change color of style box
 * Demonstrates direct style manipulation with JS
 * @param {string} color - The color to apply
 */
function changeColor(color) {
    const box = document.getElementById('styleBox');
    box.style.background = color;
}

/**
 * Change size of style box
 * Demonstrates direct style manipulation with JS
 * @param {string} size - The size to apply ('large' or 'small')
 */
function changeSize(size) {
    const box = document.getElementById('styleBox');
    if (size === 'large') {
        box.style.width = '150px';
        box.style.height = '150px';
    } else {
        box.style.width = '100px';
        box.style.height = '100px';
    }
}

/**
 * Initialize boxes with default styles
 * Sets up initial state for demo elements
 */
function initBoxes() {
    document.getElementById('jsBox').style.background = 'linear-gradient(45deg, #6e8efb, #a777e3)';
    document.getElementById('styleBox').style.background = 'linear-gradient(45deg, #6e8efb, #a777e3)';
}

// Initialize the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initBoxes();
    initEventListeners();
    console.log('Application initialized successfully');
});

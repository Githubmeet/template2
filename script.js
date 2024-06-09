document.getElementById('addToCartBtn').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'block';
    setTimeout(function() {
        document.getElementById('alertBox').style.display = 'none';
    }, 3000);
});

document.getElementById('loadMoreReviews').addEventListener('click', function() {
    const reviews = [
        {
            name: 'Alice Johnson',
            rating: '★★★★★',
            comment: 'Absolutely love this product! It exceeded my expectations.'
        },
        {
            name: 'Bob Brown',
            rating: '★★☆☆☆',
            comment: 'Not what I expected, there are better options available.'
        }
    ];
    
    const reviewsContainer = document.getElementById('reviews-list');
    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('list-group-item');
        
        reviewElement.innerHTML = `
            <h5>${review.name}</h5>
            <p>${review.rating}</p>
            <p>${review.comment}</p>
        `;
        
        reviewsContainer.appendChild(reviewElement);
    });
});

const stars = document.querySelectorAll('.stars span');
let ratingValueElement = document.querySelector('.rating-value');

stars.forEach(star => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('selected'));
        star.classList.add('selected');
        let rating = star.getAttribute('data-value');
        ratingValueElement.textContent = rating;
    });
    star.addEventListener('mouseover', () => {
        stars.forEach(s => s.classList.remove('hover'));
        star.classList.add('hover');
        let rating = star.getAttribute('data-value');
        ratingValueElement.textContent = rating;
    });
    star.addEventListener('mouseout', () => {
        stars.forEach(s => s.classList.remove('hover'));
        let selectedStar = document.querySelector('.stars span.selected');
        if (selectedStar) {
            ratingValueElement.textContent = selectedStar.getAttribute('data-value');
        } else {
            ratingValueElement.textContent = '4.5';
        }
    });
});



// Existing JavaScript code

// Update price based on selected variant
document.getElementById('colorSelect').addEventListener('change', updatePrice);
document.getElementById('sizeSelect').addEventListener('change', updatePrice);

function updatePrice() {
    // Logic to update price based on selected variant
    // Example: if black and small selected, price = $99.99
    const color = document.getElementById('colorSelect').value;
    const size = document.getElementById('sizeSelect').value;
    let price = 99.99; // Base price
    
    // Example logic to adjust price based on variant
    if (color === 'black') {
        price += 0; // No additional cost for black
    } else if (color === 'white') {
        price += 5; // White color costs $5 extra
    } else if (color === 'blue') {
        price += 10; // Blue color costs $10 extra
    }

    if (size === 'small') {
        price += 0; // No additional cost for small
    } else if (size === 'medium') {
        price += 10; // Medium size costs $10 extra
    } else if (size === 'large') {
        price += 20; // Large size costs $20 extra
    }

    document.querySelector('.product-price').textContent = `$${price.toFixed(2)}`;
}




// Existing JavaScript code

// Wishlist Button
document.getElementById('addToWishlistBtn').addEventListener('click', function() {
    // Logic to add the product to the user's wishlist
    // Example: Display a confirmation message
    alert('Product added to wishlist!');
});

// Recently Viewed Products (Assuming the use of cookies to track viewed products)
// Logic to retrieve and display recently viewed products goes here

// Product Availability
// Logic to check product availability and display status goes here
// Example: If product is out of stock, update availability message accordingly

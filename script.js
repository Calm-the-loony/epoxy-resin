const filterButtons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');

        items.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});




document.getElementById("cart").addEventListener("click", function (event) {
    event.preventDefault(); 
    document.getElementById("cartModal").style.display = "block";
    document.getElementById("checkoutButton").addEventListener("click", function () {
    });
});

document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("cartModal").style.display = "none";
});

const payButton = document.getElementById('payButton');
payButton.addEventListener('click', function() {
    const paymentUrl = 'https://example.com/payment'; 

    window.location.href = paymentUrl;
});



// Отзывы
const reviews = document.querySelectorAll('.review');
let currentReview = 0;

const showReview = (index) => {
    reviews.forEach((review, i) => {
        if (i === index) {
            review.style.display = 'block';
            attachImageClickEvent(review);
        } else {
            review.style.display = 'none';
        }
    });
};

const attachImageClickEvent = (review) => {
    const images = review.querySelectorAll('img');
    images.forEach((image) => {
        image.addEventListener('click', () => {
            openFullscreen(image);
        });
    });
};

const openFullscreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
};

showReview(currentReview);

const nextReview = document.getElementById('nextReview');
const prevReview = document.getElementById('prevReview');

nextReview.addEventListener('click', () => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
});

prevReview.addEventListener('click', () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
});

/*обратная связь */
// document.addEventListener('DOMContentLoaded', function () {
//             const feedbackForm = document.getElementById('feedbackForm');
//             const reviewContainer = document.getElementById('reviewContainer');

//             feedbackForm.addEventListener('submit', function (event) {
//                 event.preventDefault();

//                 const username = document.getElementById('username').value;
//                 const feedbackText = document.getElementById('feedback').value;

//                 if (username && feedbackText) {
//                     // Create a new review element
//                     const newReview = document.createElement('div');
//                     newReview.classList.add('review');
//                     newReview.innerHTML = `<p><strong>${username}:</strong> ${feedbackText}</p>`;

//                     // Add the new review to the review container
//                     reviewContainer.appendChild(newReview);

//                     // Clear the form fields
//                     document.getElementById('username').value = '';
//                     document.getElementById('feedback').value = '';
//                 }
//             });
//         });


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('dblclick', handleDoubleClick);
    });

    function handleDoubleClick(event) {
        const productName = event.currentTarget.querySelector('.description p').textContent;
        addToCart(productName);
    }

    function addToCart(productName) {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartItem = document.createElement('div');
        cartItem.textContent = productName;
        cartItemsContainer.appendChild(cartItem);
    }
});

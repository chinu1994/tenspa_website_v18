/** @odoo-module **/

import {Component, mount, whenReady, useState, onMounted} from "@odoo/owl";
import {getTemplate} from "@web/core/templates";
import {rpc} from "@web/core/network/rpc";

export class GiftVoucher extends Component {
    setup() {
        onMounted(() => {
            // Try multiple approaches to ensure DOM is ready
            this.attachEventListeners();
        });
    }

    attachEventListeners() {
        // Try immediate attachment
        this.initializeEventListeners();

        // Also try after a longer delay
        setTimeout(() => {
            this.initializeEventListeners();
        }, 500);

        // And after another delay
        setTimeout(() => {

            this.initializeEventListeners();
        }, 1000);
    }

    initializeEventListeners() {


        // Gift For Him button click event
        const giftForHimBtn = document.getElementById('giftForHimBtn');
        if (giftForHimBtn) {
            // Remove existing event listeners to prevent duplicates
            const newGiftForHimBtn = giftForHimBtn.cloneNode(true);
            giftForHimBtn.parentNode.replaceChild(newGiftForHimBtn, giftForHimBtn);
            newGiftForHimBtn.addEventListener('click', this.handleGiftForHimClick);
        }

        // Gift For Her button click event
        const giftForHerBtn = document.getElementById('giftForHerBtn');
        if (giftForHerBtn) {
            // Remove existing event listeners to prevent duplicates
            const newGiftForHerBtn = giftForHerBtn.cloneNode(true);
            giftForHerBtn.parentNode.replaceChild(newGiftForHerBtn, giftForHerBtn);
            newGiftForHerBtn.addEventListener('click', this.handleGiftForHerClick);
        }

        // Gift Now button click event (original button)
        const giftNowBtn = document.getElementById('giftNowBtn');
        if (giftNowBtn) {
            giftNowBtn.addEventListener('click', this.handleGiftNowClick);
        }

        // Handle popup close button
        setTimeout(() => {
            const closeButtons = document.querySelectorAll('.popup-close');
            closeButtons.forEach(button => {
                button.addEventListener('click', this.closePopup);
            });

            // Close popup when clicking on backdrop
            const popups = document.querySelectorAll('.simple-popup');
            popups.forEach(popup => {
                popup.addEventListener('click', (event) => {
                    if (event.target.classList.contains('simple-popup')) {
                        this.closePopup();
                    }
                });
            });

            // Add event listeners for Yes and No buttons
            const yesBtn = document.getElementById('yesBtn');
            const noBtn = document.getElementById('noBtn');

            if (yesBtn) {
                yesBtn.addEventListener('click', this.handleFirstTimeYes);
            }

            // Commented out the No button event listener to make it do nothing
            // if (noBtn) {
            //     noBtn.addEventListener('click', this.handleFirstTimeNo);
            // }

            // Add event listener for form submission
            const form = document.getElementById('giftForm');
            if (form) {
                form.addEventListener('submit', this.handleFormSubmit);
            }
        }, 100);
    }

    handleGiftForHimClick = (event) => {
        event.preventDefault();
        // Hide gender selection and show first time question
        this.showFirstTimeQuestion();
    }

    handleGiftForHerClick = (event) => {
        event.preventDefault();
        // Hide gender selection and show first time question
        this.showFirstTimeQuestion();
    }

    handleGiftNowClick = (event) => {
        event.preventDefault();
        // Show gender selection popup
        this.showGenderSelectionPopup("Gift Voucher");
    }

    showGenderSelectionPopup(title) {
        // Get popup from XML
        const popup = document.getElementById('simplePopup');
        if (popup) {
            // Update title
            const titleElement = popup.querySelector('h2');
            if (titleElement) {
                titleElement.textContent = title;
            }

            // Show the popup
            popup.style.display = 'block';

            // Show gender selection section
            const genderSelection = document.getElementById('genderSelection');
            if (genderSelection) {
                genderSelection.style.display = 'block';
            }

            // Hide the question and buttons initially
            const paragraph = popup.querySelector('p:not(#genderSelection p)');
            const buttonGroup = popup.querySelector('.button-group');
            const form = document.getElementById('giftForm');

            if (paragraph) {
                paragraph.style.display = 'none';
            }

            if (buttonGroup) {
                buttonGroup.style.display = 'none';
            }

            if (form) {
                form.style.display = 'none';
            }
        }
    }

    handleFirstTimeYes = (event) => {
        event.preventDefault();
        // Show form
        this.showFormPopup("Please Sign up");
    }

    // Commented out the No button handler to make it do nothing
    // handleFirstTimeNo = (event) => {
    //     console.log("Returning user selected No");
    //     event.preventDefault();
    //     // Auto-fill with dummy data and go to service page
    //     this.autoFillAndNavigate();
    // }

    showFirstTimeQuestion() {
        // Hide gender selection
        const genderSelection = document.getElementById('genderSelection');
        if (genderSelection) {
            genderSelection.style.display = 'none';
        }

        // Show the question and buttons
        const paragraphs = document.querySelectorAll('.popup-content > p');
        const buttonGroup = document.querySelector('.button-group');

        // Show the main question paragraph (skip the one in genderSelection)
        if (paragraphs.length > 0) {
            paragraphs[paragraphs.length - 1].style.display = 'block';
        }

        if (buttonGroup) {
            buttonGroup.style.display = 'flex';
        }
    }

    showFormPopup(title) {
        const popup = document.getElementById('simplePopup');
        if (popup) {
            // Update title
            const titleElement = popup.querySelector('h2');
            if (titleElement) {
                titleElement.textContent = title;
            }

            // Hide the question and buttons
            const paragraph = popup.querySelector('p:not(#genderSelection p)');
            const buttonGroup = popup.querySelector('.button-group');

            if (paragraph) {
                paragraph.style.display = 'none';
            }

            if (buttonGroup) {
                buttonGroup.style.display = 'none';
            }

            // Show the form
            const form = document.getElementById('giftForm');
            if (form) {
                form.style.display = 'block';
            }
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        // Collect form data
        const formData = {
            fullname: document.getElementById('customerFullName').value,
            firstname: document.getElementById('customerFirstName').value,
            lastname: document.getElementById('customerLastName').value,
            phone: document.getElementById('customerPhone').value,
            address: document.getElementById('customerAddress').value,
            birthdate: document.getElementById('customerBirthdate').value
        };


        // Save to localStorage (in a real app, you would send this to a server)
        localStorage.setItem('customerInfo', JSON.stringify(formData));

        // Close popup and navigate to service page
        this.closePopup();
        this.navigateToServicePage();
    }

    // Commented out the auto-fill function to make No button do nothing
    // autoFillAndNavigate = () => {
    //     console.log("Auto-filling data for returning customer");
    //     // Auto-fill with dummy data for returning customers
    //     const dummyData = {
    //            fullname:'Returning Customer',
    //         firstname: 'Returning Customer',
    //         lastname: 'Returning Customer',
    //         phone: 'N/A',
    //         address: 'N/A',
    //         email: 'N/A',
    //         birthdate: 'N/A'
    //     };
    //
    //     // Save to localStorage
    //     localStorage.setItem('customerInfo', JSON.stringify(dummyData));
    //
    //     // Close popup and navigate to service page
    //     this.closePopup();
    //     this.navigateToServicePage();
    // }

    navigateToServicePage = () => {
        // In a real app, you would navigate to the actual service page
        // For now, we'll just log it
        alert("Navigating to service page...");
        // window.location.href = '/service-page'; // Uncomment this in a real app
    }

    closePopup = () => {
        const popup = document.getElementById('simplePopup');
        if (popup) {
            popup.style.display = 'none';
        }
    }
}

GiftVoucher.template = "insabhi_custom_website.GiftVoucher";

// 🚀 UPDATED MOUNTING LOGIC START 🚀
whenReady(() => {
    // 1. Pehle hum 'tenStore_product_detail' page ka main container check karenge
    const productDetailContainer = document.querySelector('.tenStore_product_detail');

    // 2. Phir hum original gift voucher page selectors check karenge (as fallback/original location)
    const owl_giftVoucher = document.querySelector('.giftVoucher');
    const giftContainer = document.querySelector('.gift-voucher-container');


    if (productDetailContainer) {
        // Agar tenStore Product Detail page hai, toh yahan mount karo
        mount(GiftVoucher, productDetailContainer, {getTemplate});
    }
    else if (owl_giftVoucher) {
        // Ya agar original gift voucher page hai (.giftVoucher class ke saath)
        mount(GiftVoucher, owl_giftVoucher, {getTemplate});
    }
    else if (giftContainer) {
        // Ya agar gift voucher container hai (alternative selector)
        mount(GiftVoucher, giftContainer, {getTemplate});
    } else {
        // No matching container found
    }
});
// 🚀 UPDATED MOUNTING LOGIC END 🚀

// whenReady(() => {
//
//     const owl_giftVoucher = document.querySelector('.giftVoucher');
//     if (owl_giftVoucher) {
//
//         mount(GiftVoucher, owl_giftVoucher, {getTemplate});
//     } else {
//
//         // Try alternative selector
//         const giftContainer = document.querySelector('.gift-voucher-container');
//         if (giftContainer) {
//             mount(GiftVoucher, giftContainer, {getTemplate});
//         } else {
//         }
//     }
// });
/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class ServiceSelecting extends Component {
    static template = "insabhi_custom_website.ServiceSelecting";

    setup() {
        this.state = useState({
            currentStep: 'category',
            selectedCategory: null,
            selectedService: null,
            selectedDuration: null,
            selectedPrice: null,
            selectedGiftType: null,
            recipientName: '',
            message: '',
            senderName: '',
            songLink: '',
            showDateTimePicker: false,
            selectedDeliveryDate: null,
            selectedDeliveryTime: null,
            recipientPhone: '',
        });

        // CATEGORIES
        this.categories = [
            { id: 1, name: "Massage", image: "/insabhi_custom_website/static/src/Images/mass4.webp" },
            { id: 2, name: "Skin Care", image: "/insabhi_custom_website/static/src/Images/treat20.webp" },
            { id: 3, name: "Facial", image: "/insabhi_custom_website/static/src/Images/treat2.webp" },
            { id: 4, name: "Rituals", image: "/insabhi_custom_website/static/src/Images/treat16.webp" },
            { id: 5, name: "Nail Care", image: "/insabhi_custom_website/static/src/Images/treat10.webp" },
        ];

        // SERVICES
        this.services = {
            1: [
                { name: "Swedish Massage", img: "/insabhi_custom_website/static/src/Images/treat9.webp" },
                { name: "Deep Tissue Massage", img: "/insabhi_custom_website/static/src/Images/treat21.jpeg" },
                { name: "Hot Stone Massage", img: "/insabhi_custom_website/static/src/Images/mass4.webp" },
                { name: "Aromatherapy Massage", img: "/insabhi_custom_website/static/src/Images/treat13.jpeg" },
                { name: "Sports Massage", img: "/insabhi_custom_website/static/src/Images/mass3.webp" },
                { name: "Thai Table Massage", img: "/insabhi_custom_website/static/src/Images/mass2.webp" },
                { name: "Balinese Massage", img: "/insabhi_custom_website/static/src/Images/gift4.jpg" },
            ],
            2: [
                { name: "HydraFacial", img: "/insabhi_custom_website/static/src/Images/treat18.webp" },
                { name: "Anti-Aging Treatment", img: "/insabhi_custom_website/static/src/Images/treat21.webp" },
                { name: "Brightening Glow", img: "/insabhi_custom_website/static/src/Images/treat20.webp" },
            ],
            3: [
                { name: "Signature Facial", img: "/insabhi_custom_website/static/src/Images/treat2.webp" },
                { name: "Gold Radiance Facial", desc: "24K gold for ultimate glow", img: "/insabhi_custom_website/static/src/Images/facial3.jpg" },
            ],
            4: [
                { name: "Royal Couple Ritual", img: "/insabhi_custom_website/static/src/Images/treat13.webp" },
                { name: "Signature Bliss Ritual", img: "/insabhi_custom_website/static/src/Images/treat21.webp" },
                { name: "Detox & Renew Ritual", img: "/insabhi_custom_website/static/src/Images/treat16.webp" },
                { name: "Gentleman's Retreat", img: "/insabhi_custom_website/static/src/Images/treat17.webp" },
                { name: "Head-to-Toe Ritual", img: "/insabhi_custom_website/static/src/Images/treat20.webp" },
            ],
            5: [
                { name: "Gentleman's Manicure", img: "/insabhi_custom_website/static/src/Images/treat10.webp" },
                { name: "Executive Pedicure", img: "/insabhi_custom_website/static/src/Images/nail3.jpg" },
            ],
        };

        // AUTOMATED MESSAGES
        this.autoMessages = {
            father: `Take a well-deserved break and enjoy a day just for you. Relax, recharge, and let yourself be pampered, you’ve earned every moment of peace and comfort.`,
            mother: `A day just for you to relax, recharge, and feel cared for. You deserve every moment of peace and joy, for all the love and kindness you give every day.`,
            husband: `This is your day to rest and relax, to recharge and renew your peace. You deserve every moment of care and attention for all the love and effort you give.`,
            wife: `Take a day just for you, to relax, refresh, and be pampered. You deserve every moment of peace and care for all the love you give every day.`,
            friend: `Enjoy a day of relaxation and self care. Take time to recharge, unwind, and refresh your energy — you deserve every moment of peace after all your hard work.`,
        };

        // METHODS
        this.selectCategory = (catId) => {
            this.state.selectedCategory = catId;
        };

        this.moveToService = () => {
            if (this.state.selectedCategory) {
                this.state.currentStep = 'service';
            }
        };

        this.moveToDuration = (service) => {
            this.state.selectedService = service;
            this.state.selectedDuration = null;
            this.state.selectedPrice = null;
            this.state.currentStep = 'duration';
        };

        this.selectDuration = (minutes, price) => {
            this.state.selectedDuration = minutes;
            this.state.selectedPrice = price.toFixed(1);
        };

        this.moveToGift = () => {
            if (this.state.selectedDuration) {
                this.state.currentStep = 'gift';
            }
        };

        this.selectGiftType = (type) => {
            this.state.selectedGiftType = type;
        };

        this.moveToMessage = () => {
            if (this.state.selectedGiftType) {
                this.state.currentStep = 'message';
            }
        };

        this.applyAutoMessage = (ev) => {
            const key = ev.target.value;
            if (key && this.autoMessages[key]) {
                this.state.message = this.autoMessages[key];
                ev.target.value = "";
            }
        };

        this.moveToAddons = () => {
            if (this.state.recipientName.trim() && this.state.message.trim()) {
                this.state.currentStep = 'addons';
            }
        };

        this.moveToDelivery = () => {
            this.state.currentStep = 'delivery';
        };

        this.selectDeliveryDate = (date) => {
            this.state.selectedDeliveryDate = date;
        };

        this.selectDeliveryTime = (time) => {
            this.state.selectedDeliveryTime = time;
        };

        this.openDateTimePicker = () => {
            this.state.showDateTimePicker = true;
        };

        this.closeDateTimePicker = () => {
            this.state.showDateTimePicker = false;
        };

        this.confirmDateTime = () => {
            this.state.showDateTimePicker = false;
            // Assume selections are made in picker, for simplicity
            this.state.selectedDeliveryDate = 'custom';
            this.state.selectedDeliveryTime = 'custom';
            this.moveToPayment();
        };

        this.moveToPayment = () => {
            if (this.state.selectedDeliveryDate && this.state.selectedDeliveryTime) {
                this.state.currentStep = 'payment';
            }
        };

        this.completePayment = () => {
            alert("Payment completed! Thank you for your order.");
            this.resetAll();
        };

        this.goBackToCategory = () => {
            this.state.currentStep = 'category';
        };

        this.goBackToService = () => {
            this.state.currentStep = 'service';
        };

        this.goBackToDuration = () => {
            this.state.currentStep = 'duration';
        };

        this.goBackToGift = () => {
            this.state.currentStep = 'gift';
        };

        this.goBackToMessage = () => {
            this.state.currentStep = 'message';
        };

        this.goBackToAddons = () => {
            this.state.currentStep = 'addons';
        };

        this.goBackToDelivery = () => {
            this.state.currentStep = 'delivery';
        };

        this.resetAll = () => {
            this.state.currentStep = 'category';
            this.state.selectedCategory = null;
            this.state.selectedService = null;
            this.state.selectedDuration = null;
            this.state.selectedPrice = null;
            this.state.selectedGiftType = null;
            this.state.recipientName = '';
            this.state.message = '';
            this.state.senderName = '';
            this.state.songLink = '';
            this.state.showDateTimePicker = false;
            this.state.selectedDeliveryDate = null;
            this.state.selectedDeliveryTime = null;
            this.state.recipientPhone = '';
        };

        this.getCurrentServices = () => {
            return this.services[this.state.selectedCategory] || [];
        };
    }
}

whenReady(() => {
    const target = document.querySelector('.serviceSelecting');
    if (target) {
        mount(ServiceSelecting, target, { getTemplate });
    }
});
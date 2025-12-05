/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class ForHer extends Component {
    static template = "insabhi_custom_website.ForHer";

    setup() {
        this.state = useState({
            selectedCategory: null,
            selectedService: null,
            selectedDuration: null,
            selectedPrice: null,
            showGiftCards: false,
            showMessageForm: false,
            showAddons: false,           // ← NEW: Controls Add-ons page
            selectedGiftType: null,
            recipientName: '',
            message: '',
            senderName: '',
            songLink: '',
        });

        // CATEGORIES
         this.categories = [
            { id: 1, name: "Massage",    image: "/insabhi_custom_website/static/src/Images/treat6.jpg" },
            { id: 2, name: "Skin Care",  image: "/insabhi_custom_website/static/src/Images/treat5.jpg" },
            { id: 3, name: "Facial",     image: "/insabhi_custom_website/static/src/Images/treat7.jpg" },
            { id: 4, name: "Rituals",    image: "/insabhi_custom_website/static/src/Images/treat4.jpg" },
            { id: 5, name: "Nail Care",  image: "/insabhi_custom_website/static/src/Images/treat3.jpg" },
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

        // AUTOMATED MESSAGES (English)
        this.autoMessages = {
            father: `Take a well-deserved break and enjoy a day just for you. Relax, recharge, and let yourself be pampered, you’ve earned every moment of peace and comfort.`,
            mother: `A day just for you to relax, recharge, and feel cared for. You deserve every moment of peace and joy, for all the love and kindness you give every day.`,
            husband: `This is your day to rest and relax, to recharge and renew your peace. You deserve every moment of care and attention for all the love and effort you give.`,
            wife: `Take a day just for you, to relax, refresh, and be pampered. You deserve every moment of peace and care for all the love you give every day.`,
            friend: `Enjoy a day of relaxation and self care. Take time to recharge, unwind, and refresh your energy — you deserve every moment of peace after all your hard work.`,
        };

        // METHODS
        this.selectCategory = (catId) => {
            Object.assign(this.state, {
                selectedCategory: this.state.selectedCategory === catId ? null : catId,
                selectedService: null,
                selectedDuration: null,
                selectedPrice: null,
                showGiftCards: false,
                showMessageForm: false,
                showAddons: false,
                selectedGiftType: null,
                recipientName: '',
                message: '',
                senderName: '',
                songLink: '',
            });
        };

        this.selectService = (service) => {
            this.state.selectedService = service;
            this.state.selectedDuration = null;
            this.state.selectedPrice = null;
            this.state.showGiftCards = false;
            this.state.showMessageForm = false;
            this.state.showAddons = false;
        };

        this.selectDuration = (minutes, price) => {
            this.state.selectedDuration = minutes;
            this.state.selectedPrice = price.toFixed(1);
        };

        this.proceedToGiftCards = () => {
            this.state.showGiftCards = true;
        };

        this.selectGiftType = (type) => {
            this.state.selectedGiftType = type;
            this.state.showGiftCards = false;
            this.state.showMessageForm = true;
        };

        this.applyAutoMessage = (ev) => {
            const key = ev.target.value;
            if (key && this.autoMessages[key]) {
                this.state.message = this.autoMessages[key];
                ev.target.value = ""; // reset dropdown
            }
        };

        this.completeGift = () => {
            if (!this.state.recipientName.trim()) {
                alert("Please enter the recipient's name.");
                return;
            }
            if (!this.state.message.trim()) {
                alert("Please write a message or choose an automated one.");
                return;
            }

            // Show Add-ons page
            this.state.showAddons = true;

            // Send order to WhatsApp
            const text = `NEW GIFT VOUCHER ORDER

            Service: ${this.state.selectedService.name} (${this.state.selectedDuration} min)
            Price: KWD ${this.state.selectedPrice}
            Gift Type: ${this.state.selectedGiftType.toUpperCase()}
            To: ${this.state.recipientName}
            Message: ${this.state.message}
            From: ${this.state.senderName || 'Anonymous'}
            ${this.state.songLink ? 'Song Link: ' + this.state.songLink : ''}

            Thank you!`;

//            window.open(`https://api.whatsapp.com/send?phone=96522288282&text=${encodeURIComponent(text)}`, '_blank');
        };

        this.getCurrentServices = () => {
            return this.services[this.state.selectedCategory] || [];
        };
    }
}

// Mount the component
whenReady(() => {
    const target = document.querySelector('.forHer');
    if (target) {
        mount(ForHer, target, { getTemplate });
    }
});
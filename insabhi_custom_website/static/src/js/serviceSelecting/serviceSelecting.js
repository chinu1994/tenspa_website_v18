/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";

export class ServiceSelecting extends Component {
    static template = "insabhi_custom_website.ServiceSelecting";

    setup() {
        this.state = useState({
            selectedCategory: null,
            selectedService: null,
            selectedDuration: null,
            selectedPrice: null,
        });

        this.categories = [
            { id: 1, name: "Massage",    image: "/insabhi_custom_website/static/src/Images/mass4.webp" },
            { id: 2, name: "Skin Care",  image: "/insabhi_custom_website/static/src/Images/treat20.webp" },
            { id: 3, name: "Facial",     image: "/insabhi_custom_website/static/src/Images/treat2.webp" },
            { id: 4, name: "Rituals",    image: "/insabhi_custom_website/static/src/Images/treat16.webp" },
            { id: 5, name: "Nail Care",  image: "/insabhi_custom_website/static/src/Images/treat10.webp" },
        ];

        this.services = {
            1: [ // Massage → 7 Services
                { name: "Swedish Massage",  img: "/insabhi_custom_website/static/src/Images/treat9.webp" },
                { name: "Deep Tissue Massage",  img: "/insabhi_custom_website/static/src/Images/treat21.jpeg" },
                { name: "Hot Stone Massage", img: "/insabhi_custom_website/static/src/Images/mass4.webp" },
                { name: "Aromatherapy Massage", img: "/insabhi_custom_website/static/src/Images/treat13.jpeg" },
                { name: "Sports Massage", img: "/insabhi_custom_website/static/src/Images/mass3.webp" },
                { name: "Thai Table Massage", img: "/insabhi_custom_website/static/src/Images/mass2.webp" },
                { name: "Balinese Massage", img: "/insabhi_custom_website/static/src/Images/gift4.jpg" },
            ],
            2: [ // Skin Care → 3 Services
                { name: "HydraFacial", img: "/insabhi_custom_website/static/src/Images/treat18.webp" },
                { name: "Anti-Aging Treatment", img: "/insabhi_custom_website/static/src/Images/treat21.webp" },
                { name: "Brightening Glow", img: "/insabhi_custom_website/static/src/Images/treat20.webp" },
            ],
            3: [ // Facial → 2 Services
                { name: "Signature Facial", img: "/insabhi_custom_website/static/src/Images/treat2.webp" },
                { name: "Gold Radiance Facial", desc: "24K gold for ultimate glow", img: "/insabhi_custom_website/static/src/Images/facial3.jpg" },
            ],
            4: [ // Rituals → 5 Services
                { name: "Royal Couple Ritual", img: "/insabhi_custom_website/static/src/Images/treat13.webp" },
                { name: "Signature Bliss Ritual", img: "/insabhi_custom_website/static/src/Images/treat21.webp" },
                { name: "Detox & Renew Ritual", img: "/insabhi_custom_website/static/src/Images/treat16.webp" },
                { name: "Gentleman's Retreat",  img: "/insabhi_custom_website/static/src/Images/treat17.webp" },
                { name: "Head-to-Toe Ritual", img: "/insabhi_custom_website/static/src/Images/treat20.webp" },
            ],
            5: [ // Nail Care → 2 Services
                { name: "Gentleman's Manicure", img: "/insabhi_custom_website/static/src/Images/treat10.webp" },
                { name: "Executive Pedicure", img: "/insabhi_custom_website/static/src/image/nail3.jpg" },
            ],
        };

        this.selectCategory = (catId) => {
            this.state.selectedCategory = this.state.selectedCategory === catId ? null : catId;
            this.state.selectedService = null;
            this.state.selectedDuration = null;
            this.state.selectedPrice = null;
        };

        this.selectService = (service) => {
            this.state.selectedService = service;
            this.state.selectedDuration = null;
            this.state.selectedPrice = null;
        };

        this.selectDuration = (minutes, price) => {
            this.state.selectedDuration = minutes;
            this.state.selectedPrice = price.toFixed(1);
            this.render(); // This forces the sidebar to appear immediately
        };

        this.clearSelection = () => {
            this.state.selectedService = null;
            this.state.selectedDuration = null;
            this.state.selectedPrice = null;
            this.render();
        };

        this.getCurrentServices = () => {
            return this.services[this.state.selectedCategory] || [];
        };
    }
}

whenReady(() => {
    const owl_serviceSelecting = document.querySelector('.serviceSelecting');
    if (owl_serviceSelecting) {
        mount(ServiceSelecting, owl_serviceSelecting, { getTemplate });
    }
});
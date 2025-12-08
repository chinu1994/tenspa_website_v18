"use client"

/** @odoo-module **/

import { Component, mount, whenReady, useState } from "@odoo/owl"
import { getTemplate } from "@web/core/templates"

export class ServiceSelecting extends Component {
    static template = "insabhi_custom_website.ServiceSelecting";

  setup() {
    // Hooks must be called at the top level of the component
    this.state = useState({
      currentStep: "category",
      selectedCategory: null,
      selectedService: null,
      selectedDuration: null,
      selectedPrice: null,
      selectedDate: null,
      selectedTime: null,
      recipientName: "",
      message: "",
      senderName: "",
      paymentMethod: "card",
    })

    // CATEGORIES (same as before)
    this.categories = [
      { id: 1, name: "Massage", image: "/insabhi_custom_website/static/src/Images/mass4.webp" },
      { id: 2, name: "Skin Care", image: "/insabhi_custom_website/static/src/Images/treat20.webp" },
      { id: 3, name: "Facial", image: "/insabhi_custom_website/static/src/Images/treat2.webp" },
      { id: 4, name: "Rituals", image: "/insabhi_custom_website/static/src/Images/treat16.webp" },
      { id: 5, name: "Nail Care", image: "/insabhi_custom_website/static/src/Images/treat10.webp" },
    ]

    // SERVICES (same as before)
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
        {
          name: "Gold Radiance Facial",
          desc: "24K gold for ultimate glow",
          img: "/insabhi_custom_website/static/src/Images/facial3.jpg",
        },
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
    }

    this.selectCategoryAndMove = (catId) => {
      this.state.selectedCategory = catId
    }

    this.moveToService = () => {
      if (this.state.selectedCategory) {
        this.state.currentStep = "service"
      }
    }

    this.selectServiceOnly = (service) => {
      this.state.selectedService = service
      this.state.selectedDuration = null
      this.state.selectedPrice = null
    }

    this.selectDuration = (minutes, price) => {
      this.state.selectedDuration = minutes
      this.state.selectedPrice = price.toFixed(1)
    }

    this.moveToTime = () => {
      if (this.state.selectedService && this.state.selectedDuration) {
        this.state.currentStep = "time"
      }
    }

    this.selectDate = (date) => {
      this.state.selectedDate = date
    }

    this.selectTime = (time) => {
      this.state.selectedTime = time
    }

    this.moveToAmount = () => {
      if (this.state.selectedDate && this.state.selectedTime) {
        this.state.currentStep = "amount"
      }
    }

    this.moveToPayment = () => {
      if (this.state.recipientName.trim() && this.state.message.trim()) {
        this.state.currentStep = "payment"
      }
    }

    this.completePayment = () => {
      alert("Payment completed! Thank you for your order.")
      // Reset for next order
      this.resetAll()
    }

    this.goBackToCategory = () => {
      this.state.currentStep = "category"
      this.state.selectedService = null
      this.state.selectedDuration = null
      this.state.selectedPrice = null
    }

    this.goBackToService = () => {
      this.state.currentStep = "service"
      this.state.selectedDate = null
      this.state.selectedTime = null
    }

    this.goBackToTime = () => {
      this.state.currentStep = "time"
      this.state.recipientName = ""
      this.state.message = ""
      this.state.senderName = ""
    }

    this.goBackToAmount = () => {
      this.state.currentStep = "amount"
    }

    this.resetAll = () => {
      this.state.currentStep = "category"
      this.state.selectedCategory = null
      this.state.selectedService = null
      this.state.selectedDuration = null
      this.state.selectedPrice = null
      this.state.selectedDate = null
      this.state.selectedTime = null
      this.state.recipientName = ""
      this.state.message = ""
      this.state.senderName = ""
    }

    this.getCurrentServices = () => {
      return this.services[this.state.selectedCategory] || []
    }
  }
}

whenReady(() => {
    const target = document.querySelector('.serviceSelecting');
    if (target) {
        mount(ServiceSelecting, target, { getTemplate });
    }
});
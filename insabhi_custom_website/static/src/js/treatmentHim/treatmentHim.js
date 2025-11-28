/** @odoo-module **/

import { Component, mount, whenReady } from "@odoo/owl";
import { getTemplate } from "@web/core/templates";
import { rpc } from "@web/core/network/rpc";

export class TreatmentHim extends Component {}

TreatmentHim.template = "insabhi_custom_website.TreatmentHim";

whenReady(() => {
    const owl_treatmentHim = document.querySelector('.treatmentHim');
    if (owl_treatmentHim) {
        mount(TreatmentHim, owl_treatmentHim, { getTemplate });
    }
});

// -------------- Modal Functions for Fullscreen Experience --------------
//
//// Show the fullscreen modal for a treatment
//window.showFullScreenModal = function(id) {
//  const modal = document.getElementById('modal-' + id);
//  if (modal) modal.style.display = 'flex';
//};
//
//// Close the fullscreen modal
//window.closeFullScreenModal = function(id) {
//  const modal = document.getElementById('modal-' + id);
//  if (modal) modal.style.display = 'none';
//};
//
//// Book Now Logic (You may customize this for booking form or redirect)
//window.bookNow = function(id) {
//  alert('Booking for ' + id + '!');
//};
//
//// Optional: View enlarged image on click
//window.viewImage = function(imageSrc) {
//  window.open(imageSrc, '_blank');
//};

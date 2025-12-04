# -*- coding: utf-8 -*-
##############################################################################
#
#    SLTECH ERP SOLUTION
#    Copyright (C) 2020-Today(www.slecherpsolution.com).
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.

##############################################################################

{
    'name': 'Insabhi Custom Website',
    'author': "SL TECH ERP SOLUTION",
    'website': "https://www.sltecherpsolution.com",
    'version': '1.0.0',
    'depends': ["base", "web", "website", "crm", "product"],
    'data': [
        'security/ir.model.access.csv',
        'view/homepage.xml',
        'view/aboutus.xml',
        'view/header_footer.xml',
        'view/contactus.xml',
        'view/careers.xml',
        'view/tenStore.xml',
        'view/serviceSelecting.xml',
        'view/addOns.xml',
        'view/giftType.xml',
        'view/voucherDelivery.xml',
        'view/treatment.xml',
        'view/treatmentHim.xml',
        'view/treatmentHer.xml',
        'view/addonss_product.xml',
        'view/giftvoucher.xml',
        'view/tenstore_product_detail.xml',
        'view/treatment_him_detail.xml',
        'view/treatment_her_detail.xml',
        'view/faq.xml',

    ],
    'assets': {
        'web.assets_frontend': [
            'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css',
            'insabhi_custom_website/static/src/xml/homepage/homepage.xml',
            'insabhi_custom_website/static/src/xml/aboutus/aboutus.xml',
            'insabhi_custom_website/static/src/xml/careers/careers.xml',
            'insabhi_custom_website/static/src/xml/contactus/contactus.xml',
            'insabhi_custom_website/static/src/xml/tenStore/tenStore.xml',
             # 'insabhi_custom_website/static/src/xml/serviceSelecting/serviceSelecting.xml',
            'insabhi_custom_website/static/src/xml/giftVoucher/giftvoucher.xml',
            # 'insabhi_custom_website/static/src/xml/addOns/addOns.xml',
            # 'insabhi_custom_website/static/src/xml/giftType/giftType.xml',
            'insabhi_custom_website/static/src/xml/treatment/treatment.xml',
            # 'insabhi_custom_website/static/src/xml/voucherDelivery/voucherDelivery.xml',
            'insabhi_custom_website/static/src/xml/treatmentHim/treatmentHim.xml',
            'insabhi_custom_website/static/src/xml/treatmentHer/treatmentHer.xml',
            'insabhi_custom_website/static/src/xml/tenstoreProductDetails/tenstore_product_detail.xml',
            'insabhi_custom_website/static/src/xml/faq/faq.xml',


            'insabhi_custom_website/static/src/scss/homepage/homepage.scss',
            'insabhi_custom_website/static/src/scss/aboutus/aboutus.scss',
            'insabhi_custom_website/static/src/scss/contactus/contact.scss',
            'insabhi_custom_website/static/src/scss/careers/careers.scss',
            'insabhi_custom_website/static/src/scss/tenStore/tenStore.scss',
            'insabhi_custom_website/static/src/scss/serviceSelecting/serviceSelecting.scss',
            'insabhi_custom_website/static/src/scss/giftVoucher/giftvoucher.scss',
            'insabhi_custom_website/static/src/scss/addOns/addOns.scss',
            'insabhi_custom_website/static/src/scss/giftType/giftType.scss',
            'insabhi_custom_website/static/src/scss/treatment/treatment.scss',
            'insabhi_custom_website/static/src/scss/voucherDelivery/voucherDelivery.scss',
            'insabhi_custom_website/static/src/scss/treatmentHim/treatmentHim.scss',
            'insabhi_custom_website/static/src/scss/treatmentHer/treatmentHer.scss',
            'insabhi_custom_website/static/src/scss/faq/faq.scss',

            # 'insabhi_custom_website/static/src/scss/addons_images/addons_images.scss',

            'insabhi_custom_website/static/src/js/homepage/homepage.js',
            'insabhi_custom_website/static/src/js/aboutus/aboutus.js',
            'insabhi_custom_website/static/src/js/contactus/contactus.js',
            'insabhi_custom_website/static/src/js/careers/careers.js',
            'insabhi_custom_website/static/src/js/tenStore/tenStore.js',
             'insabhi_custom_website/static/src/js/serviceSelecting/serviceSelecting.js',
            'insabhi_custom_website/static/src/js/giftVoucher/giftvoucher.js',
            'insabhi_custom_website/static/src/js/addOns/addOns.js',
            'insabhi_custom_website/static/src/js/giftType/giftType.js',
            'insabhi_custom_website/static/src/js/treatment/treatment.js',
            'insabhi_custom_website/static/src/js/voucherDelivery/voucherDelivery.js',
            'insabhi_custom_website/static/src/js/treatmentHim/treatmentHim.js',
            'insabhi_custom_website/static/src/js/treatmentHer/treatmentHer.js',
            'insabhi_custom_website/static/src/js/mobileDropdown/mobileDropdown.js',
            'insabhi_custom_website/static/src/js/faq/faq.js'


        ],
        'web.assets_backend': [
            'insabhi_custom_website/static/src/scss/style.css',
        ],

    },

    "qweb": [],
    "installable": True,
    "auto_install": False,
    "application": True,
    "price": 0.00,
    "currency": "EUR",
    "license": "AGPL-3",
}

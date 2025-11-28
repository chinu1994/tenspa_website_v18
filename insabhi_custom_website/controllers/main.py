from odoo import http
from odoo.http import request, route


class OwlPlayground(http.Controller):

    @http.route('/', type='http', auth='public', website=True)
    def homepage(self):
        return request.render('insabhi_custom_website.homepage')

    @http.route('/aboutus', type='http', auth='public', website=True)
    def aboutus(self):
        return request.render('insabhi_custom_website.aboutus')

    @http.route('/contactus', type='http', auth='public', website=True, post_load=True)
    def contactus(self, **kw):
        """ Render the Odoo View which contains the OWL Component """
        return request.render('insabhi_custom_website.contactus')

    @http.route('/careers', type='http', auth='public', website=True, post_load=True)
    def careers(self, **kw):
        return request.render('insabhi_custom_website.careers')

    # @http.route('/tenStore', type='http', auth='public', website=True)
    # def tenStore(self):
    #     return request.render('insabhi_custom_website.tenStore')

    @http.route('/tenStore', type='http', auth='public', website=True)
    def tenStore(self, **kw):
        # Render the listing page (cards)
        return request.render('insabhi_custom_website.tenStore')

    # New: product detail page — uses same module (no new file)
    @http.route('/tenStore/product/<string:key>', type='http', auth='public', website=True)
    def tenStore_product_detail(self, key, **kw):
        values = {
            'key': key,
        }
        return request.render('insabhi_custom_website.tenStore_product_detail', values)

    #######
    @http.route('/giftVoucher', type='http', auth='public', website=True)
    def giftVoucher(self):
        return request.render('insabhi_custom_website.giftVoucher')

    @http.route('/serviceSelecting', type='http', auth='public', website=True)
    def serviceSelecting(self):
        return request.render('insabhi_custom_website.serviceSelecting')

    @http.route('/addOns', type='http', auth='public', website=True)
    def addOns(self):
        return request.render('insabhi_custom_website.addOns')

    @http.route('/giftType', type='http', auth='public', website=True)
    def giftType(self):
        return request.render('insabhi_custom_website.giftType')

    @http.route('/treatment', type='http', auth='public', website=True)
    def treatment(self):
        return request.render('insabhi_custom_website.treatment')

    @http.route('/voucherDelivery', type='http', auth='public', website=True)
    def voucherDelivery(self):
        return request.render('insabhi_custom_website.voucherDelivery')

    @http.route('/treatmentHim', type='http', auth='public', website=True)
    def treatmentHim(self):
        return request.render('insabhi_custom_website.treatmentHim')

    @http.route('/treatmentHer', type='http', auth='public', website=True)
    def treatmentHer(self):
        return request.render('insabhi_custom_website.treatmentHer')

    # @http.route('/ten-products', type='http', auth='public', website=True)
    # def ten_products_dynamic(self):
    #     products = request.env['ten.product.card'].sudo().search([('active', '=', True)], order='sequence')
    #     return request.render('insabhi_custom_website.dynamic_products_list', {'products': products})

    @http.route(['/ten_products_dynamic', '/ten_products_dynamic/page'], type='http', auth='public', website=True)
    def ten_products_dynamic(self, **kw):
        products = request.env['ten.product.card'].sudo().search(
            [('is_addon', '=', True), ('active', '=', True)],
            order='sequence asc, id asc'
        )
        return request.render('insabhi_custom_website.dynamic_products_list', {
            'products': products
        })


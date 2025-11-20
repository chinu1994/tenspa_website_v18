from odoo import models, fields

class TenProductCard(models.Model):
    _name = "ten.product.card"
    _description = "Ten Spa Product Cards"
    _order = "sequence asc"

    name = fields.Char("Product Name", required=True)
    subtitle = fields.Char("Subtitle")
    price = fields.Float("Price", required=True)

    tag = fields.Selection([
        ('new', 'New Addition'),
        ('beloved', 'Beloved Formulation'),
    ], string="Tag", default='new')

    size_option_ids = fields.Many2many(
        "ten.product.size",
        string="Size Options"
    )

    image = fields.Binary("Product Image", required=True)
    sequence = fields.Integer("Sequence", default=10)
    active = fields.Boolean("Active", default=True)


class TenProductSize(models.Model):
    _name = "ten.product.size"
    _description = "Ten Spa Product Sizes"

    name = fields.Char("Size", required=True)

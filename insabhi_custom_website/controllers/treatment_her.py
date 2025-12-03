from odoo import http
from odoo.http import request


class TreatmentHerController(http.Controller):

    @http.route('/treatmentHer/<string:slug>', type='http', auth='public', website=True)
    def TreatmentHer(self, slug, **kwargs):
        treatments = {
            "aromatherapy-massage": {
                "name": "Aromatherapy Massage ",
                "image": "/insabhi_custom_website/static/src/image/herTreat2.jpg",
                "ideal_for": "Deep relaxation, stress relief, post-travel recovery",
                "oil_type": "Calming essential oils",
                "duration": "90 or 120 minutes",
                "pressure": "Light to medium",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "This deeply relaxing massage promotes overall well-being, relieves stress, "
                    "and helps reduce jet lag—making it ideal after long periods of travel. "
                    "Specially selected aromatherapy oils, tailored to your needs, address concerns "
                    "such as sleeplessness, stress overload, anxiety, and muscle soreness. "
                    "Incorporating hot stones enhances absorption and creates a rejuvenating "
                    "and energizing experience."
                ),
                "what_to_expect": (
                    "Warm essential oils are gently massaged into the skin, activating your senses "
                    "and promoting relaxation. Depending on the treatment, the oils may be "
                    "massaged into your hands, feet, or entire body, using smooth, flowing "
                    "techniques to instill a profound sense of calm and balance."
                ),
            },

            "foot-reflexology": {
                "name": "Foot Reflexology",
                "image": "/insabhi_custom_website/static/src/image/treat1.jpg",
                "ideal_for": "Improving circulation, stress relief, digestive support",
                "oil_type": "No oil or light aromatic oils",
                "duration": "60 minutes",
                "pressure": "Medium to strong",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Also known as zone therapy, foot reflexology is an ancient practice rooted "
                    "in traditional Chinese medicine with a history spanning nearly 2,000 years. "
                    "This treatment applies pressure to specific points on the feet to stimulate "
                    "blood circulation, alleviate stress, aid digestion, and promote overall health. "
                    "It is widely believed to have therapeutic and healing properties."
                ),
                "what_to_expect": (
                    "During a reflexology session, precise pressure is applied to specific areas of "
                    "the foot believed to correspond with organs and systems throughout the body. "
                    "This technique encourages relaxation, alleviates stress, and supports the "
                    "body’s natural healing processes, leaving you feeling balanced and revitalized."
                ),
            },

            "swedish-massage": {
                "name": "Swedish Massage",
                "image": "/insabhi_custom_website/static/src/image/swedish12.webp",
                "ideal_for": "Muscle tension relief and overall relaxation",
                "oil_type": "Light aromatic oils",
                "duration": "60, 90, or 120 minutes",
                "pressure": "Light to medium",
                "addon": "Aircups / Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Also known as the classic massage, Swedish massage originates from Sweden and is "
                    "widely practiced across Europe. This soothing treatment uses soft to medium "
                    "pressure without stretching techniques, making it perfect for relaxation and "
                    "stress relief. By easing tension and promoting muscle relaxation, it can also "
                    "improve posture by preventing muscles from overcompensating due to physical stress."
                ),
                "what_to_expect": (
                    "The technique combines long, kneading strokes with rhythmic tapping and gentle "
                    "joint movements. Targeting the uppermost muscle layers, Swedish massage is "
                    "designed to relieve tension, enhance circulation, and leave you feeling relaxed "
                    "and rejuvenated."
                ),
            },

            "indonesian-balinese-massage": {
                "name": "Indonesian (Balinese) Massage",
                "image": "/insabhi_custom_website/static/src/image/herTreat1.jpg",
                "ideal_for": "Stress relief, circulation boost, detoxification",
                "oil_type": "Light aromatic oils",
                "duration": "60, 90, or 120 minutes",
                "pressure": "Medium to strong",
                "addon": "Aircups / Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Originating from Indonesia, this traditional massage blends Balinese techniques "
                    "with medium to strong pressure and gentle stretching. Known for its holistic "
                    "approach, Balinese massage reduces stress, stimulates blood circulation, "
                    "alleviates muscle strain, detoxifies the body, and nourishes the skin for a "
                    "radiant glow."
                ),
                "what_to_expect": (
                    "The massage incorporates long, flowing palm strokes, kneading, and precise "
                    "thumb pressure to create an authentic and deeply therapeutic experience. "
                    "With its dynamic movement techniques, Balinese massage leaves you feeling "
                    "both relaxed and re‑energized."
                ),
            },

            "deep-tissue-sports-massage": {
                "name": "Deep Tissue Massage / Sports Massage",
                "image": "/insabhi_custom_website/static/src/image/deep.jpg",
                "ideal_for": "Muscle pain relief after intense physical activity",
                "oil_type": "Light aromatic oils",
                "duration": "60, 90, or 120 minutes",
                "pressure": "Strong",
                "addon": "Aircups / Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Deep Tissue/Sports Massage is designed for those seeking relief from muscle pain "
                    "and tension, especially after intense physical activity or exercise. This "
                    "treatment uses deep pressure combined with stretching techniques to improve "
                    "flexibility, promote recovery, and address muscle‑related issues."
                ),
                "what_to_expect": (
                    "During a Deep Tissue Massage, the therapist applies slow, deliberate strokes and "
                    "firm pressure to target the deepest layers of muscles and connective tissues, "
                    "alleviating tension and soreness. Sports Massage focuses on reducing pain, "
                    "improving circulation, and releasing muscle tension while stimulating the "
                    "production of endorphins."
                ),
            },

            "thai-massage": {
                "name": " Warrior Thai Massage (Therapeutic & Recovery)",
                "image": "/insabhi_custom_website/static/src/image/thai.jpg",
                "ideal_for": " Muscle recovery, improving flexibility, pain relief, stress reduction, and overall body ",
                "oil_type": "No oil",
                "duration": "60 or 90 or 120 minutes",
                "pressure": "Medium to strong",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Warrior Thai Massage is a therapeutic bodywork technique that blends pressure and compression"
                    "with deep, assisted stretches. Rooted in traditional Thai practices, this massage focuses on "
                    "releasing muscle tension, enhancing flexibility, and restoring the body’s natural energy flow."
                    "It is particularly beneficial for active individuals or anyone seeking recovery and relaxation after physical exertion."

                ),
                "what_to_expect": (
                    "During the session, the therapist uses their hands, palms, and body weight to apply"
                    "firm pressure and perform guided stretching movements. These dynamic techniques improve"
                    "joint mobility, ease muscle tightness, and promote a sense of balance and renewal. "
                    "The experience is both therapeutic and deeply revitalizing, leaving you energized yet relaxed"
                ),
            },

            "back-neck-shoulder-head": {
                "name": "Back, Neck, Shoulder, and Head Massage (Therapeutic & Recovery)",
                "image": "/insabhi_custom_website/static/src/image/back.jpg",
                "ideal_for": (
                    "Relieving muscle tightness, reducing headaches and neck pain, releasing stress, "
                    "and promoting overall relaxation"
                ),
                "oil_type": "Light aromatic oils",
                "duration": "30 or 60 minutes",
                "pressure": "Gentle to firm",
                "addon": "Aircups / Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Back, Neck, Shoulder, and Head Massage is a targeted therapeutic session focusing "
                    "on the body’s most common areas of tension. By applying gentle to firm pressure, "
                    "this treatment helps release stiffness, ease pain, and restore balance."
                ),
                "what_to_expect": (
                    "During the session, the therapist concentrates on the back, neck, shoulders, and head "
                    "using a combination of soothing strokes and firm pressure techniques. This approach "
                    "improves blood circulation, melts away tightness, and promotes deep relaxation, "
                    "leaving you refreshed and light."
                ),
            },

            "aircups-30min": {
                "name": "30mins Aircups",
                "image": "/insabhi_custom_website/static/src/image/gift4.jpg",
                "ideal_for": (
                    "Stimulating blood circulation, relieving muscle tension, reducing inflammation, "
                    "detoxifying the body, and supporting natural healing"
                ),
                "oil_type": "Light aromatic oils",
                "duration": "30 minutes",
                "pressure": "Gentle to medium (with suction)",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Aircups Therapy is a 30‑minute targeted back massage combined with gentle suction "
                    "cup techniques to encourage blood flow and release muscle tension. This treatment "
                    "is designed to promote faster recovery, reduce inflammation, and support the body’s "
                    "natural detoxification and healing process."
                ),
                "what_to_expect": (
                    "During the session, the therapist applies suction cups along the back in combination "
                    "with massage techniques. The cups create a gentle vacuum effect that increases "
                    "circulation, helps muscles relax, and encourages the repair of cells, leaving you "
                    "with a lighter, refreshed feeling."
                ),
            },



            "marbaya-nights": {
                "name": "Marbaya Nights (120 Minutes)",
                "image": "/insabhi_custom_website/static/src/image/gift3.jpg",
                "category": "Rituals (Luxury Packages)",
                "ideal_for": "Body detox, skin revitalization, and deep relaxation",
                "duration": "120 minutes",
                "highlights": (
                    "Thalasso steam session, revitalizing exfoliation, nourishing body wrap, and "
                    "a massage of your choice."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Escape to the luxury of Marbaya Nights with this 120-minute rejuvenating ritual. "
                    "Begin with a Thalasso steam to detoxify and refresh, followed by a revitalizing "
                    "scrub and nourishing mud wrap to restore your skin’s natural glow. Conclude with "
                    "a relaxing massage of your choice, leaving you feeling renewed and balanced."
                ),
                "what_to_expect": "",
            },



            # ==========================================
            # DISTINGUISHED GROOMING FOR Women
            # ==========================================

            "mani-pedi-basic": {
                "name": "Spoil Me Mani & Pedi",
                "image": "/insabhi_custom_website/static/src/image/treat4.jpg",  # update path
                "category": "Distinguished Grooming for Gentlemen",
                "ideal_for": (
                    "Maintaining neat and polished nails, smooth skin, overall hand & foot health, "
                    "enhancing style, and promoting hygiene and confidence"
                ),
                "duration": "60 minutes",
                "highlights": "",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Mani & Pedi Usual is a complete grooming session designed to refresh your hands and "
                    "feet with professional care. It focuses on nail health, skin smoothness, and a polished, "
                    "refined appearance. Perfect for the modern gentleman who values style, confidence, and "
                    "personal hygiene."
                ),
                "what_to_expect": (
                    "During this 60-minute session, the therapist trims, shapes, and cares for the cuticles, "
                    "followed by exfoliation and buffing for a smooth finish. You may choose between polish "
                    "application or a natural shine buff, leaving your hands and feet refreshed and impeccably "
                    "groomed."
                ),
            },

            "mani-pedi-usual": {
                "name": "Elegant Mani & Pedi",
                "image": "/insabhi_custom_website/static/src/image/treat5.jpg",  # update path
                "category": "Distinguished Grooming for Gentlemen",
                "ideal_for": (
                    "Maintaining neat and polished nails, smooth skin, overall hand & foot health, "
                    "enhancing style, and promoting hygiene and confidence"
                ),
                "duration": "90 minutes",
                "highlights": "",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Mani & Pedi Usual is a complete grooming session designed to refresh your hands and "
                    "feet with professional care. It focuses on nail health, skin smoothness, and a polished, "
                    "refined appearance. Perfect for the modern gentleman who values style, confidence, and "
                    "personal hygiene."
                ),
                "what_to_expect": (
                    "During this 60-minute session, the therapist trims, shapes, and cares for the cuticles, "
                    "followed by exfoliation and buffing for a smooth finish. You may choose between polish "
                    "application or a natural shine buff, leaving your hands and feet refreshed and impeccably "
                    "groomed."
                ),
            },

            "mani-pedi-super": {
                "name": "Basic Mani & Pedi",
                "image": "/insabhi_custom_website/static/src/image/treat3.jpg",  # update path
                "category": "Distinguished Grooming for Gentlemen",
                "ideal_for": (
                    "Maintaining neat and polished nails, smooth skin, overall hand & foot health, "
                    "enhancing style, and promoting hygiene and confidence"
                ),
                "duration": "90 minutes",
                "highlights": "",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Mani & Pedi Super is an extended luxury version of the service, providing deeper care "
                    "and more time to perfect your hands and feet. It ensures neat, well-groomed nails while "
                    "adding extra focus on relaxation and revitalization."
                ),
                "what_to_expect": (
                    "In this 90-minute session, the therapist offers comprehensive nail care by trimming, "
                    "shaping, and treating cuticles, followed by thorough exfoliation and buffing. Additional "
                    "time allows for extended massage and pampering, ensuring softer skin and a polished, "
                    "revitalized look."
                ),
            },


        }

        treatment = treatments.get(slug)
        if not treatment:
            return request.not_found()

        return request.render(
            "insabhi_custom_website.TreatmentHer",
            {"treatment": treatment}
        )

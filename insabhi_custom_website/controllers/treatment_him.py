from odoo import http
from odoo.http import request


class TreatmentHimController(http.Controller):

    @http.route('/treatmentHim/<string:slug>', type='http', auth='public', website=True)
    def TreatmentHim(self, slug, **kwargs):
        treatments = {
            "aromatherapy-massage": {
                "name": "Aromatherapy Massage",
                "image": "/insabhi_custom_website/static/src/image/treat9.webp",
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
                "image": "/insabhi_custom_website/static/src/image/treat15.jpeg",
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
                "image": "/insabhi_custom_website/static/src/image/treat12.webp",
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
                "image": "/insabhi_custom_website/static/src/image/treat13.jpeg",
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
                "image": "/insabhi_custom_website/static/src/image/treat11.webp",
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
                "name": "Thai Massage",
                "image": "/insabhi_custom_website/static/src/image/treat8.webp",
                "ideal_for": "Flexibility improvement, muscle tension relief, overall health",
                "oil_type": "No oil",
                "duration": "60 or 90 minutes",
                "pressure": "Strong",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Originating from traditional Thai medicine, Thai Massage is a therapeutic practice "
                    "that focuses on the body’s energy pathways, known as sen. Unlike conventional "
                    "massages, it incorporates dynamic stretching movements to enhance flexibility, "
                    "release muscle tension, and promote overall well‑being."
                ),
                "what_to_expect": (
                    "Thai Massage involves a full‑body sequence of movements resembling assisted yoga "
                    "stretches. Your therapist will use their palms and fingers to apply firm pressure, "
                    "combined with techniques like compression, acupressure, and passive stretching. "
                    "This unique approach leaves you feeling balanced, flexible, and deeply relaxed."
                ),
            },

            "back-neck-shoulder-head": {
                "name": "Back, Neck, Shoulder, and Head Massage (Therapeutic & Recovery)",
                "image": "/insabhi_custom_website/static/src/image/treat7.jpg",
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


            "sunset-boulevard-ritual": {
                "name": "Sunset Boulevard Ritual",
                "image": "/insabhi_custom_website/static/src/image/treat13.webp",
                "category": "Rituals (Luxury Packages)",
                "ideal_for": "Deep relaxation, skin renewal, and body revitalization",
                "duration": "120 minutes",
                "highlights": (
                    "Steam session, double exfoliation, and a 60-minute deep massage that brings a "
                    "sense of comfort and balance."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Indulge in the luxurious Sunset Boulevard Ritual, a 120-minute experience "
                    "designed to rejuvenate and relax. Begin with a soothing steam session to "
                    "detoxify, followed by a double-scrub process to exfoliate and refresh your "
                    "skin. Complete your journey with a deeply relaxing 60-minute massage, leaving "
                    "you feeling restored, balanced, and utterly pampered."
                ),
                "what_to_expect": "",
            },

            "marbaya-nights": {
                "name": "Marbaya Nights (120 Minutes)",
                "image": "/insabhi_custom_website/static/src/image/treat21.webp",
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

            "hollywood-grooming": {
                "name": "Hollywood Grooming (180 Minutes)",
                "image": "/insabhi_custom_website/static/src/image/treat16.webp",
                "category": "Rituals (Luxury Packages)",
                "ideal_for": "Skin rejuvenation, body detox, nail care and deep relaxation",
                "duration": "180 minutes",
                "highlights": (
                    "Steam session, double exfoliation, deep relaxation, and manicure pedicure for "
                    "a complete look."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Experience the ultimate in self-care with our Hollywood Grooming ritual, a "
                    "180-minute session designed to leave you polished and refreshed. Begin with a "
                    "detoxifying steam, followed by a double scrub process and nourishing cream "
                    "application. Enjoy a deep relaxation massage, then complete your transformation "
                    "with a meticulous manicure and pedicure."
                ),
                "what_to_expect": "",
            },

            "walk-in-shaheed-park": {
                "name": "Walk In Shaheed Park (120 Minutes)",
                "image": "/insabhi_custom_website/static/src/image/mass5.png",
                "category": "Rituals (Luxury Packages)",
                "ideal_for": "Energizing and skin renewal",
                "duration": "120 minutes",
                "highlights": (
                    "Revitalizing exfoliation, nourishing body wrap, and a calming massage for "
                    "restored vitality."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Take a restorative journey with our Walk in Shaheed Park ritual, a 120-minute "
                    "deluxe experience inspired by the serene beauty of Kuwait’s iconic park. Begin "
                    "with an invigorating scrub to refresh your skin, followed by nourishing mud wraps "
                    "that restore and rejuvenate. Complete your ritual with a soothing massage of "
                    "your choice."
                ),
                "what_to_expect": "",
            },

            "self-love-package": {
                "name": "Self-Love Package",
                "image": "/insabhi_custom_website/static/src/image/treat20.webp",
                "category": "Rituals (Luxury Packages)",
                "ideal_for": (
                    "A complete body relaxation experience, skin detoxification, and facial rejuvenation"
                ),
                "duration": "4 hours",
                "highlights": (
                    "Manicure & pedicure, traditional bath, full-body massage, and deep facial cleansing."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Indulge in the ultimate self-care with our Self-Love Package. This luxurious "
                    "4-hour experience begins with meticulous grooming of the hands and feet, followed "
                    "by a revitalizing traditional bath that refreshes the senses and restores vitality. "
                    "Enjoy a full-body massage of your choice, then finish with a deep facial cleansing "
                    "that leaves your skin radiant and your body fully revitalized."
                ),
                "what_to_expect": "",
            },

            # ================================
            # SKIN CONDITIONING TREATMENTS
            # ================================

            "traditional-hammam": {
                "name": "Traditional (60 Minutes)",
                "image": "/insabhi_custom_website/static/src/image/treat18.webp",
                # apni actual image path se replace karo
                "category": "Skin Conditioning Treatments",
                "ideal_for": "Tired skin",
                "duration": "60 minutes",
                "highlights": (
                    "Soothing steam session, nourishing olive oil mask, and exfoliation with a kessa mitt for softness and glow."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Experience the essence of traditional Moroccan luxury. This rejuvenating 60-minute ritual begins with "
                    "a soothing steam session, followed by the application of an olive body mask to nourish and detoxify "
                    "the skin. Gentle exfoliation reveals a smoother, brighter complexion, while a hydrating lotion seals "
                    "in moisture, leaving your skin soft, radiant, and refreshed."
                ),
                "what_to_expect": "",
            },

            "mud-wrap": {
                "name": "Mud Wrap (60 Minutes)",
                "image": "/insabhi_custom_website/static/src/image/treat21.webp",  # apni image
                "category": "Skin Conditioning Treatments",
                "ideal_for": "Fatigued and stressed skin",
                "duration": "60 minutes",
                "highlights": (
                    "Inspired by the magical sunset of Santorini; includes therapeutic steam, exfoliation, and body wrap with nourishing mud."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Escape to the blissful Mud Wrap. This 60-minute indulgence begins with a Thalasso conditioning steam "
                    "to detoxify and invigorate, followed by a rejuvenating body scrub and a nourishing mud wrap to replenish "
                    "and restore your skin. The experience concludes with a hydrating body gel application, leaving your skin "
                    "deeply moisturized and glowing with vitality."
                ),
                "what_to_expect": "",
            },

            "double-scrub": {
                "name": "Double Scrub (60 Minutes)",
                "image": "/insabhi_custom_website/static/src/image/treat20.webp",  # apni image
                "category": "Skin Conditioning Treatments",
                "ideal_for": "Dull, tired skin",
                "duration": "60 minutes",
                "highlights": (
                    "Therapeutic steam, dual exfoliation, and deep hydration gel for radiant skin."
                ),
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "Indulge in this sophisticated ritual and unveil your ultimate glow. This luxurious 60-minute experience "
                    "begins with a Thalasso steam session to detoxify and refresh, followed by a double-scrub process that "
                    "gently exfoliates and smooths your skin. The treatment concludes with the application of a hydrating body "
                    "gel, leaving your skin nourished, revitalized, and luminous."
                ),
                "what_to_expect": "",
            },

            # ==========================================
            # DISTINGUISHED GROOMING FOR GENTLEMEN
            # ==========================================

            "mani-pedi-usual": {
                "name": "Mani & Pedi Usual",
                "image": "",  # update path
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

            "mani-pedi-super": {
                "name": "Mani & Pedi Super",
                "image": "/insabhi_custom_website/static/src/image/treat10.webp",  # update path
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


            # facial services

            "combination-anti-aging-facial": {
                "name": "Combination & Anti-Aging Facial",
                "image": "",  # update path
                "category": "Facial Services",
                "ideal_for": (
                    "Men’s skincare, anti-aging, hydration, skin rejuvenation, and enhancing a youthful, "
                    "polished appearance"
                ),
                "duration": "60 minutes",
                "highlights": "",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Combination & Anti-Aging Facial is a luxurious session crafted to target visible signs "
                    "of aging, restore radiance, and rejuvenate men’s skin. Using advanced techniques and "
                    "premium products, this treatment deeply nourishes and revitalizes, leaving the complexion "
                    "firm, smooth, and refreshed."
                ),
                "what_to_expect": (
                    "During this 60-minute experience, the therapist applies professional-grade products and "
                    "techniques focused on cleansing, hydration, and anti-aging care. Expect tailored "
                    "treatments to minimize fine lines, combat dryness, and restore youthful vitality."
                ),
            },

            "express-facial": {
                "name": "Express Facial",
                "image": "/insabhi_custom_website/static/src/image/treat2.webp",  # update path
                "category": "Facial Services",
                "ideal_for": (
                    "Men’s skincare, hydration, quick rejuvenation, and maintaining a fresh, healthy appearance "
                    "on the go"
                ),
                "duration": "30 minutes",
                "highlights": "",
                "addon": "Oxygen Mask / Red Light Therapy",
                "what_to_expect_title": "What to Expect",
                "description": (
                    "The Express Facial is a quick yet effective treatment designed for busy gentlemen who want "
                    "maximum results in minimal time. It refreshes, hydrates, and revitalizes the skin, making "
                    "it ideal for last-minute grooming or maintenance between full treatments."
                ),
                "what_to_expect": (
                    "In just 30 minutes, the therapist performs a tailored facial focusing on cleansing, "
                    "hydration, and rejuvenation. Advanced products and techniques deliver immediate freshness "
                    "and radiance, leaving your skin feeling smooth, energized, and well cared for."
                ),
            },

        }

        treatment = treatments.get(slug)
        if not treatment:
            return request.not_found()

        return request.render(
            "insabhi_custom_website.TreatmentHim",
            {"treatment": treatment}
        )

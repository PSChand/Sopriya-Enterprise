# SOPRIYA ENTERPRISE Website

Static corporate website built with HTML5, CSS3 and JavaScript.

## Structure
- `index.html`, `about.html`, `products.html`, `services.html`, `contact.html`
- `css/styles.css`, `js/main.js`

## Hosting & Deployment
1. Upload the entire folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, Apache/Nginx).
2. Ensure `css/`, `js/` paths resolve relative to HTML files.
3. Replace placeholder contact details (phone, email, WhatsApp number in `contact.html` and `js/main.js`) with actual business info.
4. For backend form handling, replace the WhatsApp redirect in `js/main.js` with a POST to your API endpoint (Formspree, Netlify Forms, or custom backend).

## Customisation
- Brand colours defined in `:root` of `css/styles.css`.
- Images are loaded from Unsplash; replace with owned assets for production.

import emailjs from 'emailjs-com';

// Sends an order email using EmailJS. Does NOT execute on import.

// Exports a single async function sendOrderEmail(orderSummary, cart)

export async function sendOrderEmail(orderSummary = {}, cart = []) {
    if (!orderSummary || !orderSummary.name || !orderSummary.email) {
        throw new Error('orderSummary with name and email is required');
    }

    const generateOrderId = () => {
        const lastId = Number(localStorage.getItem('lastOrderId') || 0);
        const newId = lastId + 1;
        localStorage.setItem('lastOrderId', String(newId));
        return `ORD-${newId}`;
    };



const itemsHTML = cart.map(item => `
  <tr>
    <td>${item.name}</td>
    <td>${item.quantity}</td>
    <td>$${item.price}</td>
  </tr>
`
).join(""); // join all rows into one string
const total = (cart || []).reduce((s, item) => s + item.price * item.quantity, 0);

    const templateParams = {
        order_id: generateOrderId(),
        customer_name: orderSummary.name,
        customer_email: orderSummary.email,
        order_items: itemsHTML,
        total: total.toFixed(2),
        shipping_address: orderSummary.address,
        owner_email: 'daniellamarachi16@gmail.com'
    };

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

    // Debug: show values in browser console (remove in production)
    console.debug('EmailJS config', { serviceId, templateId, publicKey });
    


    if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not configured properly.');
    }

    // Ensure library is initialized (works with @emailjs/browser or emailjs-com)
    try {
        if (typeof emailjs.init === 'function') {
            emailjs.init(publicKey);
        }
    } catch (initErr) {
        console.warn('emailjs.init failed', initErr);q
    }

    try {
        // Return the promise so callers can await and catch network/auth errors
        return await emailjs.send(serviceId, templateId, templateParams, publicKey);
    } catch (err) {
        console.error('EmailJS send error', err);
        throw err; // rethrow so UI can show error
    }
}




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



    const items = (cart || []).map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('\n');
    const total = (cart || []).reduce((s, item) => s + item.price * item.quantity, 0);

    const templateParams = {
        order_id: generateOrderId(),
        customer_name: orderSummary.name,
        customer_email: orderSummary.email,
        order_items: items,
        total: total.toFixed(2),
        shipping_address: orderSummary.address || '',
    };

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

    if (!serviceId || !templateId || !publicKey) {
        // Fail fast with descriptive error to help debugging in dev
        throw new Error('EmailJS environment variables are not configured properly.');
    }

    // Return the promise so callers can await and handle errors
    return emailjs.send(serviceId, templateId, templateParams, publicKey);
}



// src/contact-info.js

export const submitContactInfo = async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/xlgrvnlq', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Message sent successfully!');
      return true;
    } else {
      console.error('Form submission failed.');
      return false;
    }
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};

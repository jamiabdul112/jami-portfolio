import React from 'react'
import './contact.css'
import { useState } from 'react';
import { submitContactInfo } from './components/contact-info';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await submitContactInfo(formData);
        setStatus(success ? 'Message sent!' : 'Something went wrong.');
        setFormData({ name: '', email: '', phoneNo:'', message: '' });
    };
  return (
    <>
    <div id='hire'></div>
    <div className='over-contact'>
    <div className='contact-page'>
        <div className='contact-wrapper'>
            <div className='contact-left' >
                <img src='contact-logo.png' data-aos="fade-up" alt='logo'></img>
                <p className='contact-p' data-aos="fade-up">Seeking internship experience <span className='highlight-p'>Ready to learn and contribute.</span></p>
            </div>
            <div className='contact-right' data-aos="fade-up">
                <form onSubmit={handleSubmit}>
                    <div className='form-box' >
                    <div>
                    <label className='pink-label'>Name</label>
                    <input
                        type= "text"
                        name="name"
                        placeholder = "MD Jami" 
                        className='input-box'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    ></input>
                    </div>
                    <div>
                    <label className='yellow-label'>Your Email</label>
                    <input 
                        type= "email" 
                        name="email"
                        placeholder = "jamiabdul112@gmail" 
                        className='input-box'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    ></input>
                    </div>
                    <div>
                    <label className='yellow-label violet-label'>Phone</label>
                    <input 
                        type= "tel" 
                        name="phoneNo"
                        placeholder = "+91 9876543210" 
                        className='input-box'
                        value={formData.phoneNo}
                        onChange={handleChange}
                        required
                    ></input>
                    </div>
                    <div>
                    <label className='blue-label'>About Project</label>
                    <input
                        type= "text"
                        name="message"
                        placeholder = "Lets discuss about you..."
                        className='input-box'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></input>
                    </div>
                    </div>
                    
                    <button type='submit'>Send Here</button>
                    {status && <p>{status}</p>}
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Contact
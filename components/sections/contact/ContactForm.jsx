'use client';

import { useState } from 'react';

const accessKey = process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY;
const accessUrl = process.env.NEXT_PUBLIC_WEB3_ACCESS_URL;

export default function ContactForm() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');

    if (!accessKey) {
      setResult('');
      setTimeout(() => {
        setError('Access Key is not set.');
      }, 50);
      return;
    }

    const formData = new FormData(event.target);

    formData.append('access_key', accessKey);

    const response = await fetch(accessUrl, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setError('');
      setResult('Form Submitted Successfully');
      event.target.reset();
      setTimeout(() => {
        setResult('');
      }, 5000);
    } else {
      console.log('Error', data);
      setError(data.message);
    }
  };

  return (
    <div className='form-inner'>
      {result.length > 0 && <span className={'text-success'}>{result}</span>}
      {error.length > 0 && <span className={'text-danger'}>{error}</span>}
      <form id='contact-form' onSubmit={onSubmit}>
        <div className='row clearfix'>
          <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
            <label>
              Name <span>*</span>
            </label>
            <input type='text' name='username' placeholder='' required />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
            <label>
              Phone <span>*</span>
            </label>
            <input type='text' name='phone' placeholder='' required />
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
            <label>
              Email Address <span>*</span>
            </label>
            <input type='email' name='email' placeholder='' required />
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
            <label>
              Subject <span>*</span>
            </label>
            <input type='text' name='subject' placeholder='' required />
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
            <label>
              Write Message <span>*</span>
            </label>
            <textarea name='message' placeholder='' required></textarea>
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12 form-group message-btn'>
            <button
              type='submit'
              className='theme-btn btn-one'
              name='submit-form'>
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

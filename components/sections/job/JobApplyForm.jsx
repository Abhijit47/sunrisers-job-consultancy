'use client';

import { useState } from 'react';

const accessKey = process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY;
const accessUrl = process.env.NEXT_PUBLIC_WEB3_ACCESS_URL;

export default function JobApplyForm() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    if (!accessKey) {
      setResult('');
      setTimeout(() => {
        setResult('Access Key is not set.');
      }, 50);
      return;
    }

    console.log(Object.fromEntries(formData.entries()));

    formData.append('access_key', accessKey);

    // remove the file from formData before sending
    formData.delete('file');

    const res = await fetch(accessUrl, {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      setResult(res.message);
      event.target.reset();
      setTimeout(() => {
        setResult('');
      }, 5000);
    } else {
      console.log('Error', res);
      setResult(res.message);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      {result && <p className='text-center mb-3'>{result}</p>}
      <div className='row clearfix'>
        <div className='col-lg-6 col-md-12 col-sm-12 form-column'>
          <div className='form-inner'>
            <div className='title-box'>
              <div className='icon-box'>
                <i className='icon-39'></i>
              </div>
              <h3>Basic Infomation</h3>
              <p>Please fill out your contact person details here.</p>
            </div>
            <div className='row clearfix'>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input
                  type='text'
                  name='fname'
                  placeholder='First Name'
                  required
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input
                  type='text'
                  name='lname'
                  placeholder='Last Name'
                  required
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input type='email' name='email' placeholder='Email' required />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input type='text' name='phone' placeholder='Phone' required />
              </div>
              <div className='col-lg-12 col-md-12 col-sm-12 form-group'>
                <input
                  type='text'
                  name='address'
                  placeholder='Address'
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 form-column'>
          <div className='form-inner'>
            <div className='title-box'>
              <div className='icon-box'>
                <i className='icon-40'></i>
              </div>
              <h3>Qualification</h3>
              <p>Please fill out your contact person details here.</p>
            </div>
            <div className='row clearfix'>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input
                  type='text'
                  name='education'
                  placeholder='Education'
                  required
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <div className='select-box'>
                  <select className='wide'>
                    <option data-display='Skills'>Skills</option>
                    <option value='1'>Executive</option>
                    <option value='2'>Training</option>
                    <option value='3'>Career</option>
                    <option value='4'>Payroll</option>
                  </select>
                </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input
                  type='text'
                  name='experience'
                  placeholder='Experience'
                  required
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <input
                  type='text'
                  name='qualities'
                  placeholder='Qualities'
                  required
                />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12 form-group'>
                <div className='upload-box'>
                  <div className='icon-box'>
                    <img src='assets/images/icons/icon-24.png' alt='' />
                  </div>
                  <input
                    name='file'
                    id='attachment'
                    multiple={true}
                    type='file'
                  />
                  {/* <input type="file" name="attachment" /> */}
                  <button type='button'>Upload Photo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-12 col-md-12 col-sm-12 form-column'>
          <div className='form-inner'>
            <div className='form-group'>
              <textarea
                name='message'
                placeholder='Additional Information...'></textarea>
            </div>
            <div className='form-group message-btn centred'>
              <button type='submit' className='theme-btn btn-one'>
                Apply For Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/sections/contact/ContactForm';
import Subscribe from '@/components/sections/home2/Subscribe';
import Link from 'next/link';

export default function Contact_Page() {
  return (
    <div className='boxed_wrapper'>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle='Contact us'>
        <section className='contact-section pt_110 pb_30'>
          <div className='auto-container'>
            <div className='inner-container'>
              <div className='row clearfix'>
                <div className='col-lg-4 col-md-12 col-sm-12 info-column'>
                  <div className='info-box'>
                    <h3>Contact Information</h3>
                    <div className='single-item'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-27.png' alt='' />
                      </div>
                      <h4>Corporate Office</h4>
                      <p>
                        #3124, 2nd Floor , Near ESI Hospital, Indiranagar Double
                        Road, Bangalore - 560 038.
                      </p>
                    </div>
                    {/* <div className='single-item'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-27.png' alt='' />
                      </div>
                      <h4>Main Warehouse</h4>
                      <p>10445 Brisbane Cir. Shiloh, Australia 81063</p>
                    </div> */}
                    <div className='single-item'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-28.png' alt='' />
                      </div>
                      <h4>Email Address</h4>
                      <p>
                        {/* <Link href='mailto:support@example.com'>
                          support@example.com
                        </Link> */}
                        {/* <br /> */}
                        <Link href='mailto:sunrisersjobconsultancy@gmail.com'>
                          sunrisersjobconsultancy@gmail.com
                        </Link>
                      </p>
                    </div>
                    <div className='single-item'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-29.png' alt='' />
                      </div>
                      <h4>Phone Number</h4>
                      <p>
                        <Link href='tel:+919110632329'>+91 9110632329</Link>
                        <br />
                        <Link href='tel:+919739932329'>+91 9739932329</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-8 col-md-12 col-sm-12 content-column'>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='google-map pb_80'>
          <div className='auto-container'>
            <div className='inner-container'>
              <iframe
                title={'google-map'}
                name={'google-map'}
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s'
                height={570}
                style={{ border: 0, width: '100%' }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </section>

        <Subscribe />
      </Layout>
    </div>
  );
}

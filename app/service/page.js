import Layout from '@/components/layout/Layout';
import Subscribe from '@/components/sections/home2/Subscribe';
import Testimonial from '@/components/sections/home5/Testimonial';
import { services } from '@/constants';
import Link from 'next/link';

export default function Service_Page() {
  return (
    <div className='boxed_wrapper'>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle='Our Services'>
        <section className='service-section centred pt_110 pb_90'>
          <div className='auto-container'>
            <div className='sec-title pb_60 sec-title-animation animation-style2'>
              <span className='sub-title mb_10 title-animation'>
                What We Provide
              </span>
              <h2 className='title-animation'>
                Professional Recruitment & Staffing Solutions
              </h2>
              <p className='title-animation mt-3'>
                At <strong>Sunrisers Job Consultancy</strong>, we offer
                end-to-end{' '}
                <strong>recruitment and staffing solutions in India</strong>{' '}
                designed to connect the right talent with the right opportunity.{' '}
                <br />
                Our services are tailored to meet the hiring needs of startups,
                SMEs, and large enterprises while helping job seekers achieve
                their career goals.
              </p>
              <p className='title-animation mt-3'>
                We focus on delivering{' '}
                <strong>
                  fast, reliable, and cost-effective hiring solutions
                </strong>{' '}
                through a structured and result-driven approach.
              </p>
            </div>
            <div className='row clearfix'>
              {services.map((service) => (
                <div
                  key={service.id}
                  className='col-lg-4 col-md-6 col-sm-12 service-block'>
                  <div
                    className='service-block-one wow fadeInUp animated'
                    data-wow-delay='00ms'
                    data-wow-duration='1500ms'>
                    <div className='inner-box'>
                      <div className='image-box'>
                        <figure className='image'>
                          <Link href='#'>
                            <img
                              src='assets/images/service/service-1.jpg'
                              alt=''
                            />
                          </Link>
                        </figure>
                        <figure className='overlay-image'>
                          <Link href='#'>
                            <img
                              src='assets/images/service/service-1.jpg'
                              alt=''
                            />
                          </Link>
                        </figure>
                      </div>
                      <div className='lower-content'>
                        <h3>
                          <Link href='#'>{service.title}</Link>
                        </h3>
                        <p>{service.description}</p>
                        {/* <div className={'d-flex flex-wrap gap-2 mb-5'}>
                          {service.features.map((feature, idx) => (
                            <span
                              className='badge rounded-pill text-bg-secondary'
                              key={idx}>
                              {feature}
                            </span>
                          ))}
                        </div> */}

                        <ul className='list-group list-group-flush text-start mb-3'>
                          {service.features.map((feature, idx) => (
                            <li key={idx} className='list-group-item'>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        {/* <p>{service.info}</p> */}

                        <div className='btn-box'>
                          <Link href='#' className='theme-btn btn-one'>
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='dueal-section service-page p_relative pt_110 pb_120'>
          <div className='bg-color'></div>
          <div className='shape'>
            <div className='shape-1'></div>
            <div className='shape-2'></div>
            <div className='shape-3'></div>
            <div className='shape-4'></div>
          </div>
          <figure className='image-layer-1 p_absolute l_150 b_0'>
            <img src='assets/images/resource/women-1.png' alt='' />
          </figure>
          <figure className='image-layer-2 p_absolute r_150 b_0'>
            <img src='assets/images/resource/men-1.png' alt='' />
          </figure>
          <div className='auto-container'>
            <div className='row clearfix'>
              <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
                <div className='hiring-content align-3 mr_60'>
                  <h2>Professions Hiring</h2>
                  <p>
                    This dynamic hiring landscape presents a wealth of
                    opportunities for professionals across
                  </p>
                  <Link href='/service' className='theme-btn btn-one'>
                    Professions
                  </Link>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
                <div className='hiring-content light ml_45'>
                  <h2>Industries Hiring</h2>
                  <p>
                    The current job market is dynamic, with numerous industries
                    actively seeking new talent
                  </p>
                  <Link href='/service' className='theme-btn btn-one'>
                    Industries
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
        <div className='pb_120'></div>
        <Subscribe />
      </Layout>
    </div>
  );
}

import Layout from '@/components/layout/Layout';
import ServedIndustries from '@/components/sections/about/ServedIndustries';
import Subscribe from '@/components/sections/home2/Subscribe';
import Clients from '@/components/sections/home3/Clients';
import Testimonial3 from '@/components/sections/home3/Testimonial';
import About from '@/components/sections/home4/About';
import Link from 'next/link';

export default function About_Page() {
  return (
    <div className='boxed_wrapper'>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle='About Us'>
        <About />
        <Clients />

        <WhyChooseUs />

        <ServedIndustries />

        {/* <OurTeams /> */}

        {/* <section className='testimonial-style-two pt_120 pb_120'>
          <div
            className='pattern-layer'
            style={{
              backgroundImage: 'url(assets/images/shape/shape-17.png)',
            }}></div>
          <div className='auto-container'>
            <div className='sec-title centred pb_60 sec-title-animation animation-style2'>
              <span className='sub-title mb_10 title-animation'>
                Testimonials
              </span>
              <h2 className='title-animation'>Love From Users</h2>
            </div>
            <div className='slider-content p_relative'>
              <Swiper {...swiperOptions} className='two-item-carousel'>
                <SwiperSlide>
                  <div className='testimonial-block-two'>
                    <div className='inner-box'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-11.png' alt='' />
                      </div>
                      <div className='author-box'>
                        <figure className='thumb-box'>
                          <img
                            src='assets/images/resource/testimonial-1.png'
                            alt=''
                          />
                        </figure>
                        <h4>Evan Clement</h4>
                        <span className='designation'>HR Assistant, NFL</span>
                      </div>
                      <p>
                        Company and was impressed by the personalized approach
                        of their recruitment team. They kept me informed at
                        every stage and ensured that I had all the information I
                        needed to succeed.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='testimonial-block-two'>
                    <div className='inner-box'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-11.png' alt='' />
                      </div>
                      <div className='author-box'>
                        <figure className='thumb-box'>
                          <img
                            src='assets/images/resource/testimonial-3.png'
                            alt=''
                          />
                        </figure>
                        <h4>Maharan Depaak</h4>
                        <span className='designation'>CEO, Amaban</span>
                      </div>
                      <p>
                        Recently I went through their recruitment process with
                        Jobaway Company, and I was impressed by how the smooth
                        and efficient these were.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='testimonial-block-two'>
                    <div className='inner-box'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-11.png' alt='' />
                      </div>
                      <div className='author-box'>
                        <figure className='thumb-box'>
                          <img
                            src='assets/images/resource/testimonial-1.png'
                            alt=''
                          />
                        </figure>
                        <h4>Evan Clement</h4>
                        <span className='designation'>HR Assistant, NFL</span>
                      </div>
                      <p>
                        Company and was impressed by the personalized approach
                        of their recruitment team. They kept me informed at
                        every stage and ensured that I had all the information I
                        needed to succeed.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='testimonial-block-two'>
                    <div className='inner-box'>
                      <div className='icon-box'>
                        <img src='assets/images/icons/icon-11.png' alt='' />
                      </div>
                      <div className='author-box'>
                        <figure className='thumb-box'>
                          <img
                            src='assets/images/resource/testimonial-3.png'
                            alt=''
                          />
                        </figure>
                        <h4>Maharan Depaak</h4>
                        <span className='designation'>CEO, Amaban</span>
                      </div>
                      <p>
                        Recently I went through their recruitment process with
                        Jobaway Company, and I was impressed by how the smooth
                        and efficient these were.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className='owl-dots'>
                <div className='swiper-pagination'></div>
              </div>
            </div>
          </div>
        </section> */}
        <Testimonial3 />

        <Subscribe />
      </Layout>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section className='chooseus-section alternat-3 pt_120 pb_90'>
      <div
        className='pattern-layer'
        style={{
          backgroundImage: 'url(assets/images/shape/shape-23.png)',
        }}></div>
      <div className='auto-container'>
        <div className='sec-title light centred pb_60 sec-title-animation animation-style2'>
          <span className='sub-title mb_10 title-animation'>Why Us</span>
          <h2 className='title-animation'>Why Choose Us</h2>
        </div>
        <div className='inner-container'>
          <div className='row clearfix'>
            <div className='col-lg-4 col-md-6 col-sm-12 chooseus-block'>
              <div className='chooseus-block-one'>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <i className='icon-4'></i>
                  </div>
                  <h3>
                    <Link href='#'>Our Hiring Process</Link>
                  </h3>
                  <p>We follow a structured recruitment approach:</p>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      Understanding Client Requirements
                    </li>
                    <li className='list-group-item'>
                      Sourcing & Shortlisting Candidates
                    </li>
                    <li className='list-group-item'>Screening & Interviews</li>
                    <li className='list-group-item'>Final Selection & Offer</li>
                    <li className='list-group-item'>Post-Placement Support</li>
                  </ul>
                  <div className='link mt-3'>
                    <Link href='#'>
                      Learn More<i className='icon-7'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 chooseus-block'>
              <div className='chooseus-block-one'>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <i className='icon-5'></i>
                  </div>
                  <h3>
                    <Link href='/'>Why Sunrisers?</Link>
                  </h3>
                  <p>
                    Connecting job seekers with opportunities and businesses
                    with strong teams.
                  </p>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      Fast & Efficient Hiring Process
                    </li>
                    <li className='list-group-item'>
                      Experienced Recruitment Team
                    </li>
                    <li className='list-group-item'>
                      Wide Talent Network Across India
                    </li>
                    <li className='list-group-item'>
                      Cost-Effective Staffing Solutions
                    </li>
                    <li className='list-group-item'>
                      Support for Clients & Candidates
                    </li>
                  </ul>
                  <div className='link mt-3'>
                    <Link href='/'>
                      Learn More<i className='icon-7'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 chooseus-block'>
              <div className='chooseus-block-one'>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <i className='icon-6'></i>
                  </div>
                  <h3>
                    <Link href='/'>Our Hiring Process</Link>
                  </h3>
                  <p>We follow a structured recruitment approach:</p>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>Personalized Approach</li>
                    <li className='list-group-item'>Fast & Efficient Hiring</li>
                    <li className='list-group-item'>Wide Industry Network</li>
                    <li className='list-group-item'>Expert Guidance</li>
                    <li className='list-group-item'>Trusted by Clients</li>
                  </ul>
                  <div className='link mt-3'>
                    <Link href='/'>
                      Learn More<i className='icon-7'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OurTeams() {
  return (
    <section className='team-section z_1 centred pt_0 pb_0'>
      <div className='auto-container'>
        <div className='sec-title pb_60 sec-title-animation animation-style2'>
          <span className='sub-title mb_10 title-animation'>Our Team</span>
          <h2 className='title-animation'>Meet The Team</h2>
        </div>
        <div className='row clearfix'>
          <div className='col-lg-3 col-md-6 col-sm-12 team-block'>
            <div
              className='team-block-one wow fadeInUp animated'
              data-wow-delay='00ms'
              data-wow-duration='1500ms'>
              <div className='inner-box'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-1.jpg'
                      alt=''
                    />
                  </figure>
                  <figure className='overlay-image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-1.jpg'
                      alt=''
                    />
                  </figure>
                </div>
                <div className='lower-content'>
                  <h3>
                    <Link href='/'>Tom Oliver</Link>
                  </h3>
                  <span className='designation'>Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 team-block'>
            <div
              className='team-block-one wow fadeInUp animated'
              data-wow-delay='200ms'
              data-wow-duration='1500ms'>
              <div className='inner-box'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-2.jpg'
                      alt=''
                    />
                  </figure>
                  <figure className='overlay-image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-2.jpg'
                      alt=''
                    />
                  </figure>
                </div>
                <div className='lower-content'>
                  <h3>
                    <Link href='/'>Loenard Barnes</Link>
                  </h3>
                  <span className='designation'>Lead Engineer</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 team-block'>
            <div
              className='team-block-one wow fadeInUp animated'
              data-wow-delay='400ms'
              data-wow-duration='1500ms'>
              <div className='inner-box'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-3.jpg'
                      alt=''
                    />
                  </figure>
                  <figure className='overlay-image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-3.jpg'
                      alt=''
                    />
                  </figure>
                </div>
                <div className='lower-content'>
                  <h3>
                    <Link href='/'>Gilbert Sherman</Link>
                  </h3>
                  <span className='designation'>Sale Manager</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 team-block'>
            <div
              className='team-block-one wow fadeInUp animated'
              data-wow-delay='600ms'
              data-wow-duration='1500ms'>
              <div className='inner-box'>
                <div className='image-box'>
                  <figure className='image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-4.jpg'
                      alt=''
                    />
                  </figure>
                  <figure className='overlay-image'>
                    <img
                      src='https://jobaway.vercel.app/assets/images/team/team-4.jpg'
                      alt=''
                    />
                  </figure>
                </div>
                <div className='lower-content'>
                  <h3>
                    <Link href='/'>Franklin Bailey</Link>
                  </h3>
                  <span className='designation'>Art Director</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import { BiSupport } from 'react-icons/bi';
import { BsBank2, BsShop } from 'react-icons/bs';
import { CiHospital1 } from 'react-icons/ci';
import { FaTruckFast } from 'react-icons/fa6';
import { IoBarChartOutline, IoDesktopOutline } from 'react-icons/io5';
import { LuChartNoAxesCombined } from 'react-icons/lu';
import {
  MdOutlineCorporateFare,
  MdOutlineEngineering,
  MdOutlineFlightTakeoff,
  MdOutlineRealEstateAgent,
} from 'react-icons/md';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,

  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

const industries = [
  {
    id: crypto.randomUUID(),
    name: 'Information Technology (IT)',
    staffCount: 2853,
    icon: IoDesktopOutline,
  },
  {
    id: crypto.randomUUID(),
    name: 'Non-IT',
    staffCount: 2256,
    icon: IoBarChartOutline,
  },
  {
    id: crypto.randomUUID(),
    name: 'Corporate',
    staffCount: 1408,
    icon: MdOutlineCorporateFare,
  },
  {
    id: crypto.randomUUID(),
    name: 'Engineering & Manufacturing',
    staffCount: 1740,
    icon: MdOutlineEngineering,
  },
  {
    id: crypto.randomUUID(),
    name: 'Banking, Financial Services & Insurance (BFSI)',
    staffCount: 3948,
    icon: BsBank2,
  },
  {
    id: crypto.randomUUID(),
    name: 'Healthcare, Medical & Hospitals',
    staffCount: 2984,
    icon: CiHospital1,
  },
  {
    id: crypto.randomUUID(),
    name: 'Retail & E-commerce',
    staffCount: 4509,
    icon: BsShop,
  },
  {
    id: crypto.randomUUID(),
    name: 'BPO / KPO / Customer Support',
    staffCount: 1039,
    icon: BiSupport,
  },
  {
    id: crypto.randomUUID(),
    name: 'Construction & Real Estate',
    staffCount: 1039,
    icon: MdOutlineRealEstateAgent,
  },
  {
    id: crypto.randomUUID(),
    name: 'Travel, Hospitality & Aviation',
    staffCount: 1039,
    icon: MdOutlineFlightTakeoff,
  },
  {
    id: crypto.randomUUID(),
    name: 'Sales, Marketing & Digital Marketing',
    staffCount: 1039,
    icon: LuChartNoAxesCombined,
  },
  {
    id: crypto.randomUUID(),
    name: 'Logistics & Supply Chain',
    staffCount: 1039,
    icon: FaTruckFast,
  },
];

export default function Industries() {
  return (
    <section className='industries-style-three centred pt_120 pb_120'>
      <div
        className='pattern-layer'
        style={{
          backgroundImage: 'url(assets/images/shape/shape-15.png)',
        }}></div>
      <div className='auto-container'>
        <div className='sec-title light pb_60 sec-title-animation animation-style2'>
          <span className='sub-title mb_10 title-animation'>Industries</span>
          <h2 className='title-animation'>Industries Served</h2>
        </div>
        <Swiper
          {...swiperOptions}
          // className='tab-btns tab-buttons tab-btn-carousel'
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <div className='industries-block' key={industry.id}>
                <div className='industries-block-three'>
                  <div className='inner-box'>
                    <div className='icon-box'>
                      <industry.icon />
                    </div>
                    <h3>
                      <Link href='/'>{industry.name}</Link>
                    </h3>
                    <p>{industry.staffCount} Staffs</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* <SwiperSlide>
            <div className='testimonial-block-one'>
              <div className='inner-box'>
                <div
                  className='shape'
                  style={{
                    backgroundImage: 'url(assets/images/shape/shape-7.png)',
                  }}></div>
                <div className='icon-box'>
                  <img src='assets/images/icons/icon-10.png' alt='' />
                </div>
                <div className='author-box'>
                  <figure className='thumb-box'>
                    <img
                      src='assets/images/resource/testimonial-1.png'
                      alt=''
                    />
                  </figure>
                  <h4>Ashitaka Dai</h4>
                  <span className='designation'>Art Director</span>
                </div>
                <p>
                  Company and was impressed by the main personalized approach of
                  their recruitment team. They kept me informed at every stage
                  and ensured that I had all
                </p>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className='testimonial-block-one'>
              <div className='inner-box'>
                <div
                  className='shape'
                  style={{
                    backgroundImage: 'url(assets/images/shape/shape-7.png)',
                  }}></div>
                <div className='icon-box'>
                  <img src='assets/images/icons/icon-10.png' alt='' />
                </div>
                <div className='author-box'>
                  <figure className='thumb-box'>
                    <img
                      src='assets/images/resource/testimonial-2.png'
                      alt=''
                    />
                  </figure>
                  <h4>Franklin Bailey</h4>
                  <span className='designation'>Sale Manager</span>
                </div>
                <p>
                  Recently I went through their recruitment process with Jobaway
                  Company, and I was impressed by how the smooth and efficient
                  these were.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-block-one'>
              <div className='inner-box'>
                <div
                  className='shape'
                  style={{
                    backgroundImage: 'url(assets/images/shape/shape-7.png)',
                  }}></div>
                <div className='icon-box'>
                  <img src='assets/images/icons/icon-10.png' alt='' />
                </div>
                <div className='author-box'>
                  <figure className='thumb-box'>
                    <img
                      src='assets/images/resource/testimonial-3.png'
                      alt=''
                    />
                  </figure>
                  <h4>Evan Clement</h4>
                  <span className='designation'>Mahager, Cypertech</span>
                </div>
                <p>
                  I had a fantastic experience throughout the recruitment
                  process with Jobaway team. The communication was clear,
                  interview process was well-organized
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-block-one'>
              <div className='inner-box'>
                <div
                  className='shape'
                  style={{
                    backgroundImage: 'url(assets/images/shape/shape-7.png)',
                  }}></div>
                <div className='icon-box'>
                  <img src='assets/images/icons/icon-10.png' alt='' />
                </div>
                <div className='author-box'>
                  <figure className='thumb-box'>
                    <img
                      src='assets/images/resource/testimonial-1.png'
                      alt=''
                    />
                  </figure>
                  <h4>Ashitaka Dai</h4>
                  <span className='designation'>Art Director</span>
                </div>
                <p>
                  Company and was impressed by the main personalized approach of
                  their recruitment team. They kept me informed at every stage
                  and ensured that I had all
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-block-one'>
              <div className='inner-box'>
                <div
                  className='shape'
                  style={{
                    backgroundImage: 'url(assets/images/shape/shape-7.png)',
                  }}></div>
                <div className='icon-box'>
                  <img src='assets/images/icons/icon-10.png' alt='' />
                </div>
                <div className='author-box'>
                  <figure className='thumb-box'>
                    <img
                      src='assets/images/resource/testimonial-2.png'
                      alt=''
                    />
                  </figure>
                  <h4>Franklin Bailey</h4>
                  <span className='designation'>Sale Manager</span>
                </div>
                <p>
                  Recently I went through their recruitment process with Jobaway
                  Company, and I was impressed by how the smooth and efficient
                  these were.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='testimonial-block-one'>
              <div className='inner-box'>
                <div
                  className='shape'
                  style={{
                    backgroundImage: 'url(assets/images/shape/shape-7.png)',
                  }}></div>
                <div className='icon-box'>
                  <img src='assets/images/icons/icon-10.png' alt='' />
                </div>
                <div className='author-box'>
                  <figure className='thumb-box'>
                    <img
                      src='assets/images/resource/testimonial-3.png'
                      alt=''
                    />
                  </figure>
                  <h4>Evan Clement</h4>
                  <span className='designation'>Mahager, Cypertech</span>
                </div>
                <p>
                  I had a fantastic experience throughout the recruitment
                  process with Jobaway team. The communication was clear,
                  interview process was well-organized
                </p>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
        {/* <div className='row clearfix'>
          {industries.map((industry) => (
            <div
              className='col-lg-3 col-md-6 col-sm-12 industries-block'
              key={industry.id}>
              <div className='industries-block-three'>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <industry.icon />
                  </div>
                  <h3>
                    <Link href='/'>{industry.name}</Link>
                  </h3>
                  <p>{industry.staffCount} Staffs</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className='more-btn'>
          <Link href='/' className='theme-btn btn-one'>
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}

/* <i className={'icon-1'}></i> */

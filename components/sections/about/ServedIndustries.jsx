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

export default function ServedIndustries() {
  return (
    <section className='industries-style-four pt_120'>
      <div className='auto-container'>
        <div className='sec-title centred pb_60 sec-title-animation animation-style2'>
          <span className='sub-title mb_10 title-animation'>Industries</span>
          <h2 className='title-animation'>Industries Served</h2>
        </div>

        <Swiper
          {...swiperOptions}
          // className='tab-btns tab-buttons tab-btn-carousel'
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id}>
              <div className='industries-block'>
                <div className='industries-block-two'>
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
        </Swiper>

        {/* <div className='row clearfix'>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-9'></i>
                </div>
                <h3>
                  <Link href='/'>Hotel</Link>
                </h3>
                <p>2853 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-10'></i>
                </div>
                <h3>
                  <Link href='/'>Hospitality</Link>
                </h3>
                <p>2256 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-11'></i>
                </div>
                <h3>
                  <Link href='/'>Kitchen</Link>
                </h3>
                <p>1408 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-12'></i>
                </div>
                <h3>
                  <Link href='/'>Retail</Link>
                </h3>
                <p>1740 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-13'></i>
                </div>
                <h3>
                  <Link href='/'>Events</Link>
                </h3>
                <p>3948 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-14'></i>
                </div>
                <h3>
                  <Link href='/'>Labor</Link>
                </h3>
                <p>2984 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-15'></i>
                </div>
                <h3>
                  <Link href='/'>Driving</Link>
                </h3>
                <p>4509 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-two'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-16'></i>
                </div>
                <h3>
                  <Link href='/'>Caretaker</Link>
                </h3>
                <p>1039 Staffs</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Dueal() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <section className='dueal-section pt_120 pb_120'>
      <div className='auto-container'>
        <div className='row clearfix'>
          <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
            <div className='content_block_two'>
              <div className='content-box mr_100'>
                <div className='sec-title pb_35 sec-title-animation animation-style2'>
                  <span className='sub-title mb_10 title-animation'>
                    The Process
                  </span>
                  <h2 className='title-animation'>How it Works</h2>
                  <p>
                    At Sunrisers Job Consultancy, we simplify hiring with a fast
                    and effective 3-step process that connects the right talent
                    with the right opportunities.
                  </p>
                </div>
                <div className='inner-box'>
                  <div className='single-item'>
                    <span className='count-text'>1</span>
                    <h3>
                      <Link href='#'>Share Your Requirements</Link>
                    </h3>
                    <p>
                      Tell us your hiring needs or career goals, and we’ll get
                      started quickly.
                    </p>
                  </div>
                  <div className='single-item'>
                    <span className='count-text'>2</span>
                    <h3>
                      <Link href='#'>Get Matched</Link>
                    </h3>
                    <p>
                      We shortlist the best candidates or job opportunities
                      using our expert screening process.
                    </p>
                  </div>
                  <div className='single-item'>
                    <span className='count-text'>3</span>
                    <h3>
                      <Link href='#'>Hire & Succeed</Link>
                    </h3>
                    <p>
                      Complete hiring smoothly with our support and grow with
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
            <div className='content_block_three'>
              <div className='content-box'>
                <div className='sec-title pb_30 sec-title-animation animation-style2'>
                  <span className='sub-title mb_10 title-animation'>
                    General Faqs
                  </span>
                  <h2 className='title-animation'>
                    Frequently Asked Questions
                  </h2>
                </div>
                <ul className='accordion-box'>
                  <li className='accordion block active-block'>
                    <div
                      className={
                        isActive.key == 1 ? 'acc-btn active' : 'acc-btn'
                      }
                      onClick={() => handleToggle(1)}>
                      <div className='icon-box'>
                        <i className='icon-21'></i>
                      </div>
                      <h4>How Do You Match Candidates with Jobs?</h4>
                    </div>
                    <div
                      className={
                        isActive.key == 1
                          ? 'acc-content current'
                          : 'acc-content'
                      }>
                      <div className='content'>
                        <p>
                          We use a professional screening process to match
                          candidates with roles based on their skills,
                          experience, and career goals.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='accordion block'>
                    <div
                      className={
                        isActive.key == 2 ? 'acc-btn active' : 'acc-btn'
                      }
                      onClick={() => handleToggle(2)}>
                      <div className='icon-box'>
                        <i className='icon-21'></i>
                      </div>
                      <h4>What Types of Jobs Do You Offer?</h4>
                    </div>
                    <div
                      className={
                        isActive.key == 2
                          ? 'acc-content current'
                          : 'acc-content'
                      }>
                      <div className='content'>
                        <p>
                          We provide opportunities across multiple industries
                          including IT, Non-IT, Sales, Marketing, Finance, and
                          more.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='accordion block'>
                    <div
                      className={
                        isActive.key == 3 ? 'acc-btn active' : 'acc-btn'
                      }
                      onClick={() => handleToggle(3)}>
                      <div className='icon-box'>
                        <i className='icon-21'></i>
                      </div>
                      <h4>How Long Does the Hiring Process Take?</h4>
                    </div>
                    <div
                      className={
                        isActive.key == 3
                          ? 'acc-content current'
                          : 'acc-content'
                      }>
                      <div className='content'>
                        <p>
                          The hiring timeline depends on the role and company
                          requirements, but we focus on quick and efficient
                          placements.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='accordion block'>
                    <div
                      className={
                        isActive.key == 4 ? 'acc-btn active' : 'acc-btn'
                      }
                      onClick={() => handleToggle(4)}>
                      <div className='icon-box'>
                        <i className='icon-21'></i>
                      </div>
                      <h4>How Can Employers Hire Candidates?</h4>
                    </div>
                    <div
                      className={
                        isActive.key == 4
                          ? 'acc-content current'
                          : 'acc-content'
                      }>
                      <div className='content'>
                        <p>
                          Employers can share their requirements with us, and we
                          will shortlist and provide the most suitable
                          candidates efficiently.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

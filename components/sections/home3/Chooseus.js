import Link from 'next/link';

export default function Chooseus() {
  return (
    <section className='chooseus-style-two pt_40 pb_40 centred'>
      <div className='auto-container'>
        <div className='sec-title pb_20 sec-title-animation animation-style2'>
          <span className='sub-title mb_10 title-animation'>Why Us</span>
          <h2 className='title-animation'>Why Choose Us</h2>
        </div>
        <div className='row clearfix'>
          <div className='col-lg-4 col-md-6 col-sm-12 chooseus-block'>
            <div className='chooseus-block-one'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-4'></i>
                </div>
                <h3>
                  <Link href='#'>Who We Are</Link>
                </h3>
                <p>
                  Sunrisers Job Consultancy is a growing{' '}
                  <strong>
                    recruitment and staffing solutions provider in India
                  </strong>
                  , dedicated to helping job seekers find meaningful careers and
                  helping companies hire the right talent efficiently. With a
                  team of experienced recruiters and HR professionals, we bring
                  deep industry knowledge and personalized support to every
                  client and candidate.
                </p>
                <div className='link'>
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
                  <Link href='#'>Our Mission</Link>
                </h3>
                <p>
                  <strong>
                    To bridge the gap between talent and opportunity by
                    providing reliable, fast, and quality recruitment solutions.
                  </strong>{' '}
                  We aim to empower job seekers with the right career guidance
                  while enabling businesses to build strong, high-performing
                  teams.
                </p>
                <div className='link'>
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
                  <i className='icon-6'></i>
                </div>
                <h3>
                  <Link href='#'>Our Vision</Link>
                </h3>
                <p>
                  To become one of the most trusted and preferred{' '}
                  <strong>job consultancies in India</strong>, known for
                  delivering quality recruitment services and building long-term
                  relationships with clients and candidates.
                </p>
                <div className='link'>
                  <Link href='#'>
                    Learn More<i className='icon-7'></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

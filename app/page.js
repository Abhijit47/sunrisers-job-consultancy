import Layout from '@/components/layout/Layout';

// import About from '@/components/sections/home1/About';
// import Banner from '@/components/sections/home1/Banner';
// import Category from '@/components/sections/home1/Category';
// import Chooseus from '@/components/sections/home1/Chooseus';
// import Clients from '@/components/sections/home1/Clients';
// import Funfact from '@/components/sections/home1/Funfact';
// import Industries from '@/components/sections/home1/Industries';
// import News from '@/components/sections/home1/News';
// import Process from '@/components/sections/home1/Process';
// import Slide_Text from '@/components/sections/home1/Slide-Text';
// import Subscribe from '@/components/sections/home1/Subscribe';
// import Team from '@/components/sections/home1/Team';

import About3 from '@/components/sections/home3/About';
import Apps3 from '@/components/sections/home3/Apps';
import Banner3 from '@/components/sections/home3/Banner';
import Category3 from '@/components/sections/home3/Category';
import Chooseus3 from '@/components/sections/home3/Chooseus';
import Clients3 from '@/components/sections/home3/Clients';
// import Download3 from '@/components/sections/home3/Download';
// import Dueal3 from '@/components/sections/home3/Dueal';
import Dueal from '@/components/sections/home2/Dueal';
import Industries3 from '@/components/sections/home3/Industries';
import News3 from '@/components/sections/home3/News';
import Slide_Text3 from '@/components/sections/home3/Slide-text';
import Testimonial3 from '@/components/sections/home3/Testimonial';
// import Process4 from '@/components/sections/home4/Process';
// import Welcome3 from '@/components/sections/home3/Welcome';

export default function Home() {
  return (
    <div className='boxed_wrapper'>
      <Layout headerStyle={3} footerStyle={3}>
        <Banner3 />
        <Chooseus3 />
        <Clients3 />
        <About3 />
        <Category3 />
        {/* <Download3 /> */}
        <Industries3 />
        <Process />
        {/* <Welcome3 /> */}
        <Slide_Text3 />
        <Testimonial3 />
        <Dueal />
        {/* <Process4 /> */}
        {/* <Dueal3 /> */}
        <News3 />
        <Apps3 />

        {/* <Banner />
        <Clients />
        <About />
        <Funfact />
        <Slide_Text />
        <Chooseus />
        <Category />
        <Industries />
        <Process />
        <Team />
        <News />
        <Subscribe /> */}
      </Layout>
    </div>
  );
}

function Process() {
  return (
    <section className='process-style-two centred'>
      <div className='outer-container p_relative pt_120 pb_120'>
        <div className='auto-container'>
          <div className='sec-title pb_60 sec-title-animation animation-style2'>
            <span className='sub-title mb_10 title-animation'>
              Milestones & Timeline
            </span>
            <h2 className='title-animation'>
              Our Journey of Growth and Success
            </h2>
            <p className='title-animation'>
              Sunrisers Job Consultancy was established in 2021 with a clear
              vision to bridge the gap between job seekers and employers. <br />
              Since our inception, we have been dedicated to delivering
              reliable, fast, and result-driven recruitment and staffing
              solutions in India.
            </p>
            <br />
            <p className='title-animation'>
              From a small beginning, we have steadily grown into a trusted job
              consultancy for freshers and experienced professionals, <br />{' '}
              helping candidates build careers and businesses find the right
              talent.
            </p>
          </div>
          <div className='inner-container'>
            <div
              className='shape'
              style={{
                backgroundImage: 'url(assets/images/shape/shape-19.png)',
              }}></div>
            <div className='processing-block-two'>
              <div className='inner-box'>
                <h4>
                  01 <span>2021</span>
                </h4>
                <h3>The Beginning</h3>
                <p>Started as a recruitment agency</p>
              </div>
            </div>
            <div className='processing-block-two'>
              <div className='inner-box'>
                <h4>
                  02 <span>2022</span>
                </h4>
                <h3>Expanding Services</h3>
                <p>Expanded into multiple industries</p>
              </div>
            </div>
            <div className='processing-block-two'>
              <div className='inner-box'>
                <h4>
                  03 <span>2023</span>
                </h4>
                <h3>Building Strong Networks</h3>
                <p>Built strong employer connections</p>
              </div>
            </div>
          </div>

          <div className='inner-container justify-content-around mt-5 mt-sm-5 mt-md-3 mt-lg-5'>
            <div
              className='shape'
              style={{
                backgroundImage: 'url(assets/images/shape/shape-19.png)',
              }}></div>
            <div className='processing-block-two'>
              <div className='inner-box'>
                <h4>
                  04 <span>2024</span>
                </h4>
                <h3>Strengthening Recruitment Process</h3>
                <p>Enhanced recruitment strategies</p>
              </div>
            </div>
            <div className='processing-block-two'>
              <div className='inner-box'>
                <h4>
                  05 <span>2025</span>
                </h4>
                <h3>Growth & Recognition</h3>
                <p>Achieved steady growth and gained recognition</p>
              </div>
            </div>
            <div className='processing-block-two'>
              <div className='inner-box'>
                <h4>
                  06 <span>2026</span>
                </h4>
                <h3>Scaling for the Future</h3>
                <p>Becoming a leading placement consultancy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import CircleText from '@/components/elements/CircleText';
import VideoPopup from '@/components/elements/VideoPopup';
import Link from 'next/link';

export default function About() {
  return (
    <section className='about-style-three'>
      <div className='pattern-layer'>
        <div className='pattern-1'></div>
        <div className='pattern-2'></div>
      </div>
      <div className='auto-container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 col-sm-12 video-column'>
            <div className='video_block_two'>
              <div className='video-box p_relative pb_100 pr_150 mr_30'>
                <figure className='image image-1'>
                  <img src='assets/images/resource/about-1.jpg' alt='' />
                </figure>
                <figure className='image image-2 z_1 p_absolute r_0 b_0'>
                  <img src='assets/images/resource/about-2.jpg' alt='' />
                </figure>
                <div
                  className='shape'
                  style={{
                    backgroundImage: 'url(assets/images/shape/shape-14.png)',
                  }}></div>
                <div className='video-content'>
                  <div className='curve-text z_2'>
                    <span className='curved-circle'>
                      <CircleText
                        text='watch&nbsp;the&nbsp;video&nbsp;right&nbsp;now&nbsp;'
                        radius={67}
                      />
                    </span>
                  </div>
                  <VideoPopup />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 content-column'>
            <div className='content_block_one'>
              <div className='content-box mr_80'>
                <div className='sec-title light pb_20 sec-title-animation animation-style2'>
                  <span className='sub-title mb_10 title-animation'>
                    About us
                  </span>
                  <h2 className='title-animation'>
                    Building Careers, Empowering Futures
                  </h2>
                </div>
                <div className='text-box'>
                  <p>
                    At Sunrisers Job Consultancy, we connect the right talent
                    with the right opportunities across IT & Non-IT sectors.
                  </p>
                  <ul className='list-style-one mb_40 clearfix'>
                    <li>3+ Years Experience</li>
                    <li>300+ Successful Placements</li>
                    <li>Career-Focused Support</li>
                  </ul>
                </div>
                <div className='btn-box'>
                  <Link href='/about' className='theme-btn btn-one'>
                    <span>Find Works</span>
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

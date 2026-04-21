import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className='col-lg-8 col-md-12 col-sm-12 content-side'>
      <div className='blog-details-content'>
        <div className='news-block-two'>
          <div className='inner-box'>
            <div className='image-box'>
              <figure className='image'>
                <img src='assets/images/news/news-15.jpg' alt='' />
              </figure>
            </div>
            <div className='lower-content'>
              <span className='category'>Business</span>
              <h3>
                Create a series of blog posts discussing common interview
                Discuss the company’s core values
              </h3>
              <ul className='post-info'>
                <li>
                  By <Link href='/blog-details'>Ema Chawal</Link>
                </li>
                <li>
                  <span>March 18, 2023</span>
                </li>
              </ul>
            </div>
            <div className='text-box pt_25 mb_50'>
              <p className='mb_30'>
                Another post might tackle technical questions relevant to your
                industry, offering strategies for breaking down complex problems
                and showcasing problem-solving skills. By breaking down each
                type of question and offering practical advice, sample answers.
              </p>
              <p className='mb_40'>
                tips for tailoring responses to align with the company's values
                and expectations, this blog series can become an essential
                resource for candidates aiming to succeed in their interviews
                and secure their desired positions.
              </p>
              <blockquote>
                <div className='icon-box'>
                  <i className='icon-36'></i>
                </div>
                <h4>
                  That's why we adhere to strict quality standards and
                  regulations to ensure that all our products meet the highest
                  levels of safety and efficacy.
                </h4>
                <h3>Hemandi Kaur</h3>
              </blockquote>
            </div>
          </div>
        </div>
        <div className='two-column'>
          <div className='row clearfix'>
            <div className='col-lg-6 col-md-6 col-sm-12 image-column'>
              <figure className='image-box mb_25'>
                <img src='assets/images/news/news-17.jpg' alt='' />
              </figure>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 image-column'>
              <figure className='image-box mb_25'>
                <img src='assets/images/news/news-18.jpg' alt='' />
              </figure>
            </div>
          </div>
        </div>
        <div className='content-one mb_40'>
          <h3>Hiring & Onboarding Process</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing.
          </p>
          <h4>Your Gateway to Hiring Success</h4>
          <ul className='list-item clearfix'>
            <li>The wise man therefore always holds in these matters</li>
            <li>Have to be repudiated and annoyances accepted.</li>
            <li>
              Rejects pleasures to secure other greater pleasures, or else
            </li>
          </ul>
        </div>
        <div className='post-share-option mb_60'>
          <ul className='tags-list'>
            <li>
              <h6>Tags:</h6>
            </li>
            <li>
              <Link href='/blog-details'>Careers</Link>
            </li>
            <li>
              <Link href='/blog-details'>Demo</Link>
            </li>
          </ul>
          <ul className='social-links'>
            <li>
              <h6>Share This :</h6>
            </li>
            <li>
              <Link href='/blog-details'>
                <i className='icon-22'></i>
              </Link>
            </li>
            <li>
              <Link href='/blog-details'>
                <i className='icon-23'></i>
              </Link>
            </li>
            <li>
              <Link href='/blog-details'>
                <i className='icon-24'></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className='comment-box'>
          <div className='group-title mb_25'>
            <h3>Write Comment</h3>
          </div>
          <div className='form-inner'>
            <form method='post' action='/blog-details'>
              <div className='row clearfix'>
                <div className='col-lg-6 col-md-6 col-sm-12 single-column'>
                  <div className='form-group'>
                    <label>
                      Name <span>*</span>
                    </label>
                    <input type='text' name='name' />
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 single-column'>
                  <div className='form-group'>
                    <label>
                      Email <span>*</span>
                    </label>
                    <input type='email' name='email' />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 single-column'>
                  <div className='form-group'>
                    <label>
                      Message <span>*</span>
                    </label>
                    <textarea name='message'></textarea>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 single-column'>
                  <div className='check-box mb_35'>
                    <input className='check' type='checkbox' id='checkbox9' />
                    <label htmlFor='checkbox9'>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                </div>
                <div className='col-lg-12 col-md-12 col-sm-12 single-column'>
                  <div className='message-btn'>
                    <button type='submit' className='theme-btn btn-one'>
                      Submit Review
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

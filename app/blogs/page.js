'use client';
import Subscribe from '@/components/sections/home2/Subscribe';
import Link from 'next/link';

export default function BlogsPage() {
  return (
    <>
      {/* <Layout headerStyle={3} footerStyle={2} breadcrumbTitle='Blogs'> */}
      {/* <section className='sidebar-page-container p_relative pt_110 pb_120'> */}
      {/* <div className='auto-container'> */}
      {/* <div className='row clearfix'> */}
      {/* <div className='col-lg-4 col-md-12 col-sm-12 sidebar-side'>
                <BlogsSideBar />
                <BlogsDownloadWidget />
              </div> */}
      <main className='col-lg-8 col-md-12 col-sm-12 content-side'>
        <BlogsCards />
      </main>
      {/* </div> */}
      {/* </div> */}
      {/* </section> */}

      <Subscribe />
      {/* </Layout> */}
    </>
  );
}

function BlogsCards() {
  return (
    <div className='blog-grid-content'>
      <div className='row clearfix'>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-4.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-4.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Business</span>
                <h3>
                  <Link href='/blogs/1'>
                    Create a series of blog posts discussing common interview
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>Alex Beniwal</Link>
                  </li>
                  <li>
                    <span>March 20, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-5.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-5.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Analytics</span>
                <h3>
                  <Link href='/blogs/1'>
                    Explore the concept of personal branding and its impact on
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>Stefen De</Link>
                  </li>
                  <li>
                    <span>March 19, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-7.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-7.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Technology</span>
                <h3>
                  <Link href='/blogs/1'>
                    Share stories of employees who have advanced within the
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>Ema malwar</Link>
                  </li>
                  <li>
                    <span>March 18, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-8.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-8.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Development</span>
                <h3>
                  <Link href='/blogs/1'>
                    Provide guidance on crafting effective resumes and cover
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>John Rock</Link>
                  </li>
                  <li>
                    <span>March 17, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-9.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-9.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Remote</span>
                <h3>
                  <Link href='/blogs/1'>
                    Detail any internship or graduate programs you offer
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>Caly Andrs</Link>
                  </li>
                  <li>
                    <span>March 16, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-10.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-10.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Analytics</span>
                <h3>
                  <Link href='/blogs/1'>
                    Use relevant keywords to improve the blog’s visibility in
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>Tom Rose</Link>
                  </li>
                  <li>
                    <span>March 15, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-11.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-11.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Remote</span>
                <h3>
                  <Link href='/blogs/1'>
                    Explore the concept of personal branding and its impact on
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>Jhon Haris</Link>
                  </li>
                  <li>
                    <span>March 14, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 news-block'>
          <div
            className='news-block-two wow fadeInUp animated'
            data-wow-delay='00ms'
            data-wow-duration='1500ms'>
            <div className='inner-box'>
              <div className='image-box'>
                <figure className='image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-12.jpg' alt='' />
                  </Link>
                </figure>
                <figure className='overlay-image'>
                  <Link href='/blogs/1'>
                    <img src='assets/images/news/news-12.jpg' alt='' />
                  </Link>
                </figure>
              </div>
              <div className='lower-content'>
                <span className='category'>Analytics</span>
                <h3>
                  <Link href='/blogs/1'>
                    Share stories of employees who have advanced within the{' '}
                  </Link>
                </h3>
                <ul className='post-info'>
                  <li>
                    By <Link href='/blogs/1'>Alex Bolt</Link>
                  </li>
                  <li>
                    <span>March 13, 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogsPagination />
    </div>
  );
}

function BlogsPagination() {
  return (
    <div className='pagination-wrapper mb-5'>
      <ul className='pagination clearfix'>
        <li>
          <Link href='/blog'>
            <i className='icon-34'></i>
          </Link>
        </li>
        <li>
          <Link href='/blog' className='current'>
            1
          </Link>
        </li>
        <li>
          <Link href='/blog'>2</Link>
        </li>
        <li>
          <Link href='/blog'>3</Link>
        </li>
        <li>
          <Link href='/blog'>
            <i className='icon-35'></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function BlogsSideBar() {
  return (
    <div className='blog-sidebar mr_40 mb_30'>
      <div className='search-widget mb_60'>
        <div className='search-form'>
          <form method='post' action='/blog'>
            <div className='form-group'>
              <input
                type='search'
                name='search-field'
                placeholder='Search'
                required
              />
              <button type='submit'>
                <span className={'visually-hidden'}>submit</span>
                <i className='icon-1'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='sidebar-widget category-widget mb_50'>
        <div className='widget-title mb_11'>
          <h3>Categories</h3>
        </div>
        <div className='widget-content'>
          <ul className='category-list clearfix'>
            <li>
              <Link href='/blogs/1'>
                Day Trading<span>(09)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                Finance<span>(20)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                Virtual Hiring<span>(25)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                Headhunting<span>(06)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                Promotions<span>(18)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                Recruitment Agencies<span>(11)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebar-widget post-widget mb_60'>
        <div className='widget-title mb_20'>
          <h3>Latest Posts</h3>
        </div>
        <div className='post-inner'>
          <div className='post'>
            <figure className='post-thumb'>
              <Link href='/blogs/1'>
                <img src='assets/images/news/post-1.jpg' alt='' />
              </Link>
            </figure>
            <h6>
              <Link href='/blogs/1'>
                Provide guidance on crafting effective
              </Link>
            </h6>
            <span className='post-date'>1 May 2024</span>
          </div>
          <div className='post'>
            <figure className='post-thumb'>
              <Link href='/blogs/1'>
                <img src='assets/images/news/post-2.jpg' alt='' />
              </Link>
            </figure>
            <h6>
              <Link href='/blogs/1'>
                Explore the concept of personal branding
              </Link>
            </h6>
            <span className='post-date'>1 May 2024</span>
          </div>
          <div className='post'>
            <figure className='post-thumb'>
              <Link href='/blogs/1'>
                <img src='assets/images/news/post-3.jpg' alt='' />
              </Link>
            </figure>
            <h6>
              <Link href='/blogs/1'>Use relevant keywords to improve</Link>
            </h6>
            <span className='post-date'>1 May 2024</span>
          </div>
        </div>
      </div>
      <div className='sidebar-widget tags-widget mb_45'>
        <div className='widget-title mb_20'>
          <h3>Popular tag</h3>
        </div>
        <div className='widget-content'>
          <ul className='tags-list clearfix'>
            <li>
              <Link href='/blogs/1'>Account</Link>
            </li>
            <li>
              <Link href='/blogs/1'>Careers</Link>
            </li>
            <li>
              <Link href='/blogs/1'>Demo</Link>
            </li>
            <li>
              <Link href='/blogs/1'>Development</Link>
            </li>
            <li>
              <Link href='/blogs/1'>Technology</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='sidebar-widget archives-widget'>
        <div className='widget-title mb_11'>
          <h3>Archives</h3>
        </div>
        <div className='widget-content'>
          <ul className='archives-list clearfix'>
            <li>
              <Link href='/blogs/1'>
                <i className='fal fa-angle-right'></i>December 20, 2022
                <span>(09)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                <i className='fal fa-angle-right'></i>December 26, 2022
                <span>(20)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                <i className='fal fa-angle-right'></i>December 26, 2022
                <span>(25)</span>
              </Link>
            </li>
            <li>
              <Link href='/blogs/1'>
                <i className='fal fa-angle-right'></i>December 26, 2022
                <span>(06)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function BlogsDownloadWidget() {
  return (
    <div className='download-widget mr_40'>
      <div
        className='shape'
        style={{
          backgroundImage: 'url(assets/images/shape/shape-24.png)',
        }}></div>
      <div className='inner-box'>
        <figure className='image-box'>
          <img src='assets/images/resource/book-3.png' alt='' />
        </figure>
        <h4>
          The 2024 guide for Optimal Content <span>Management</span>
        </h4>
        <button type='button' className='theme-btn btn-one'>
          Download E-book
        </button>
      </div>
    </div>
  );
}

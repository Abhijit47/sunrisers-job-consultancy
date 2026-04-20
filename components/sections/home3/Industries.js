import Link from 'next/link';

const industries = [
  {
    id: crypto.randomUUID(),
    name: 'Information Technology (IT)',
    staffCount: 2853,
    icon: 'icon-9',
  },
  {
    id: crypto.randomUUID(),
    name: 'Non-IT',
    staffCount: 2256,
    icon: 'icon-10',
  },
  {
    id: crypto.randomUUID(),
    name: 'Corporate',
    staffCount: 1408,
    icon: 'icon-11',
  },
  {
    id: crypto.randomUUID(),
    name: 'Engineering & Manufacturing',
    staffCount: 1740,
    icon: 'icon-12',
  },
  {
    id: crypto.randomUUID(),
    name: 'Banking, Financial Services & Insurance (BFSI)',
    staffCount: 3948,
    icon: 'icon-13',
  },
  {
    id: crypto.randomUUID(),
    name: 'Healthcare, Medical & Hospitals',
    staffCount: 2984,
    icon: 'icon-14',
  },
  {
    id: crypto.randomUUID(),
    name: 'Retail & E-commerce',
    staffCount: 4509,
    icon: 'icon-15',
  },
  {
    id: crypto.randomUUID(),
    name: 'BPO / KPO / Customer Support',
    staffCount: 1039,
    icon: 'icon-12',
  },
  {
    id: crypto.randomUUID(),
    name: 'Construction & Real Estate',
    staffCount: 1039,
    icon: 'icon-11',
  },
  {
    id: crypto.randomUUID(),
    name: 'Travel, Hospitality & Aviation',
    staffCount: 1039,
    icon: 'icon-10',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sales, Marketing & Digital Marketing',
    staffCount: 1039,
    icon: 'icon-15',
  },
  {
    id: crypto.randomUUID(),
    name: 'Logistics & Supply Chain',
    staffCount: 1039,
    icon: 'icon-1',
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
        <div className='row clearfix'>
          {industries.map((industry) => (
            <div
              className='col-lg-3 col-md-6 col-sm-12 industries-block'
              key={industry.id}>
              <div className='industries-block-three'>
                <div className='inner-box'>
                  <div className='icon-box'>
                    <i className={industry.icon}></i>
                  </div>
                  <h3>
                    <Link href='/'>{industry.name}</Link>
                  </h3>
                  <p>{industry.staffCount} Staffs</p>
                </div>
              </div>
            </div>
          ))}
          {/* <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-three'>
              <div className='inner-box'>
                <div className='icon-box'>
                  <i className='icon-9'></i>
                </div>
                <h3>
                  <Link href='/'>Information Technology (IT)</Link>
                </h3>
                <p>2853 Staffs</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 industries-block'>
            <div className='industries-block-three'>
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
            <div className='industries-block-three'>
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
            <div className='industries-block-three'>
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
            <div className='industries-block-three'>
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
            <div className='industries-block-three'>
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
            <div className='industries-block-three'>
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
            <div className='industries-block-three'>
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
          </div> */}
        </div>
        <div className='more-btn'>
          <Link href='/' className='theme-btn btn-one'>
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}

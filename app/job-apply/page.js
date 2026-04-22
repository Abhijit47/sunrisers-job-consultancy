import Layout from '@/components/layout/Layout';
import Subscribe from '@/components/sections/home2/Subscribe';
import JobApplyForm from '@/components/sections/job/JobApplyForm';

export default function Job_Page_Four() {
  return (
    <div className='boxed_wrapper'>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle='Job Apply'>
        <section className='job-form-section dark-section pt_110 pb_90'>
          <div className='auto-container'>
            <div className='sec-title centred pb_70 sec-title-animation animation-style2'>
              <span className='sub-title mb_10 title-animation'>
                REQUEST NEEDED TALENT
              </span>
              <h2 className='title-animation'>Talented Professionals Needed</h2>
              <p className='title-animation'>
                We are on the lookout for talented professionals who are eager
                to contribute to our <br />
                innovative and dynamic team.
              </p>
            </div>
            <JobApplyForm />
          </div>
        </section>
        <Subscribe />
      </Layout>
    </div>
  );
}

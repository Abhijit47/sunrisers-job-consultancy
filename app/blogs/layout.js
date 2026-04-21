import Layout from '@/components/layout/Layout';
import { BlogsDownloadWidget, BlogsSideBar } from './page';

export default function BlogLayout({ children }) {
  return (
    <div className='boxed_wrapper'>
      <Layout headerStyle={3} footerStyle={2} breadcrumbTitle='Blogs'>
        <div className='sidebar-page-container p_relative pt_110 pb_120'>
          <div className='auto-container'>
            <div className='row clearfix'>
              <div className='col-lg-4 col-md-12 col-sm-12 sidebar-side'>
                <BlogsSideBar />
                <BlogsDownloadWidget />
              </div>
              {children}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

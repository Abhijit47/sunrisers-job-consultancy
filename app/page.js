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
import Process4 from '@/components/sections/home4/Process';
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
        {/* <Welcome3 /> */}
        <Slide_Text3 />
        <Testimonial3 />
        <Dueal />
        <Process4 />
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

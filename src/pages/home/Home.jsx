
import Carousel from '../../components/Carousel/Carousel';
import RecentNews from '../../components/RecentNews/RecentNews';



const Home = () => {
    return (
        <div className='grid grid-cols-12'>
           <div className='col-span-8'>
           <Carousel/>
           </div>
           <div className='col-span-4'>
                <RecentNews/>
           </div>
          
        </div>
    );
};

export default Home;
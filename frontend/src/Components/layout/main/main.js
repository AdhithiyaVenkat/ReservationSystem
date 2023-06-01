import  { ImageCarousel, ReviewCarousel } from '../../carousel';
import Dashboard from '../../Dashboard/dashboard'

export default function Main() {
  return (
    <div className="container mx-auto">
      <Dashboard/>
      <div className='grid grid-flow-col m-10 sm:gap-4 lg:gap-60 place-content-center'>
        <ImageCarousel />
        <ReviewCarousel />
      </div>
    </div>
  );
}
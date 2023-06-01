import Datepicker from "../datepicker/datepicker";
import IconButton from '@mui/material/IconButton';
import desk from '../../images/desk.jpeg';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import {useNavigate} from 'react-router-dom';
export default function Dashboard() {

  const navigate = useNavigate()

  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Reservation </span>
              <span className="block text-indigo-600 xl:inline">Lounge</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Pick a date and book a lounge for yourself
            </p>
            <div className="mt-10">
              <Datepicker/>
              <span className="p-3">
              <IconButton aria-label="next" onClick={()=>{
                navigate('/createReservation')
              }}>
                <NextPlanIcon />
              </IconButton>
              </span>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={desk} alt="Desk"
          />
        </div>
      </main>
    </div>
  )
}

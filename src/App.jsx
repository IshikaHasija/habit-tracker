
import Header from './components/Header';
import Habitform from './components/Habitform';
import Habitlist from './components/Habitlist';
import { useState } from 'react';
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns"
import { HabitProvider } from "./context/HabitProvider"

function App() {
  const [weekOffset, setWeekOffset] = useState(0)

  const week = addWeeks(new Date(), weekOffset)
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  })

  return (
    <>
    <div className='max-w-3xl mx-auto flex flex-col gap-4 p-4'>
      <HabitProvider>
      <Header visibleDates={visibleDates}
          onNext={() => setWeekOffset(o => o + 1)}
          onPrev={() => setWeekOffset(o => o - 1)}/>
      <Habitform/>
      <Habitlist visibleDates={visibleDates} />
      </HabitProvider>
    </div>
    </>
  )
}



export default App

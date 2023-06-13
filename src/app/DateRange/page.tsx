'use client'
import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRangePicker } from "react-date-range";

export default function Home() {
    const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);
  return (
      <main className=''>
          <div className='mt-40 w-full scale-150'>
          </div>
      </main>
  )
}

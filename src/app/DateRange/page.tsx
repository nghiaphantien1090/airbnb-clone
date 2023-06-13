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
      <main className='mt-40'>
          <div className='flex flex-row w-100vw'>
            <div className='w-1/4'>abc123</div>
            <div className='w-1/4'>abc12222</div>
            <div className='w-1/4'>abc6666</div>
            <div className='w-1/4'>abc9999</div>
          </div>
      </main>
  )
}

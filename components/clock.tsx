'use client';

// @see https://www.npmjs.com/package/react-live-clock
import Clock from 'react-live-clock';  

export default function ClockComponent() {
    return (
        <Clock 
            className='text-[64px] font-medium text-left text-black leading-none'
            timezone={'Asia/Jakarta'}
            ticking={true}
            blinking={false}
            format={'HH:mm:ss'}
        />
    );
} 
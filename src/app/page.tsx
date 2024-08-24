import * as React from 'react';
import MyCards from '@/components/Main/Overview/MyCards';

export default function Home() {
  return (
    <main className='h-[923px] max-w-[1190px] overflow-auto bg-mainBg'>
      <section className='mx-[40px]'>
        <MyCards/>
      </section>
    </main>
  );
}

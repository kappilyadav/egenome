// app/page.tsx
import {Button} from '@nextui-org/button'; 
import Nav from './_components/Nav';
import Announcement from './_components/Announcement';
import Hero from './_components/Hero';
import Work from './_components/Work';

export default function Page() {
  return (
    <div className="bg-secondary h-screen">
      <Announcement/>
      <Nav/>
      <Hero/>
      <Work/>
    </div>
  )
}
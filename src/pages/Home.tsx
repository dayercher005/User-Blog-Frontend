import { NavigationBar } from '@/components/Navigation-bar';
import { HomeDescription } from '@/components/HomeDescription';
import { BlogCards } from '@/components/BlogCards.tsx';

export default function HomePage() {

  return (
    <div className="">
      <NavigationBar />
      <HomeDescription />
      <BlogCards />
    </div>
  )
}



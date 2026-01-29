import { NavigationBar } from '@/components/Navigation-bar';
import { BlogDescription } from '@/components/BlogDescription.tsx';
import { BlogCards } from '@/components/BlogCards.tsx';

export default function HomePage() {

  return (
    <div className="">
      <NavigationBar />
      <BlogDescription />
      <BlogCards />
    </div>
  )
}



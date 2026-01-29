import { NavigationBar } from '@/components/Navigation-bar';
import { BlogDescription } from '@/components/BlogDescription.tsx';
import { Blogs } from '@/components/Blogs.tsx';

export default function HomePage() {

  return (
    <div className="">
      <NavigationBar />
      <BlogDescription />
      <Blogs />
    </div>
  )
}



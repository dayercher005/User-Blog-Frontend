import { useParams } from 'react-router';
import { Blog } from '@/components/Blog.tsx'

export function BlogReader(){

    return (
        <div>
            <Blog />
        </div>
    )
}
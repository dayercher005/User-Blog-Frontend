import { useState, useEffect } from 'react';
import { Blog } from './Blog.tsx';
import { SpinnerEmpty } from '@/components/SpinnerRequest.tsx';

interface BlogPost {
    title: string;
    date: string;
    author: string;
    duration: string;
}

export function Blogs(){

    const [blogArray, setBlogArray] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    const API = "http://localhost:8080";

    useEffect(() => {

        let ignore: boolean = false

        const fetchBlogDetails = async () => {
            try{
                const response = await fetch(API);

                if (!response.ok){
                    throw new Error()
                }

                const blogData = await response.json();

                for(let index = 0; index < blogData.posts.length; index++){
                    const blogTitle = blogData.posts[index].title
                    const blogDate = blogData.posts[index].date;
                    const blogContent = blogData.posts[index].author;
                    const blogDuration = blogData.posts[index].duration;

                    if (!ignore){
                        setBlogArray(array => [...array, {title: blogTitle, date: blogDate, author: blogContent, duration: blogDuration}])
                    }
                }


            } catch(error){
                return error
            } finally{
                setLoading(false);
            }
        }

        fetchBlogDetails();

        return () => {
            ignore = true
        }

    }, [])

    if(loading){
        return (
            <SpinnerEmpty />
        )
    }

    return(
        <div className="grid p-10 m-4">
            {blogArray.map((blog, index) => (
                <Blog
                    key={index}
                    title={blog.title}
                    date={blog.date}
                    duration={blog.duration}
                    author={blog.author}
                />
            ))}
        </div>
    )
}
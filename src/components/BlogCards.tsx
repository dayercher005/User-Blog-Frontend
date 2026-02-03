import { useState, useEffect } from 'react';
import { BlogCard } from './BlogCard.tsx';
import { SpinnerEmpty } from '@/components/SpinnerRequest.tsx';
import { Link } from 'react-router';

interface BlogPost {
    title: string;
    id: string
    date: Date;
    author: string;
    duration: string;
}

export function BlogCards(){

    const [blogArray, setBlogArray] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const API = "http://localhost:8080/user";

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
                    const blogID = blogData.posts[index].id
                    const blogTitle = blogData.posts[index].title
                    const blogDate = blogData.posts[index].date;
                    const blogAuthor = blogData.posts[index].authorUsername;
                    const blogDuration = blogData.posts[index].duration;

                    if (!ignore){
                        setBlogArray(array => [...array, 
                            {title: blogTitle,
                             id: blogID,
                             date: blogDate, 
                             author: blogAuthor, 
                             duration: blogDuration}])
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
                <BlogCard
                    key={index}
                    id={blog.id}
                    title={blog.title}
                    date={blog.date}
                    duration={blog.duration}
                    author={blog.author}
                />
            ))}
        </div>
    )
}
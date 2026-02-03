import { useParams } from 'react-router';
import { Blog } from '@/components/Blog.tsx';
import { SpinnerEmpty } from '@/components/SpinnerRequest.tsx';
import { useEffect, useState } from 'react';

export function BlogReader(){

    interface IndividualBlogDetailsProps{
        title: string,
        duration: number,
        content: string,
        author: string,
        date: string,

    }

    interface BlogCommentProps{
        content: string,
        username: string,
        date: string
    }

    const { blogID } = useParams();

    const [loading, setLoading] = useState<boolean>(true);
    const [authenticationStatus, setAuthenticationStatus] = useState<boolean>(false);
    const [individualBlogDetails, setIndividualBlogDetails] = useState<IndividualBlogDetailsProps[]>([]);
    const [blogComments, setBlogComments] = useState<BlogCommentProps[]>([]);

    const API = `http://localhost:8080/user/${blogID}`;
    const token = localStorage.getItem("token");

    useEffect(() => {

        let ignore = false;

        async function fetchIndividualBlogDetails(){
            try{
                const response = await fetch(API, {
                    method: "GET",
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                });

                const data = await response.json();
                
                const individualBlogData = data.post
                const blogComments = data.comments.comments

                setIndividualBlogDetails(array => [...array, 
                    {title: individualBlogData.title,
                     duration: individualBlogData.duration, 
                     content: individualBlogData.content, 
                     author: individualBlogData.authorUsername,
                     date: individualBlogData.date}])

                for(let index = 0; index < blogComments.length; index++){

                    const commentContent = blogComments[index].content;
                    const commentDate = blogComments[index].date;
                    const commentUsername = blogComments[index].userUsername;

                    if (!ignore){
                        setBlogComments(array => [...array,
                            {content: commentContent,
                            date: commentDate,
                            username: commentUsername
                            }])
                    }
                    
                }
            } catch (error){
                return error
            } finally {
                setLoading(false);
            }
        }

        fetchIndividualBlogDetails();

        return () => {
            ignore = true
        }
    }, [API, token])

    if (loading){
        return (
            <SpinnerEmpty />
        )
    }

    return (
        <div>
            <Blog
                title={individualBlogDetails[0].title}
                duration={individualBlogDetails[0].duration}
                content={individualBlogDetails[0].content}
                author={individualBlogDetails[0].author}
                date={individualBlogDetails[0].date}
                comments={blogComments}
            />
        </div>
    )
}
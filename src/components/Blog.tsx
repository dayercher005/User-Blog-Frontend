import { useState, useEffect } from 'react'; 

export function Blog(){

    interface IndividualBlogDetailsProps{
        title: string,
        duration: number,
        content: string,
        author: string,
        date: string
    }

    interface BlogCommentProps{
        content: string,
        username: string,
        date: string
    }

    const [individualBlogDetails, setIndividualBlogDetails] = useState<IndividualBlogDetailsProps[]>([]);
    const [blogComments, setBlogComments] = useState<BlogCommentProps[]>([]);

    const API = "http://localhost:8080/:post";

    useEffect(() => {

        let ignore = false;

        async function fetchIndividualBlogDetails(){
            try{
                const response = await fetch(API);

                const data = await response.json();
                const individualBlogData = data.post
                const blogComments = data.comments

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
            }
        }

        fetchIndividualBlogDetails();

        return () => {
            ignore = true
        }
    }, [])


    return (
        <div>

        </div>
    )
}
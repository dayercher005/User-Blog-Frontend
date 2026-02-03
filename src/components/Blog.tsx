import { Comment } from '@/components/Comment.tsx';
import { Badge } from "@/components/ui/badge";
import { Clock3, BookOpen } from "lucide-react";

interface IndividualBlogProps{
    title: string,
    duration: number,
    content: string,
    author: string,
    date: Date,
    comments: string[]
}

export function Blog({
    title,
    duration,
    content,
    author,
    date,
    comments
}:IndividualBlogProps){

    const dateString = new Date(date);


    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center pt-10 pb-5">{title}</h1>
                <h3 className="text-lg font-semibold text-center mx-15 mt-2 mb-4">Written by: {author}</h3>
                <div className="flex justify-between mx-15 my-5">
                    <Badge className="text-md bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300" variant="secondary">
                        <Clock3 className="size-5!" />
                        {duration} min Read
                    </Badge>
                    <Badge className="text-md bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300" variant="secondary">
                        <BookOpen className="size-5!" />
                        Published on {dateString.toLocaleDateString()}
                    </Badge>
                </div>
                <div className="mx-auto my-10 w-7/10">
                    <p className="">{content}</p>
                </div>
            </div>

            <div>
                {comments.map((comment, index) => (
                    <Comment 
                        username={comment.username}
                        date={comment.date}
                        content={comment.content}
                    />
                ))}
            </div>
        </div>
    )
}
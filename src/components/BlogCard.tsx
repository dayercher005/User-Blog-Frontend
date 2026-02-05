import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock3 } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from 'react-router';

interface BlogCardProps{
    id:string,
    title: string,
    date: Date,
    author: string,
    duration: string
}

export function BlogCard({
    id,
    title,
    date,
    author,
    duration
}: BlogCardProps){

    const dateString = new Date(date)

    return (
    <Card className="bg-neutral-300 dark:bg-neutral-700 relative mx-auto w-full max-w-sm px-1 pt-0.5">
      
      <img
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 p-1"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
            <Clock3 className="size-3.3!" />
            {duration} min read
          </Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Date Published: {dateString.toLocaleDateString()}
        </CardDescription>
        <CardDescription>
          Published by: {author}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`/${id}`} className="w-full">
            <Button className="w-full ">Read</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

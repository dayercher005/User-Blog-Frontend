import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
    title: string,
    date: Date,
    author: string,
    duration: string
}

export function BlogCard({
    title,
    date,
    author,
    duration
}: BlogCardProps){

    const dateString = new Date(date)

    return (
    <Card className="bg-neutral-200 relative mx-auto w-full max-w-sm px-1 pt-0.5">
      
      <img
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40 p-1"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{duration} min read</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Date Published: {dateString.toLocaleDateString()}
        </CardDescription>
        <CardDescription>
          Written By: {author}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to="" className="w-full">
            <Button className="w-full">Read</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

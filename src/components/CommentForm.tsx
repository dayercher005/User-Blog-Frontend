import { FieldLabel, Field, FieldDescription } from '@/components/ui/field.tsx';
import { Textarea } from '@/components/ui/textarea.tsx';
import { Button } from '@/components/ui/button.tsx';
import { useState } from 'react';
import { redirect } from 'react-router';

interface CommentFormProps{
    blogID: string | undefined
}

export function CommentForm({
    blogID
}: CommentFormProps){

    const [comment, setComment] = useState<string>('');

    const token = localStorage.getItem("token");
    const API = `http://localhost:8080/user/${blogID}/comment`

    async function sendComment(event){
        event.preventDefault();
        try{
            const response = await fetch(API,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ content: comment })
            })

            if(!response.ok){
                throw new Error("Error")
            }

            const data = await response.json();
            redirect(`http://localhost:5173/${blogID}`)
            return data

        } catch(error){
            return error
        }
    }


    return(

        <div className="mx-auto max-w-md">
            <form onSubmit={sendComment} action={`http://localhost:8080/user/${blogID}/comment`} method="POST">
                <Field>
                    <FieldLabel htmlFor="content">Comment</FieldLabel>
                    <FieldDescription>Add your comment here</FieldDescription>
                    <Textarea
                    id="content"
                    className="mb-2.5"
                    onChange={(event) => setComment(event.target.value)}
                    value={comment}
                    required
                    />
                </Field>
                <Field className="pb-2">
                    <Button type="submit">Comment</Button>
                </Field>
            </form>
        </div>
    )
}
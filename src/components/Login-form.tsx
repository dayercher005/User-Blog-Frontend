import { GalleryVerticalEnd } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { Link } from 'react-router';
import { useState } from 'react';
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitLoginForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://localhost:8080/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password}), // Convert data to a JSON string
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      return result;
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (

    <div className={cn("flex flex-col gap-6", className)} {...props}>
      
      <form onSubmit={submitLoginForm} action="/log-in" method="POST">
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              to="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </Link>
            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
            <FieldDescription>
              Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              type="text"
              placeholder="m@example.com"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required
            />
          </Field>
          <Field>
            <Button type="submit">Login</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}


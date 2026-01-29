import { LoginForm } from "@/components/Login-form";
import { Link } from 'react-router';
import { Button } from '@/components/ui/button.tsx';
import { ArrowLeftIcon } from "lucide-react";
export default function LoginPage() {
  return (

    <div>

      <div className="bg-background flex min-h-svh flex-col gap-5 pt-6 md:pl-8">

      <Link className="inline-block" to="/">
        <Button>
          <ArrowLeftIcon className="size-4" />
        </Button>
      </Link>
      <div className="bg-background flex min-h-fit flex-col justify-center items-center p-6 md:p-8">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>

    </div>
    
  )
}
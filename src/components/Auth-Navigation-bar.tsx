import {
  Button
} from "@/components/ui/button";
import ToggleMode from '@/components/ToggleModeButton.tsx';
import { Link } from 'react-router';


export function AuthenticatedNavigationBar() {

  return (
    <div className="flex justify-between items-center px-7 py-3">
        <Link to="/">
            <h1 className="text-2xl font-bold">PatchNote</h1>
        </Link>

        <div className="flex items-center">

            <ToggleMode />

            <Link to="/dashboard">
                <Button size="lg" className="bg-neutral-700 m-1.5 p-3 text-md hover:bg-neutral-800 transition">
                    Dashboard
                </Button>
            </Link>
            <Link to="/">
                <Button size="lg" className="bg-neutral-700 m-1.5 p-3 text-md hover:bg-neutral-800 transition">
                    Log Out
                </Button>
            </Link>

        </div>
    </div>
  )
}
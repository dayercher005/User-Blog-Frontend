import { Button } from '@/components/ui/button.tsx';
import { Link } from 'react-router';

export function NotFound(){

    return(
        <div>
            <img src="/src/assets/NotFound.svg" />

            <h1>Not Found</h1>

            <p>You didn't break the internet, but we can't find what you're looking for.</p>
            <p>Click the button below to go back Home.</p>

            <Link to="/">
                <Button>
                    Home
                </Button>
            </Link>

        </div>
    )
}
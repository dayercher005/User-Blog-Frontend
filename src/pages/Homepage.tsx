import { UnauthenticatedNavigationBar } from '@/components/Unauth-Navigation-bar.tsx';
import { AuthenticatedNavigationBar } from '@/components/Auth-Navigation-bar.tsx';
import { useState, useEffect } from 'react';
import { HomepageContent } from '@/components/HomepageContent.tsx';

export function Homepage(){

    const [status, setStatus] = useState<boolean>(false);

    const API = "http://localhost:8080/user";
    const token = localStorage.getItem("token")

    useEffect(() => {

        let ignore = false;

        const ValidateUser = async () => {
            try{
                const response = await fetch(API, {
                    method: "GET", 
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })

                const verification = await response.json();

                if (!ignore){
                    if (verification){
                        setStatus(true);
                    }
                }

            } catch(error){
                return error
            }
        }

        ValidateUser();

        return () => {
            ignore = true
        }
        
    }, [token]);


    if (status) return (
        <div>
            <AuthenticatedNavigationBar />
            <HomepageContent />
        </div>
    )

    return (
        <div>
            <UnauthenticatedNavigationBar />
            <HomepageContent />
        </div>
    )
}
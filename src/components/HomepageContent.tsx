import { FadeIn, RiseUp } from '@/components/AnimateScroll.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ArrowDownIcon } from 'lucide-react';

export function HomepageContent(){

    return(
        <div className="">
            <RiseUp>
                <div className="flex justify-evenly pt-25 pb-10">
                    <div className="max-w-lg">
                        <h1 className="font-bold text-2xl text-center p-5">Unlock your <span className="text-slate-900 underline dark:text-blue-500">Space</span>.</h1>
                        <p className="py-1.2 px-5 font-semibold">Join our community to move beyond the scroll. You'll be able to read the latest blogs, 
                            join the conversation with verified comments, and gain access to trending open source content straight
                            to your dashboard. Your data stays yours; your experience becomes ours.</p>
                    </div>
                    <img className="size-85" src="/src/assets/viewBlog.svg"></img>
                </div>
            </RiseUp>

            <FadeIn className="text-center pb-25">
                <a href="#Authenticate">
                    <Button className="rounded-full animate-bounce">
                        <ArrowDownIcon />
                    </Button>
                </a>
            </FadeIn>

            <RiseUp>
                <div id="Authenticate" className="flex justify-evenly pt-35 pb-5">
                    <img className="size-85" src="/src/assets/authentication.svg"></img>
                    <div className="max-w-lg">
                        <h1 className="font-bold text-2xl text-center p-5">Your <span className="text-slate-900 underline dark:text-blue-500">Privacy</span> hardened.</h1>
                        <p className="py-1.2 px-5 font-semibold"> We take your digital footprint seriously. Our authentication system includes
                            encryption to ensure your profile remains private. Sign up once, browse securely forever.</p>
                    </div>
                </div>
            </RiseUp>

            <FadeIn className="text-center pb-25">
                <a className="" href="#Global">
                    <Button className="rounded-full animate-bounce">
                        <ArrowDownIcon />
                    </Button>
                </a>
            </FadeIn>

            <FadeIn>
                <div id="Global" className="flex justify-evenly py-40">
                    <div className="max-w-lg">
                        <h1 className="font-extrabold text-2xl text-center p-5">A <span className="text-slate-900 underline dark:text-blue-500">Global</span> Perspective, <span className="text-slate-900 underline dark:text-blue-500">Locally</span> felt.</h1>
                        <p className="py-2 px-5 text-md font-semibold"> Great ideas don't need a passport. We've built a pervasive digital home 
                            for thinkers worldwide, ensuring wherever you are, you have a front-row seat in the conversation. Join a 
                            truly international community where the sun never sets on the latest story.</p>
                    </div>
                    <img className="size-85" src="/src/assets/global.svg"></img>
                </div>
            </FadeIn>
        </div>
    )
}
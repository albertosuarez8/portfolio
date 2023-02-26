import React from 'react'
import image from '../assets/glub.png'
import Card from './Card';
import Form from './Form';

const testing = {
    image: image,
    bio: "Testing",
    captionone: "One",
    captiontwo: "Two"
}


function Container(props) {
    return (
        <>
            <div className='max-[639px]:hidden min-[640px]:contents'>
                <main>
                    <div className="p-16 sm:p-14">
                        <h1 className="text-[6rem] 2xl:text-9xl text-zinc-300">Alberto Suarez</h1>
                        <h2 className="text-2xl sm:text-lg text-zinc-300 sm:p-3">Senior Business Analyst & Full Stack Student Developer.
                        </h2>
                    </div>
                </main>
                <div>
                    <div className='w-full flex justify-center text-zinc-300 text-[2.5rem]'>
                        {props.title}
                    </div>
                    <div id='container' className='flex items-center flex-col overflow-y-scroll w-[50vw] h-[50vh]'>
                        <>
                            {(() => {
                                switch (props.title) {
                                    case 'About Me':
                                        return (<Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />);
                                    case 'My Projects':
                                        return (
                                            <>
                                                <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                                                <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                                                <Card image={testing.image} bio={testing.bio} captionone={testing.captionone} captiontwo={testing.captiontwo} />
                                            </>
                                        );
                                    case 'Contact Me':
                                        return (
                                            <Form />
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </>
                    </div>
                </div>
            </div>
            <div className='min-[640px]:hidden '>
                Mobile Content
            </div>
        </>
    );
}

export default Container;
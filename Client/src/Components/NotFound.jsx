import React from 'react'

function NotFound() {
    return (


        <div className="bg-indigo-900 relative overflow-hidden h-screen">
   
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                        You&#x27;re alone here
                    </h1>
                    <p className="font-extrabold text-8xl my-43 text-white animate-bounce">
                        404
                    </p>
                    <h2 className="font-extrabold text-4xl text-center text-white leading-tight hover:underline mt-100">
                        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/home">
                            Go home
                        </a>
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default NotFound;
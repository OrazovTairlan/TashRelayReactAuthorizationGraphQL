import React from 'react';

const Error = () => {
    return (
        <div
            className="
    flex
    items-center
    justify-center
    overflow-hidden
    bg-transparent
    h-screen
    fixed
    top-0
    left-0
    right-0
    bottom-0
    bg-transparent
  "
        >
            <div className="px-40 py-20 bg-transparent rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-blue-600 text-9xl">Error</h1>

                    <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span className="text-red-500">Oops!</span> Something happens
                    </h6>

                    <p className="mb-8 text-center text-gray-500 md:text-lg">
                        We are sorry
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Error;



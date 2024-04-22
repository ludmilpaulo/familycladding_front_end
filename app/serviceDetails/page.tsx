"use client";
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ServiceDetails = () => {
    const [show, setShow] = useState(false);
    const searchParams = useSearchParams();
    const title = searchParams.get('title') || ''; // Provide a default value if null
    const image = searchParams.get('image') || ''; // Provide a default value if null
    const description = searchParams.get('description') || ''; // Provide a default value if null

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center py-12 md:px-6 px-4">
            <div className="w-full md:w-1/2 md:pr-8">
                <Image className="w-full" alt={title} src={image} width={320} height={400} />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{title}</p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">{title}</h1>
                </div>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer rounded mt-4" aria-label="show or hide" onClick={() => setShow(!show)}>
                    <FaChevronDown className={'transform ' + (show ? 'rotate-180' : 'rotate-0')} />
                </button>
                <div className={show ? 'block mt-4' : 'hidden'} dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
};

const SuspenseServiceDetails = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetails />
    </Suspense>
);

export default SuspenseServiceDetails;

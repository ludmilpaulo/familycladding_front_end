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
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <Image className="w-full" alt={title} src={image} width={320} height={400} />
                <Image className="mt-6 w-full" alt={title} src={image} width={320} height={400} />
            </div>
            <div className="md:hidden">
                <Image className="w-full" alt={title} src={image} width={320} height={400} />
                <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                    <Image alt={title} src={image} className="md:w-48 md:h-48 w-full" width={200} height={200} />
                    <Image alt={title} src={image} className="md:w-48 md:h-48 w-full" width={200} height={200} />
                    <Image alt={title} src={image} className="md:w-48 md:h-48 w-full" width={200} height={200} />
                    <Image alt={title} src={image} className="md:w-48 md:h-48 w-full" width={200} height={200} />
                </div>
            </div>
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{title}</p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">{title}</h1>
                </div>
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer rounded" aria-label="show or hide" onClick={() => setShow(!show)}>
                    <FaChevronDown className={'transform ' + (show ? 'rotate-180' : 'rotate-0')} />
                </button>
                <div dangerouslySetInnerHTML={{ __html: description }} />
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

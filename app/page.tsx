"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const [postData, setPostData] = useState([]);

  return (
    <main className="container mx-auto my-3">
        <h1>Siripassorn Siwanno</h1>
        <hr className="my-3"/>
        <button className='bg-green-500 p-3 text-white rounded'>
          <Link href="/create">Create Post</Link>
        </button>
        <div className='grid grid-cols-4 mt-3 gap-5'>
          <div className='shadow-xl my-10 p-10 rounded-xl'>
            <h4>Post Title</h4>
            <img src="img.jpg" alt=""/>
            <p>xxxx</p>
            <div className='mt-5'>
              <Link className='bg-gray-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/edit">Edit</Link>
              <Link className='bg-red-500 text-white border py-2 px-3 rounded-md text-lg my-2' href="/delete">Delete</Link>
            </div>
          </div>
        </div>
        
    </main>
  );
}

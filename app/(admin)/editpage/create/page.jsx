"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function CreatePostPage() {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !image || !content) {
            alert('Please complete all fields');
            return;
        }

        try{
            const res = await fetch("http://localhost:3000/editpage/api/posts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, image, content}),
            })

            if(res.ok){
                router.push('/');
            } else {
                throw new Error("Fail to create the post");
            }
        } catch(error) {
            console.log(error);
        }
    }

  return (
    <div className='container mx-auto py-10'>
        <h3 className='text-3xl font-bold'>Add Project</h3>
        <hr className='my-3'/>
        <Link href="/" className='bg-gray-500 inline-block text-white border py-2 px-3 rounded my-3'>Back</Link>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value)} type="text" className='w-[300px] block bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Post title'></input>
            <input onChange={(e) => setImage(e.target.value)} type="text" className='w-[300px] block bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Post img url'></input>
            <textarea onChange={(e) => setContent(e.target.value)} name="" id="" cols="30" row="10" className='w-[300px] block bg-gray-200 py-2 px-3 rounded text-lg my-2' placeholder='Post content'></textarea>
            <button type='submit' className='bg-blue-500 text-white border py-2 px-3 rounded my-3'>Add Post</button>
        </form>
    </div>
  )
}

export default CreatePostPage
import { connectMongoDB } from "../../../lib/mongodb";
import Post from "../../../models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, image, content } = await req.json();
    console.log(title, image, content);
    await connectMongoDB();
    await Post.create({title, image, content});
    return NextResponse.json({message: "Post created"},{status: 201});
}

export async function GET() {
    await connectMongoDB();
    const posts = await Post.find();
    return NextResponse.json({ posts });
}

import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

// post req
export async function POST(req:Request) {
     try{
        const info = await req.json();
         const collection = dbConnect('submissions');
         const result = await collection.insertOne(info)
         
         console.log(info);

         return NextResponse.json({ 
                  success: true,
                  insertedId: result.insertedId 
                }, { status: 201 });

     }catch(err){
        console.error('Database operation failed:', err);
            return NextResponse.json({
            success: false,
            error: 'Internal server error'
            }, { status: 500 });
     }

}
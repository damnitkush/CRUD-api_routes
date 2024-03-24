import { NextResponse } from "next/server";

export async function GET(request){

    const {searchParams} = new URL(request.url);
    // const name = searchParams.get('name');
    // console.log(searchParams)
    // console.log(name);


    const obj = Object.fromEntries(searchParams.entries());
    console.log(obj);

    return NextResponse.json({obj}) 
}
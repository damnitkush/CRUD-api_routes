import { NextResponse } from "next/server";
import { users } from "@/lib/db";

//delete
export const DELETE = async(req)=>{

    try{
        const id = req.url.split('user/')[1];
        console.log(id);
        const userIndex = users.findIndex((user)=> user.id.toString() === id);

        if(userIndex === -1){
            return NextResponse.json({message :'data not found'});

        }
        users.splice(userIndex,1);
        console.log(users);
        return NextResponse.json({message:"deleted"});
    }
    catch(err){
        console.log(err);

    }

}

//get particular element
export const GET = async(req) =>{
    try{
        const id = req.url.split("user/")[1];

        const userIndex = users.findIndex((user)=> user.id.toString() === id);

        if(userIndex === -1){
            return NextResponse.json({message :'data not found'},users);
        }
        return NextResponse.json(users[userIndex]);
    }catch(err){

    }
}

//update
export const PUT = async(req) =>{
    try{
        const id = req.url.split('user/')[1];
        const {username} = await req.json();

        const user = users.find((user) => user.id.toString() === id);

        user.username = username;

        console.log(users);
        return new NextResponse({message:'user updated'})

    }catch(err){
        return new NextResponse({message:'error occured'})
    }
}
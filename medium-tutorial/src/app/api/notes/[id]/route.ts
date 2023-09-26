import { prisma } from "@/libs/prisma"
import { NextResponse } from "next/server"

export async function GET(request:any, { params }:any) {
    try {
        console.log(params.id)
        const result = await prisma.note.findUnique({where: {
            id: Number(params.id)
    }});
    console.log(result);
    
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json({ error: error})
    }
}
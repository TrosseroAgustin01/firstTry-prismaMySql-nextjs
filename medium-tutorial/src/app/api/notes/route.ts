import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.note.findMany();
        /* console.log(result) */
        return NextResponse.json(result);
    } catch (error:any) {
        return NextResponse.json({
            error:error
        })
    }
}


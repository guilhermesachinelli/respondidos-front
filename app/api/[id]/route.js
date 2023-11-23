import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL;
export async function POST(request, { params }) {
    const { id } = params;
    try {
        const response = await axios.post(`${url}/questions/correc/${id}`, );;
        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_POST]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }
};
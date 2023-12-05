import axios from "axios";

import { NextResponse } from "next/server";



let url = `http://172.30.208.1:5005/Members?page=1`;

export const changePage = (page) => {

  url = `http://172.30.208.1:5005/Members?page=${page}`;
  console.log(url);
}


export async function GET() {
  try {
    const response = await axios.get(url);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function POST(request) {
  const params = await request.json();

  try {
    const response = await axios.post(url, params);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
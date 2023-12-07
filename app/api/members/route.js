import axios from "axios";

import { NextResponse } from "next/server";



const url = process.env.base_url + `/Members`;
let pageUrl = url + `?page=1`;


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  pageUrl = url + `?page=${page}`;

  console.log("page", page);
  try {
    const response = await axios.get(pageUrl);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_GET]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}

export async function POST(request) {
  const params = await request.json();
  console.log("params", params);

  try {
    const response = await axios.post(url, params);
    console.log("response", response);

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[ORDER_POST]", error);
    return new NextResponse("Erro interno do servidor!", { status: 500 });
  }
}
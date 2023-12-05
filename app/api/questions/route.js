import axios from "axios";

import { NextResponse } from "next/server";

const url = "http://localhost:5000/question";

export async function GET(request) {
  const {searchParams} = new URL(request.url);
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");

  try {
    const response = await axios.get(url + "?category=" + category + "&difficulty=" + difficulty );
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
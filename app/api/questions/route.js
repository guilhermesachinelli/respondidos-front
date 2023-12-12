import axios from "axios";

import { NextResponse } from "next/server";

const url = process.env.BASE_URL + '/Question';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const difficulty = searchParams.get("difficulty");

  console.log({ category }, { difficulty })

  try {
    if (category || difficulty) {
      const categoryCondition = category ? `category=${category}` : "";
      const difficultyCondition = difficulty ? `&difficulty=${difficulty}` : "";

      const newUrl = `${url}?${categoryCondition}${difficultyCondition}`;


      const response = await axios.get(newUrl || otherURL);
      return NextResponse.json(response.data);
    } else {
      const response = await axios.get(url);
      return NextResponse.json(response.data);
    }
  }
  catch (error) {
    console.log("[QUESTION_GET]", error);
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
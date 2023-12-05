import axios from "axios";

import { NextResponse } from "next/server";

const url = `http://10.88.204.18:5005/members`;

export async function DELETE(request,{ params } ) {
  const {id} = params;
  try{
      const response = await axios.delete(`${url}/${id}`);
      return NextResponse.json(response.data);
  }catch(error){
      console.log("[ORDER_DELETE]", error);
      return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}

export async function PUT(request,{ params } ) {
  const {id} = params;
  try{
      const response = await axios.put(`${url}/${id}`, request.body);
      return NextResponse.json(response.data);
  }catch(error){
      console.log("[ORDER_UPDATE]", error);
      return new NextResponse("Erro interno do servidor", { status: 500 });
  }
}
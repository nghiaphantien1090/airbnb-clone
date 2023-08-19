import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export  async function POST(req:NextRequest ,res:NextResponse) {
  

  const { email, password } = await req.json()
    console.log('data',email,password)
  
    const hashedPassword = await bcrypt.hash(password, 10) ;
    type DataUser={
        email:string,
        password:string
    }
    const dataUser:DataUser={
        email:email as string,
        password:hashedPassword
    }
   
   //  const user = await prisma.user.create({
    //   data: dataUser,
    // });

    return new Response(
    JSON.stringify({
      name: 'Jim Halpert',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  )
}

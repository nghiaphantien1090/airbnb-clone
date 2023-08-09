import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export  async function handle(req:NextRequest ,res:NextResponse) {
  

  const { email, password } = await req.json()
    console.log(email,password)
  try {
    const hashedPassword = await bcrypt.hash(password, 10) ;
    type DataUser={
        email:string,
        password:string
    }
    const dataUser:DataUser={
        email:email as string,
        password:hashedPassword
    }
   
    // const user = await prisma.user.create({
    //   data: dataUser,
    // });

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
export {handle as POST}
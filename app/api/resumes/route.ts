import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
// TODO: Replace with Firebase auth

export async function GET(request: NextRequest) {
  try {
    // TODO: Implement Firebase Admin SDK for server-side authentication
    // 1. Get the Authorization header from the request
    // const authorization = request.headers.get('Authorization');
    // if (authorization?.startsWith('Bearer ')) {
    //   const idToken = authorization.split('Bearer ')[1];
    //   const decodedToken = await admin.auth().verifyIdToken(idToken);
    //   const userId = decodedToken.uid;

    //   const resumes = await sql`
    //     SELECT r.*, u.name as user_name 
    //     FROM resumes r
    //     JOIN users u ON r.user_id = u.id
    //     WHERE u.firebase_uid = ${userId}
    //     ORDER BY r.updated_at DESC
    //   `
    //   return NextResponse.json({ resumes })
    // } else {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    // }

    // For now, returning an empty array
    return NextResponse.json({ resumes: [] })
  } catch (error) {
    console.error("Error fetching resumes:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    // TODO: Implement Firebase Admin SDK for server-side authentication
    // 1. Get the Authorization header and verify the token
    // const authorization = request.headers.get('Authorization');
    // if (authorization?.startsWith('Bearer ')) {
    //   const idToken = authorization.split('Bearer ')[1];
    //   const decodedToken = await admin.auth().verifyIdToken(idToken);
    //   const userId = decodedToken.uid;
    //   const userEmail = decodedToken.email;
    //   const userName = decodedToken.name;

    //   const { title, template_id, data } = await request.json()

    //   // First, ensure user exists in our database
    //   const users = await sql`
    //     INSERT INTO users (firebase_uid, email, name)
    //     VALUES (${userId}, ${userEmail}, ${userName})
    //     ON CONFLICT (firebase_uid) DO UPDATE SET
    //       email = EXCLUDED.email,
    //       name = EXCLUDED.name,
    //       updated_at = NOW()
    //     RETURNING id
    //   `
    //   const dbUserId = users[0].id

    //   // Create the resume
    //   const resumes = await sql`
    //     INSERT INTO resumes (user_id, title, template_id, data)
    //     VALUES (${dbUserId}, ${title}, ${template_id}, ${JSON.stringify(data)})
    //     RETURNING *
    //   `
    //   return NextResponse.json({ resume: resumes[0] })
    // } else {
    //   return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    // }

    // For now, returning an error
    return NextResponse.json({ error: "Not implemented" }, { status: 501 })
  } catch (error) {
    console.error("Error creating resume:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

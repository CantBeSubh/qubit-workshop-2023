import { NextResponse } from 'next/server'

export function GET() {
    //A general GET request to the route will return a 200 status code and a JSON object with a "Hello" and "World" key-value pair.
    return NextResponse.json({ "Hello": "World", "Status": "OK" }, { status: 200 })
}

export async function POST(req: Request) {
    const { input } = await req.json()
    // If the input is missing, return a 400 status code and a JSON object with an "error" key-value pair.
    if (!input) {
        return NextResponse.json({ error: "Missing input" }, { status: 400 })
    }
    try {
        const response = await fetch(
            `${process.env.API_LINK}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "text": input }),
            }
        );
        const result = await response.json();
        const { language } = result
        return NextResponse.json({ language }, { status: 200 })

    }
    catch (e) {
        return NextResponse.json({ error: "Server Error. Try again in a while." }, { status: 500 })
    }
}
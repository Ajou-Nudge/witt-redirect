import { NextRequest, NextResponse } from "next/server";
import * as cheerio from 'cheerio';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");

    if (!url) {
        return NextResponse.json({ error: "Invalid or missing URL parameter" }, { status: 400 });
    }

    try {
        const decodedUrl = decodeURIComponent(url);
        const response = await fetch(decodedUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch URL: ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const metadata = {
            title: $('head > title').text() || null,
            description: $('meta[name="description"]').attr('content') || null,
            ogTitle: $('meta[property="og:title"]').attr('content') || null,
            ogDescription: $('meta[property="og:description"]').attr('content') || null,
            ogImage: $('meta[property="og:image"]').attr('content') || null,
        };

        return NextResponse.json(metadata);
    } catch (err: any) {
        return NextResponse.json({ error: `Error fetching metadata: ${err.message}` }, { status: 500 });
    }
}

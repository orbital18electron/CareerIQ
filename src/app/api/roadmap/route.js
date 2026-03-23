// src/app/api/roadmap/route.js
import { NextResponse } from "next/server";
import { ROADMAP_KB, DEFAULT_ROADMAP } from "@/lib/roadmapKB";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const career = searchParams.get("career");
    if (!career) return NextResponse.json({error:"Missing career param"},{ status:400 });
    const roadmap = ROADMAP_KB[career] ?? DEFAULT_ROADMAP;
    return NextResponse.json({ career, hasSpecificRoadmap: Boolean(ROADMAP_KB[career]), roadmap });
  } catch (err) {
    return NextResponse.json({error:"Internal server error"},{ status:500 });
  }
}

// src/app/api/inference/route.js
import { NextResponse } from "next/server";
import { runInference } from "@/lib/inferenceEngine";

export async function POST(request) {
  try {
    const body = await request.json();
    const { interests, skills, subjects, grades, env,
            interestsStrength, skillsStrength, subjectsStrength } = body;

    if (!interests||!skills||!subjects||!grades||!env)
      return NextResponse.json({error:"Missing required fields"},{ status:400 });

    const facts = {
      interests, skills, subjects, grades, env,
      interestsStrength: interestsStrength||{},
      skillsStrength:    skillsStrength||{},
      subjectsStrength:  subjectsStrength||{},
    };

    const { results, conflicts, totalFiredRules } = runInference(facts);

    return NextResponse.json({ results, conflicts, totalFiredRules, topCareer: results[0]?.name||null });
  } catch (err) {
    console.error(err);
    return NextResponse.json({error:"Internal server error"},{ status:500 });
  }
}

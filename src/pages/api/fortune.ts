// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type TellMeData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<TellMeData>) {
  if (req.method != "GET") {
    return res.status(403).json({ message: "Not valid method" });
  }

  const luckData = await fetch("https://ml-lesson10.vercel.app/api/luckScore", {
    method: "GET",
  });

  const luck = await luckData.json();

  const openaiKey = (process.env.API_KEY as string) || "";

  const postData = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are an ai fortuneteller who gives an advice to users based on their luck of the day. Users luck will be given in json format, with different sector. You have to give an advice with plain English.",
      },
      {
        role: "user",
        content: `My luck of the day is: ${JSON.stringify(luck)}`,
      },
    ],
  };

  const gptData = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openaiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  const gptJson = await gptData.json();
  const message = gptJson.choices[0].message.content;

  return res.status(200).json({ message: message });
}

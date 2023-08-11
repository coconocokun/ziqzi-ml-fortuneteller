import type { NextApiRequest, NextApiResponse } from "next";

export type TellMeData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<TellMeData>) {
  // 0-0. Method check
  if (req.method != "GET") {
    return res.status(403).json({ message: "Not valid method" });
  }
  // 0-1. SET API key
  const openaiKey = (process.env.API_KEY as string) || "";

  // 1-0. GET luck data from Luck API
  const luckResponse = await fetch("https://ml-lesson10.vercel.app/api/luckScore", {
    method: "GET",
  });
  // 1-1. Retrieve JSON data from luck response
  const luckJson = await luckResponse.json();

  // 2-0. Create POST body data for ChatGPT
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
        content: `My luck of the day is: ${JSON.stringify(luckJson)}`,
      },
    ],
  };

  // 2-1. POST request to ChatGPT
  const gptData = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openaiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  // 2-2. Retrieve JSON from ChatGPT response
  const gptJson = await gptData.json();
  // 2-3. Retrieve message from the JSON
  const message = gptJson.choices[0].message.content;

  // 3. Return the response
  return res.status(200).json({ message: message });
}

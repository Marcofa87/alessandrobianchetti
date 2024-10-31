import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token, email } = req.query;

  if (!token || !email) {
    return res.status(400).json({ error: "Invalid token or email" });
  }

  res.status(200).json({ message: "Email verified successfully!" });
}

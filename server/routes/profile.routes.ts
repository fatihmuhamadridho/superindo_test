import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { AuthController } from "../controllers/auth.controller";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const response = await AuthController.profile(String(token));
    if (!response) return res.status(400).json({ status: false, message: "unauthenticated" });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.stack });
  }
});

export default router.handler({
  onError: (err: any, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).json({ error: err.stack });
  },
});

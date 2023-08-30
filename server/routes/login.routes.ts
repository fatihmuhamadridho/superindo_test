import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { AuthController } from "../controllers/auth.controller";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  try {
    const response = await AuthController.login({ username, password });
    res.status(200).json({ status: true, data: response });
  } catch (error: any) {
    res.status(500).json({ status: false, error: error.stack });
  }
});

export default router.handler({
  onError: (err: any, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).json({ error: err.stack });
  },
});

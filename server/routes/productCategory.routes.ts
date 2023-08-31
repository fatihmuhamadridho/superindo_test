import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { ProductCategoryController } from "../controllers/productCategory.controller";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await ProductCategoryController.getAll();
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

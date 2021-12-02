import { Router } from "express";

import NewsletterController from "./controllers/newsletter";

const router = Router();

// Newsletter Routes
router.post('/newsletter/register/:email', NewsletterController.registerNewsletter);


export default router;

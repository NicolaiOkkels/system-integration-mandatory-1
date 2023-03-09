import { Router } from "express";
import track from "../mongoose_models/track.js"

const router = Router();

/**
 * @openapi
 * /api/tracks:
 *   get:
 *     description: Get all tracks
 *     responses:
 *       200:
 *         description: Returns all tracks
 */
router.get("/api/tracks", async (req, res) => {
    const tracks = await track.find();
    res.send({ data: tracks });
});

/**
 * @openapi
 * /api/track:
 *   post:
 *     description: Create a new track
 *     responses:
 *       200:
 *         description: Returns the track that was created
 */
router.post("/api/track", async (req, res) => {
    const track = req.body;
    await track.create(track);
    res.send({ data: track });
});

export default router;
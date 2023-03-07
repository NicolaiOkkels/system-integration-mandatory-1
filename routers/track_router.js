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
router.get("/api/tracks", (req, res) => {
    const tracks = track.find();
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
router.post("/api/track", (req, res) => {
    const track = req.body;
    track.create(track);
    res.send({ data: track });
});

export default router;
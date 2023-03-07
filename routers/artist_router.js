import { Router } from "express";
import artist from "../mongoose_models/artist.js"

const router = Router();

/**
 * @openapi
 * /api/artists:
 *   get:
 *     description: Get all albums
 *     responses:
 *       200:
 *         description: Returns all artists
 */
router.get("/api/artists", (req, res) => {
    const artistBody = artist.find();
    res.send({ data: artistBody });
});

/**
 * @openapi
 * /api/artist:
 *   post:
 *     description: Create a new artist
 *     responses:
 *       200:
 *         description: Returns the artist that was created
 */
router.post("/api/artist", (req, res) => {
    const artistBody = req.body;
    artist.create(artistBody);
    res.send({ data: artistBody });
});

export default router;
import { Router } from "express";
import album from "../mongoose_models/album.js"

const router = Router();

/**
 * @openapi
 * /api/albums:
 *   get:
 *     description: Get all albums
 *     responses:
 *       200:
 *         description: Returns all tracks
 */
router.get("/api/albums", async (req, res) => {
    const albums = await album.find();
    res.send({ data: albums });
});

/**
 * @openapi
 * /api/album:
 *   post:
 *     description: Create a new album
 *     responses:
 *       200:
 *         description: Returns the album that was created
 */
router.post("/api/album", async (req, res) => {
    const albumBody = req.body;
    await album.create(albumBody);
    res.send({ data: albumBody });
});

export default router;
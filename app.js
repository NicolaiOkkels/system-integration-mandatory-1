import express from 'express';
import swaggerUi from'swagger-ui-express';
import swaggerDocument from 'swagger-jsdoc';
import mongoose from "mongoose";

const app = express();
const port = 8080;

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "OpenAPI Example API",
        version: "1.0.0",
        description: "A simple Express API that utilizes OpenAPI",
    },
};

const options = {
    swaggerDefinition,
    apis: ["./routers/*.js"],
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument(options)));

import trackRouter from "./routers/track_router.js";
import artistRouter from "./routers/artist_router.js";
import albumRouter from "./routers/album_router.js";

app.use(trackRouter);
app.use(artistRouter);
app.use(albumRouter);

// Start the server
mongoose.connect("mongodb+srv://user123:TJcHE43NdE10vecg@cluster0.ppon8sk.mongodb.net/?retryWrites=true&w=majority")
    .then(() => app.listen(port, () => console.log(`Server is running on port: ${port}`)))
    .catch((error) => console.log(error.message));
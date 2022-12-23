import express from "express";
import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";

import Home from "../client/components/home";

const app = express();

app.get("/", (req, res) => {
  fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error Occured");
    }

    return res.send(
      data.replace(
        `<div id="root"></div>`,
        `<div id="root">${ReactDOMServer.renderToString(<Home />)}</div>`
      )
    );
  });
});

app.use(
  express.static(path.resolve(__dirname, ".", "dist"), { maxAge: "30d" })
);

app.listen(4000, () => {
  console.log("Listening to http://localhost:4000");
});

import fsPromises from "fs/promises";
import process from "process";

import toml from "toml";

const configPath =
    process.env.NODE_ENV === "development" ? ".env.toml" : ".env.prod.toml";
const content = await fsPromises.readFile(configPath, "utf-8");
const config = toml.parse(content);

export default config;

import { applyMiddleware } from "@reduxjs/toolkit";
import { checker } from "./checker";
import { logger } from "./logger";

export default applyMiddleware(checker, logger);

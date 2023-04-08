/**
 * Import this file to initialize analytics.
 * No need to call any functions.
 */

import { app } from "./common/vars";
import { getAnalytics } from "firebase/analytics";

getAnalytics(app);
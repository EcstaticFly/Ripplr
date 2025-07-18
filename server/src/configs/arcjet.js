import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import { ENV } from "./env.js";

export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }), //protects from SQL injection, XSS, CSRF attacks

    //bot-detection(block all bots except search engines)
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        //may allow further legitimate search engine bots (https://arcjet.com/bot-list)
      ],
    }),

    //rate limiting with token bucket algo
    tokenBucket({
      mode: "LIVE",
      refillRate: 10, //tokens added per interval
      interval: 10, //interval in seconds
      capacity: 15, //maximum tokens in bucket
    }),
  ],
});

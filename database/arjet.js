import arcjet,{shield,tokenBucket,detectBot} from "@arcjet/node";


const aj = arcjet({
 
  key: process.env.ARJET_KEY,
  rules: [
    
    shield({ mode: "LIVE" }),
  
    detectBot({
      mode: "LIVE",
      allow: [
      ],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: "LIVE",

      refillRate: 5, // Refill 5 tokens per interval
      interval: 10, // Refill every 10 seconds
      capacity: 10, // Bucket capacity of 10 tokens
    }),
  ],
});


export default aj
import aj from "../database/arjet.js"; // Ensure the path and extension are correct (if using ES modules)

const arjetMiddleware = async (req, res, next) => {
  try {

const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ message: "Rate limit exceeded" });
      }

      if (decision.reason.isBot()) {
        return res.status(403).json({ message: "Bot detected" });
      }

      return res.status(403).json({ message: "Access Denied" });
    }


    next();
  } catch (error) {
    console.error(`Arjet Error Detected: ${error}`);
    next(error); // Forward error to Express error handler
  }
};

export default arjetMiddleware;

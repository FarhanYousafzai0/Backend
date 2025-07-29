import aj from "../database/arjet";



const arjetMiddleware  = async(req,res,next)=>{


    try {
        const decesion = aj.protect(req);

        if(decesion.isDenied()){
            if(decesion.reason.isRateLimit()) return res.status(429).json({message:"Rate Limit exceded"})
            if(decesion.reason.isBot()) return res.status(403).json({messag:"Bot detected"})


            res.status(403).json({message:"Access Denied"})
        }

        next()


    } catch (error) {
        console.error(`Arjet Error Detected:${error}`);
        next(error);
    }
}
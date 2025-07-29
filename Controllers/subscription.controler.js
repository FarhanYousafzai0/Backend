import Subscription from "../Models/subscription.model.js";

export const SubscriptionTracker = async (req, res, next) => {
  try {
   
    const newSubscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
const { workflowRunId } = await workflowClient.trigger({
      url: `${process.env.SERVER_URL}/api/v1/workflows/subscription/reminder`,
      body: {
        subscriptionId: subscription.id,
      },
      headers: {
        'content-type': 'application/json',
      },
      retries: 0,
    })

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      subscription: newSubscription,
    });

  } catch (error) {
    console.error(`SubTracker API Error: ${error.message}`);

  
    next(error);
  }
};





export const GetUserSubscriptions = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if the requester is the same user
    if (req.user._id.toString() !== id) {
      return res.status(403).json({ message: "You are not the owner of this account." });
    }

    // Find all subscriptions by user ID
    const subscriptions = await Subscription.find({ user: id });

    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    next(error);
  }
};


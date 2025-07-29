import { Router } from "express";
import authorize from "../Middlewares/auth.middleware.js";
import { GetUserSubscriptions, SubscriptionTracker } from "../Controllers/subscription.controler.js";

const subscriptionRouter = Router();

// Get all subscriptions
subscriptionRouter.get('/', (req, res) => res.send({ title: "Get all subscriptions" }));

// Get subscription details by ID
subscriptionRouter.get('/:id', (req, res) => res.send({ title: "Get subscription details" }));

// Create a new subscription
subscriptionRouter.post('/',authorize,SubscriptionTracker);

// Update a subscription by ID
subscriptionRouter.put('/:id', (req, res) => res.send({ title: "Update a subscription" }));

// Delete a subscription by ID
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: "Delete a subscription" }));

// Get all subscriptions for a specific user
subscriptionRouter.get('/user/:id',authorize,GetUserSubscriptions);

// Get upcoming renewals
subscriptionRouter.get('/upcoming-renewels', (req, res) => res.send({ title: "Get upcoming renewals" }));

// Cancel a subscription (better as a PATCH or a separate route if semantically different)
subscriptionRouter.patch('/:id/cancel', (req, res) => res.send({ title: "Cancel a subscription" }));

export default subscriptionRouter;

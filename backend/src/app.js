import express from "express";
import cookieParser from "cookie-parser";

import customerAuthRoutes from "./routers/customer/auth.route.js";
import customerProductRoutes from "./routers/customer/product.route.js";
import wishListRoutes from "./routers/customer/wishlist.route.js";
import customerStoreRoutes from "./routers/customer/store.route.js";
import cartRoutes from "./routers/customer/cart.route.js";
import subscribeRoutes from "./routers/customer/subcribe&coupon.route.js";

import adminAuthRoutes from "./routers/admin/auth.route.js";
import adminProductRoutes from "./routers/admin/product.route.js";
import adminStoreRoutes from "./routers/admin/store.route.js";
import adminPromationRoutes from "./routers/admin/promation.route.js";

import userOrderRoutes from "./routers/order/userOrder.route.js";
import orderRoutes from "./routers/order/order.routes.js";
import adminOrderRoutes from "./routers/order/adminOrderRoutes.js";
import commonSearchRoutes from "./routers/common/search.route.js";

// import orderRoutes from "./routers/order/order.routes.js";
import reviewRoutes from "./routers/order/review.routes.js";
import addressRoutes from "./routers/order/address.routes.js";
import paymentRoutes from "./routers/order/payment.routes.js";
// import adminOrderRoutes from "./routers/order/adminOrderRoutes.js";

const app = express();


app.get("/api/test", (req, res) => {
  res.json({ message: "Rewrite working 🚀" });
});

app.use(cookieParser());

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "100mb" }));

app.use("/api", customerAuthRoutes);
app.use("/api", customerProductRoutes);
app.use("/api", wishListRoutes);
app.use("/api", customerStoreRoutes);
app.use("/api", cartRoutes);
app.use("/api", subscribeRoutes);

app.use("/api", adminAuthRoutes);
app.use("/api", adminProductRoutes);
app.use("/api", adminStoreRoutes);
app.use("/api", adminOrderRoutes);
app.use("/api", adminPromationRoutes);

app.use("/api", orderRoutes);

app.use("/api", commonSearchRoutes);

app.use("/api", orderRoutes);
app.use("/api", reviewRoutes);
app.use("/api", addressRoutes);
app.use("/api", paymentRoutes);
app.use("/api", adminOrderRoutes);

export default app;

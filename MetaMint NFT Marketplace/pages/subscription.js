import React from "react";

//INTERNAL IMPORT
import Style from "../styles/subscription.module.css";
import Subscription from "../Subscription/Subscription";
const subscription = () => {
  const subscriptionArray = [
    {
      plan: "STARTER",
      price: "$10/mo",
      popular: "",
      service: ["Faster Processing", "Customizations"],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "BASIC",
      price: "$20/mo",
      popular: "POPULAR",
      service: [
        "Everything in Starter",
        "100 Builds",
        "Progress Reports",
        "Premium Support",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "PLUS",
      price: "$30/mo",
      popular: "",
      service: [
        "Everything in Basic",
        "Unlimited Builds",
        "Advanced Analytics",
        "Company Evaluations",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
  ];
  return (
    <div className={Style.Subscription}>
      <div className={Style.Subscription_box}>
        <div className={Style.Subscription_box_info}>
          <h1>💎 Subscription</h1>
          <p>Pricing To Fit The Needs Of Anyone</p>
        </div>

        <div className={Style.Subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={1} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;

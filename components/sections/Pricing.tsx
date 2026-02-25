"use client";

import { Button, ButtonProps } from "../ui/button";
import posthog from "posthog-js";

const data = {
  title: "Pricing",
  description: (
    <>
      <span className="font-semibold text-primary">
        You can start Colibri for free on public repos.
      </span>{" "}
     Once a repo is private the plan needs to be upgraded.
    </>
  ),
  plans: [
    {
      name: "Open Source",
      for: "For public repos only.",
      features: [
        "Unlimited anonymous editors",
        "Unlimited history",
        "Unlimited annotations",
        "Realtime collaboration",
        "PR's by Colibri",
        "MDX support (coming soon)",
      ],
      price: "$ FREE",
      priceText: undefined,
      cta: "Try now",
      cta_type: "outline",
      available: true,
    },
    {
      name: "Private",
      priceText: undefined,
      for: "For private repos",
      features: [
        "Everything in Open source",
        "Private repositories",
        "Up to 3 teammates",
        "More coming soon"
      ],
      cta: "Coming soon",
      cta_type: "outline",
      available: false,
    },
    {
      name: "Team",
      priceText: undefined,
      badge: "Most popular",
      for: "For bigger Teams and Organizations",
      features: [
        "Everything in Open source",
        "Everything in Private",
        "Permission handling (coming soon)",
        "MDX support (coming soon)"
      ],
      cta: "Coming soon",
      cta_type: "outline",
      available: false,
    },
  ],
};

const Pricing = () => {
  const handlePlanClick = (planName: string, price: string) => {
    posthog.capture("pricing_plan_clicked", {
      plan_name: planName.toLowerCase().replace(" ", "_"),
      plan_price: price,
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-32">
      <h2 className="text-4xl font-semibold">{data.title}</h2>
      <h3 className="text-lg font-regular text-muted-foreground max-w-[480px] w-full mr-auto">{data.description}</h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {data.plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col h-full gap-2 rounded-2xl border p-5 border-border ${plan.available ? "bg-white" : "bg-white/50 opacity-50"}`}
          >
            <div className="flex-1 flex flex-col gap-2">
              <div>
                <h4 className={`text-md font-semibold ${!plan.available ? "text-muted-foreground" : ""}`}>{plan.name}</h4>
                <p className="text-sm font-regular text-muted-foreground leading-[0.8rem] pt-2">{plan.for}</p>
              </div>
              <ul className="list-disc list-inside pt-4 space-y-1 text-muted-foreground h-[200px]">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {(plan.price != null || plan.priceText != null) && (
              <div className="flex items-end gap-4">
                {plan.price != null && (
                  <h4 className={`text-3xl font-semibold pt-[15px] ${!plan.available ? "text-muted-foreground" : ""}`}>{plan.price}</h4>
                )}
                {plan.priceText != null && plan.priceText !== "" && (
                  <p className="text-sm font-regular text-muted-foreground leading-[0.8rem] pb-1.5">{plan.priceText}</p>
                )}
              </div>
            )}
            </div>
            <Button
              variant={plan.cta_type as ButtonProps["variant"]}
              size="sm"
              className={`w-full mt-4 ${!plan.available ? "border-muted-foreground/40 text-muted-foreground cursor-not-allowed" : ""}`}
              disabled={!plan.available}
              onClick={plan.available ? () => handlePlanClick(plan.name, plan.price ?? "") : undefined}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

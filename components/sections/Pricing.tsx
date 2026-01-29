import { Button, ButtonProps } from "../ui/button";

const data = {
  title: "Pricing",
  description: (
    <>
      <span className="font-semibold text-primary">
        You can start Colibri for free on public repos.
      </span>{" "}
      <br />
      For open source project it stays free for ever. Once a repo is private the plan needs to be upgraded.
    </>
  ),
  plans: [
    {
      name: "Open Source",
      for: "For public repos only.",
      features: [
        "Public repositories",
        "Unlimited collaborators",
        "Unlimited edits",
      ],
      price: "$0",
      priceText: "free forever",
      cta: "Try now",
      cta_type: "outline"
    },
    {
      name: "Private",
      badge: "Most popular",
      for: "For private and public repos.",
      features: [
        "Public repositories",
        "Private repositories",
        "Unlimited collaborators",
        "Unlimited edits",
      ],
      price: "$5",
      priceText: "per seat/mo",
      cta: "Upgrade",
      cta_type: "default"
    },
    {
      name: "Team",
      for: "For private and public repos.",
      features: [
        "Public repositories",
        "Private repositories",
        "Unlimited collaborators",
        "Unlimited edits",
      ],
      price: "$XX",
      priceText: "per mo",
      cta: "Contact us",
      cta_type: "outline"
    },
  ],
};

const Pricing = () => {
  return (
    <div className="w-full flex flex-col gap-4 mt-32">
      <h2 className="text-4xl font-semibold">{data.title}</h2>
      <h3 className="text-lg font-regular text-muted-foreground max-w-[480px] w-full mr-auto">{data.description}</h3>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-12">
        {data.plans.map((plan) => (
          <div key={plan.name} className="flex flex-col gap-2 bg-white rounded-2xl p-5">
            <div>
              <h4 className="text-md font-semibold">{plan.name}</h4>
              <p className="text-sm font-regular text-muted-foreground leading-[0.8rem] pt-2">{plan.for}</p>
            </div>
            <ul className="list-disc list-inside pt-4 space-y-1 text-muted-foreground h-[140px]">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="flex items-end gap-4">
              <h4 className="text-3xl font-semibold pt-[15px]">{plan.price}</h4>
              <p className="text-sm font-regular text-muted-foreground leading-[0.8rem] pb-1.5">{plan.priceText}</p>
            </div>
            <Button variant={plan.cta_type as ButtonProps["variant"]} size="sm" className="w-full mt-4">{plan.cta}</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
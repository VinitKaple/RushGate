import React, { useState } from "react";

const Subscription = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Flash Starter",
      monthly: 4999,
      yearly: 47999,
      description: "Perfect for small shops testing flash sales.",
      features: [
        "Inventory lock (prevents oversell)",
        "Queue management up to 500 concurrent users",
        "Basic real‑time monitoring",
        "First‑come‑first‑served guarantee",
        "Email alerts on stock depletion",
      ],
    },
    {
      name: "Surge Pro",
      monthly: 14999,
      yearly: 143999,
      popular: true,
      description: "For growing brands handling heavy traffic.",
      features: [
        "Everything in Flash Starter",
        "Auto‑scaling queue (handles 5k+ concurrent users)",
        "Admin dashboard with live metrics",
        "Oversell protection & negative stock prevention",
        "Custom waiting room pages",
        "Priority support during flash events",
      ],
    },
    {
      name: "Enterprise Suite",
      custom: true,
      description: "For large marketplaces with extreme demand.",
      features: [
        "Everything in Surge Pro",
        "Unlimited concurrent users",
        "Multi‑region load balancing",
        "Dedicated account manager",
        "SLA with 99.99% uptime guarantee",
        "Custom integrations & on‑prem deployment",
      ],
    },
  ];

  const handlePayment = (plan) => {
    if (plan.custom) {
      window.location.href = "/contactus";
      return;
    }

    const amount = isYearly ? plan.yearly : plan.monthly;
    const duration = isYearly ? "Yearly" : "Monthly";

    window.location.href = `/payment?plan=${plan.name}&amount=${amount}&duration=${duration}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          RushGate Pricing Plans
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Protect your flash sales from overselling and crashes. Our intelligent
          queue and inventory lock ensure the first buyers get the product –
          everyone else is rejected cleanly.
        </p>

        {/* Toggle */}
        <div className="flex justify-center mt-8">
          <div className="bg-white shadow-md rounded-full p-1 flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm ${
                !isYearly
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm ${
                isYearly
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg p-8 border transition hover:shadow-xl ${
              plan.popular
                ? "border-indigo-600 scale-105"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h2 className="text-2xl font-semibold text-gray-800 mt-4">
              {plan.name}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              {plan.description}
            </p>

            {!plan.custom ? (
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-800">
                  ₹{isYearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-gray-500 ml-2">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
            ) : (
              <div className="mt-6 text-3xl font-bold text-gray-800">
                Custom Pricing
              </div>
            )}

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <button
              onClick={() => handlePayment(plan)}
              className={`mt-8 w-full py-3 rounded-xl font-medium transition ${
                plan.popular
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {plan.custom ? "Contact Sales" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>

      {/* Why Choose Section */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why FlashGuard?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-800">
              Never Oversell
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Atomic inventory checks guarantee that stock never goes negative,
              even under 10,000 concurrent checkouts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-800">
              First‑Come, First‑Served
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Our fair‑queue algorithm ensures the earliest users get the
              product; everyone else receives a clean rejection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-800">
              Real‑Time Monitoring
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Watch incoming requests, queue length, and inventory in real time
              with our live dashboard.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Subscription;
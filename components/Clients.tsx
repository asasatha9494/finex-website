"use client";

import { useEffect, useState } from "react";
import { MapPin, X } from "lucide-react";

const activeClients = [
  {
    name: "Active Client",
    location: "Location coming soon",
    service: "Service coming soon",
    description:
      "Client information will be added here as FineX begins working with clients.",
  },
];

const pastClients = [
  {
    name: "Past Client",
    location: "Location coming soon",
    service: "Service coming soon",
    description:
      "Previous client information will be added here when available.",
  },
];

const reviews = [
  {
    quote:
      "Client review content will be added here once FineX begins collecting approved testimonials.",
    name: "Client Review",
    location: "Location coming soon",
  },
  {
    quote:
      "Approved client feedback will be displayed in this section.",
    name: "Client Review",
    location: "Location coming soon",
  },
  {
    quote:
      "Real client experiences will be added here in the future.",
    name: "Client Review",
    location: "Location coming soon",
  },
];

export default function Clients() {
  const [type, setType] = useState<"active" | "past">("active");

  const [selectedClient, setSelectedClient] = useState<
    (typeof activeClients)[number] | null
  >(null);

  const [currentReview, setCurrentReview] = useState(0);

  const clients = type === "active" ? activeClients : pastClients;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentReview];

  return (
    <section
      id="clients"
      className="bg-[#eae7e0] px-6 py-24 text-[#1c1a17] md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
            Our Clients
          </p>

          <h2 className="finex-heading mt-4 text-5xl leading-[0.95] md:text-7xl">
            Building
            <br />
            <span className="text-[#ef7d24]">
              trusted relationships.
            </span>
          </h2>

          <p className="finex-body mt-7 max-w-xl text-base leading-7 text-[#5c584f]">
            We work with businesses that value accurate financial management,
            clear communication and reliable support.
          </p>
        </div>

        {/* Client Tabs */}
        <div className="mt-12 flex gap-3">
          <button
            onClick={() => setType("active")}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              type === "active"
                ? "bg-[#1c1a17] text-[#eae7e0]"
                : "border border-[#1c1a17] text-[#1c1a17]"
            }`}
          >
            Active Clients
          </button>

          <button
            onClick={() => setType("past")}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              type === "past"
                ? "bg-[#1c1a17] text-[#eae7e0]"
                : "border border-[#1c1a17] text-[#1c1a17]"
            }`}
          >
            Past Clients
          </button>
        </div>

        {/* Client Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <button
              key={client.name}
              onClick={() => setSelectedClient(client)}
              className="group text-left"
            >
              <div className="border border-[#bdb8ad] bg-[#eae7e0] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ef7d24]">

                <div className="flex items-center justify-between">
                  <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
                    {type === "active"
                      ? "Active Client"
                      : "Past Client"}
                  </p>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <h3 className="finex-heading mt-8 text-3xl">
                  {client.name}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm text-[#5c584f]">
                  <MapPin size={15} />
                  {client.location}
                </div>

                <p className="finex-body mt-5 text-sm leading-6 text-[#5c584f]">
                  {client.description}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#ef7d24]">
                  View details
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Reviews */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="finex-mono text-xs uppercase tracking-[0.2em] text-[#ef7d24]">
              Client Reviews
            </p>

            <h3 className="finex-heading mt-4 text-4xl md:text-5xl">
              What our clients say.
            </h3>
          </div>

          <div className="mt-10 overflow-hidden border border-[#1c1a17] bg-[#1c1a17] p-8 text-[#eae7e0] md:p-12">

            <div
              key={currentReview}
              className="animate-[fadeIn_0.6s_ease-in-out]"
            >
              <div className="text-3xl text-[#ef7d24]">
                "
              </div>

              <p className="finex-body mt-5 max-w-3xl text-xl leading-8 md:text-2xl">
                {review.quote}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold">
                    {review.name}
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-sm text-[#a9a49a]">
                    <MapPin size={14} />
                    {review.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Review indicators */}
            <div className="mt-10 flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  aria-label={`Show review ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? "w-8 bg-[#ef7d24]"
                      : "w-2 bg-[#5c584f]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Client Popup */}
      {selectedClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
          onClick={() => setSelectedClient(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#eae7e0] p-8 text-[#1c1a17] md:p-10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#bdb8ad]"
              aria-label="Close"
            >
              <X size={17} />
            </button>

            <p className="finex-mono text-[10px] uppercase tracking-[0.15em] text-[#ef7d24]">
              {type === "active"
                ? "Active Client"
                : "Past Client"}
            </p>

            <h3 className="finex-heading mt-4 text-4xl">
              {selectedClient.name}
            </h3>

            <div className="mt-6 space-y-4 text-sm text-[#5c584f]">
              <p>
                <strong>Location:</strong>{" "}
                {selectedClient.location}
              </p>

              <p>
                <strong>Service:</strong>{" "}
                {selectedClient.service}
              </p>

              <p>
                <strong>About:</strong>{" "}
                {selectedClient.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
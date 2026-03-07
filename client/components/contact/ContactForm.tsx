"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }

      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="rounded-2xl bg-white shadow-[var(--shadow-soft)] border border-[var(--border)] p-8 sm:p-10 animate-card-in animate-card-in-delay-2">
      <h2 className="font-serif text-2xl font-semibold text-[var(--green-key-dark)]">
        Get in Touch
      </h2>
      <p className="mt-3 text-[var(--muted)]">
        For reservations, safari bookings, or any enquiries, reach out below.
      </p>

      {formState === "success" && (
        <div className="mt-6 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-sm">
          ✅ Your message has been sent! We'll get back to you within 24 hours.
        </div>
      )}

      {formState === "error" && (
        <div className="mt-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-red-800 text-sm">
          ❌ {errorMessage}
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--green-key-dark)]"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--green-key)] focus:outline-none focus:ring-1 focus:ring-[var(--green-key)]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--green-key-dark)]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--green-key)] focus:outline-none focus:ring-1 focus:ring-[var(--green-key)]"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--green-key-dark)]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-2 block w-full rounded-xl border border-[var(--border)] bg-[var(--cream)]/50 px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--green-key)] focus:outline-none focus:ring-1 focus:ring-[var(--green-key)]"
            placeholder="Your message..."
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
          disabled={formState === "submitting"}
        >
          {formState === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

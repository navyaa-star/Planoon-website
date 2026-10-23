
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactEmail = "aquaisinnovationlab@gmail.com";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const mailSubject = encodeURIComponent(subject || "Website enquiry");
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${mailSubject}&body=${mailBody}`;
  }

  return (
    <main className="min-h-screen bg-[#f5f8f2] text-black">
      {/* Header */}
      <header className="border-b border-gray-200 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-extrabold text-[#9dfc38]">
            Planboon<span className="text-white">.</span>
          </Link>

          <Link
            href="/"
            className="text-sm font-medium text-white transition hover:text-[#9dfc38]"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Centered heading */}
      <section className="px-6 pb-8 pt-14 text-center sm:pt-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#62a91b]">
          Get in touch
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Let&apos;s <span className="text-[#65b51e]">connect.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Have a question, suggestion, or idea? We&apos;d love to hear from
          you. Send us a message and let&apos;s make something wonderful happen.
        </p>
      </section>

      {/* Centered contact card */}
      <section className="mx-auto max-w-3xl px-5 pb-16">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-black/5">
          {/* Green accent */}
          <div className="h-2 bg-[#9dfc38]" />

          <div className="p-6 sm:p-10">
            {/* Contact information */}
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaffd6] text-2xl">
                ✉️
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Contact information
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We&apos;re here to help with your questions and enquiries.
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 inline-block break-all font-semibold text-[#4c8d13] hover:underline"
              >
                {contactEmail}
              </a>
            </div>

            {/* Address */}
            <div className="mt-8 rounded-2xl bg-[#f5f8f2] p-5 text-center sm:p-6">
              <div className="text-2xl" aria-hidden="true">
                📍
              </div>

              <h3 className="mt-2 text-lg font-bold">Our office address</h3>

              <address className="mt-3 text-sm not-italic leading-7 text-gray-600">
                Building No./Flat No.: P-2-2202
                <br />
                Road/Street: SECTOR-SPORT CITY ADJOINING
                <br />
                Locality: SPORTS HOME GH - 2
                <br />
                Noida, Gautambuddha Nagar
                <br />
                Uttar Pradesh – 201306
                <br />
                India
              </address>
            </div>
</div>

            </div> 
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-black px-6 py-6 text-center">
        <p className="text-sm text-gray-400">
          © 2026 <span className="font-semibold text-[#9dfc38]">Planboon</span>.
          All rights reserved.
        </p>
      </footer>
    </main>
  );
}

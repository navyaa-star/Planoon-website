
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-extrabold tracking-tight text-[#a6ff3b]">
            Planboon<span className="text-white">.</span>
          </a>

          <div className="flex items-center gap-4 text-sm font-medium sm:gap-8">
            <a href="#about" className="hidden text-gray-300 transition hover:text-[#a6ff3b] sm:block">
              About Us
            </a>
            <a href="#mission" className="hidden text-gray-300 transition hover:text-[#a6ff3b] sm:block">
              Our Mission
            </a>
            <a
              href="/contact"
              className="rounded-full bg-[#a6ff3b] px-5 py-3 font-bold text-black transition hover:bg-[#8ee526] hover:shadow-lg hover:shadow-[#a6ff3b]/20"
            >
              Contact Us <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      </header>

   {/* Hero */}
<section className="relative overflow-hidden bg-white text-black">
  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#a6ff3b]/20 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-[#a6ff3b]/10 blur-3xl" />

  <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28 lg:py-32">
    <div>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a6ff3b] bg-[#a6ff3b]/15 px-4 py-2 text-sm font-semibold text-black">
        <span className="h-2 w-2 rounded-full bg-[#65ad20]" />
        A little about us
      </div>

      <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
        Every celebration deserves to be{" "}
        <span className="text-[#65ad20]">special.</span>
      </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              We believe the best moments in life are the ones we share.
              Planboon brings people, ideas, and celebrations together to
              make planning an event feel simpler and more joyful.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full bg-[#a6ff3b] px-7 py-4 font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#8ee526]"
              >
                Get to know us <span aria-hidden="true">→</span>
              </a>
              <a
                href="/contact"
                className="font-semibold text-white transition hover:text-[#a6ff3b]"
              >
                Let&apos;s talk ↗
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-gray-400">
              <span>✳ Made for meaningful moments</span>
              <span>✳ Built around connection</span>
            </div>
          </div>

          {/* Celebration card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#a6ff3b]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] p-7 shadow-2xl sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-wide text-gray-300">
                  THE PLANBOON FEELING
                </span>
                <span className="rounded-full bg-[#a6ff3b] px-3 py-1 text-xs font-bold text-black">
                  Celebrate
                </span>
              </div>

              <div className="mt-10 flex aspect-[5/4] flex-col items-center justify-center rounded-3xl bg-[#a6ff3b] px-5 text-center text-black">
                <span className="text-7xl sm:text-8xl" role="img" aria-label="Celebration">
                  🎉
                </span>
                <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                  Make it memorable.
                </h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-black/70 sm:text-base">
                  More meaningful moments. More reasons to celebrate.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <span className="text-2xl">🎈</span>
                  <p className="mt-2 text-xs font-medium text-gray-300">Joy</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <span className="text-2xl">💚</span>
                  <p className="mt-2 text-xs font-medium text-gray-300">Together</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <span className="text-2xl">✨</span>
                  <p className="mt-2 text-xs font-medium text-gray-300">Memories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="scroll-mt-24 bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#589c17]">
            Who we are
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Bringing people together,
            <span className="text-[#65ad20]"> one event at a time.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Planning a celebration should be exciting, not overwhelming.
            Planboon is built around a simple idea: make it easier for people
            to organize gatherings, invite their loved ones, and enjoy the
            moments that matter. From personal milestones to special
            celebrations, we want to help turn plans into memories.
          </p>

          <div className="mx-auto mt-10 h-1.5 w-20 rounded-full bg-[#a6ff3b]" />
        </div>
      </section>

      {/* Mission and Vision */}
      <section id="mission" className="scroll-mt-24 bg-[#f5f8f2] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#589c17]">
              Our purpose
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What drives us forward.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#a6ff3b] hover:shadow-xl hover:shadow-black/5 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a6ff3b] text-2xl">
                💚
              </div>
              <h3 className="mt-7 text-2xl font-extrabold">Our Mission</h3>
              <p className="mt-4 leading-8 text-gray-600">
                To make event planning more convenient and enjoyable by
                helping people organize their celebrations and bring the
                right people together.
              </p>
              <div className="mt-7 h-1 w-12 rounded-full bg-[#a6ff3b] transition-all group-hover:w-20" />
            </article>

            <article className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#a6ff3b] hover:shadow-xl hover:shadow-black/5 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-2xl">
                <span aria-hidden="true">✨</span>
              </div>
              <h3 className="mt-7 text-2xl font-extrabold">Our Vision</h3>
              <p className="mt-4 leading-8 text-gray-600">
                To make organizing celebrations feel effortless and help
                every gathering become an opportunity to connect, share
                happiness, and create lasting memories.
              </p>
              <div className="mt-7 h-1 w-12 rounded-full bg-black transition-all group-hover:w-20" />
            </article>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#589c17]">
              What matters to us
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              The little things make a big difference.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              The values behind every connection and every celebration.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <article className="rounded-3xl border border-gray-100 bg-[#f8faf6] p-7 text-center transition hover:border-[#a6ff3b] hover:bg-[#f2fbe8]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#a6ff3b] text-3xl" aria-hidden="true">
                🤝
              </div>
              <h3 className="mt-5 text-xl font-extrabold">Connection</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Bringing friends, families, and communities closer together.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-100 bg-[#f8faf6] p-7 text-center transition hover:border-[#a6ff3b] hover:bg-[#f2fbe8]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-3xl" aria-hidden="true">
                🌿
              </div>
              <h3 className="mt-5 text-xl font-extrabold">Simplicity</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Making the journey from an idea to a celebration easier.
              </p>
            </article>

            <article className="rounded-3xl border border-gray-100 bg-[#f8faf6] p-7 text-center transition hover:border-[#a6ff3b] hover:bg-[#f2fbe8]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#a6ff3b] text-3xl" aria-hidden="true">
                💫
              </div>
              <h3 className="mt-5 text-xl font-extrabold">Meaningful Moments</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Keeping the focus on the people and memories that matter most.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="px-6 pb-20 md:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-black px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#a6ff3b]/15 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#a6ff3b]">
              Let&apos;s connect
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Every great celebration starts somewhere.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-300">
              Have a question or want to connect with us? We would love to hear from you.
            </p>
            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#a6ff3b] px-8 py-4 font-extrabold text-black transition hover:-translate-y-0.5 hover:bg-[#8ee526]"
            >
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black px-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <a href="#" className="text-xl font-extrabold text-[#a6ff3b]">
            Planboon<span className="text-white">.</span>
          </a>
          <p className="text-sm text-gray-400">
            Making moments memorable, one celebration at a time.
          </p>
          <p className="text-sm text-gray-400">
            © 2026 Planboon. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

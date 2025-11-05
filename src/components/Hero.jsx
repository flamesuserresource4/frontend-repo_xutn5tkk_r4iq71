import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-teal-100 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white px-3 py-1 text-xs text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" />
            Fresh arrivals just dropped
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Minimal, modern, and made to last.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Discover thoughtfully designed essentials for everyday living. Built with premium materials and a focus on timeless style.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-white hover:bg-neutral-800">
              Shop now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#collections" className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-neutral-800 hover:bg-neutral-50">
              View collections
            </a>
          </div>
        </div>
        <div className="mt-10 grid flex-1 grid-cols-2 gap-4 sm:mt-12 lg:mt-0">
          <div className="h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center sm:h-56 md:h-64" />
          <div className="h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center sm:h-56 md:h-64" />
          <div className="h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center sm:h-56 md:h-64" />
          <div className="h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center sm:h-56 md:h-64" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

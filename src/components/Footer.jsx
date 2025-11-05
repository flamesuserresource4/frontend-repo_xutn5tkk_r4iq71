import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-neutral-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">About</h4>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Balkan Souq brings the flavors of the Arab world to Bosnia — halal groceries, spices, dates, and everyday essentials.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Customer care</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">Shipping</a></li>
              <li><a href="#" className="hover:text-neutral-900">Returns</a></li>
              <li><a href="#" className="hover:text-neutral-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">About us</a></li>
              <li><a href="#" className="hover:text-neutral-900">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Stay updated</h4>
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200/60"
              />
              <button className="whitespace-nowrap rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800">Subscribe</button>
            </div>
            <p className="mt-2 text-xs text-neutral-500">Dobrodošli • أهلاً وسهلاً</p>
            <div className="mt-4 flex items-center gap-3 text-neutral-500">
              <a href="#" aria-label="Instagram" className="rounded-md p-2 hover:bg-neutral-100"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="rounded-md p-2 hover:bg-neutral-100"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="rounded-md p-2 hover:bg-neutral-100"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Balkan Souq. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-800">Privacy</a>
            <a href="#" className="hover:text-neutral-800">Terms</a>
            <a href="#" className="hover:text-neutral-800">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

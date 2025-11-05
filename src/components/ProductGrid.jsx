import React, { useMemo, useState } from 'react';
import { Star, Filter, SlidersHorizontal } from 'lucide-react';

const formatBAM = (n) => `KM ${n.toFixed(2)}`;

const productsSeed = [
  {
    id: 1,
    name: 'Medjool Dates (Premium)',
    price: 24.9,
    rating: 4.8,
    category: 'Dates',
    image: 'https://images.unsplash.com/photo-1594200795666-e682f0f6dcbf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZWRqb29sJTIwRGF0ZXMlMjAlMjhQcmVtaXVtJTI5fGVufDB8MHx8fDE3NjIzNjMzNDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Za’atar Spice Blend',
    price: 6.5,
    rating: 4.6,
    category: 'Spices',
    image: 'https://images.unsplash.com/photo-1700227280140-ee5a75cc096b?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIzNjMzNDZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Halva Sesame Sweet',
    price: 4.9,
    rating: 4.4,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1631395087808-7e580856f20b?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIzNjMzNDh8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Cardamom Coffee',
    price: 11.9,
    rating: 4.7,
    category: 'Tea & Coffee',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Pita Bread (Fresh)',
    price: 3.2,
    rating: 4.5,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1593253787226-567eda4ad32d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Olive Oil (Palestinian)',
    price: 19.5,
    rating: 4.9,
    category: 'Household',
    image: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?q=80&w=1200&auto=format&fit=crop',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-2xl border border-neutral-200/70 bg-white p-3 transition-shadow hover:shadow-lg">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="line-clamp-1 text-sm font-medium text-neutral-900">{product.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            <span>{product.rating}</span>
            <span className="mx-1">·</span>
            <span className="text-neutral-400">{product.category}</span>
          </div>
        </div>
        <div className="rounded-md bg-neutral-100 px-2 py-1 text-sm font-semibold text-neutral-900">{formatBAM(product.price)}</div>
      </div>
      <button className="mt-3 w-full rounded-md bg-neutral-900 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
        Add to cart
      </button>
    </div>
  );
};

const ProductGrid = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Snacks', 'Spices', 'Dates', 'Tea & Coffee', 'Household'];

  const filtered = useMemo(() => {
    return productsSeed.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section id="shop" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Community favorites
        </h2>
        <div className="flex flex-1 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                  category === c
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search (npr. hurme)"
                className="w-48 rounded-md border border-neutral-200 bg-white py-2 pl-3 pr-10 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200/60 md:w-64"
              />
              <SlidersHorizontal className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 rounded-xl border border-neutral-200 bg-white p-10 text-center text-neutral-600">
          No products match your search.
        </div>
      )}
    </section>
  );
};

export default ProductGrid;

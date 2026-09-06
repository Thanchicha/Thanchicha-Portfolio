import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return <main className="min-h-screen px-6 pb-24 pt-40 md:px-12 lg:px-20"><div className="mx-auto max-w-[1100px]"><p className="font-mono text-xs uppercase tracking-widest text-[#EC4899]">404 / ROUTE_NOT_FOUND</p><h1 className="mt-5 text-4xl font-bold text-text-primary">This project page is not available.</h1><Link to="/work" className="mt-8 inline-flex font-mono text-sm font-bold text-[#6366F1]">← Return to selected work</Link></div></main>;
}

import { Search, X } from 'lucide-react';
import { DEFAULT_ROLE } from '../utils/workExplorer';

export default function WorkExplorerControls({
  roles,
  activeRole,
  search,
  activeSkill,
  onRoleChange,
  onSearchChange,
  onClearSkill,
  onReset,
}) {
  const activeRoleLabel = roles.find((role) => role.slug === activeRole)?.label;
  const hasActiveFilters = activeRole !== DEFAULT_ROLE || Boolean(search) || Boolean(activeSkill);

  return (
    <section aria-labelledby="work-explorer-title" className="mt-12 border-y border-gray-200 py-7 dark:border-gray-800">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="section-header">FIND_RELEVANT_WORK</p>
          <h2 id="work-explorer-title" className="mt-3 text-2xl font-bold tracking-tight text-text-primary">Explore by role</h2>
        </div>
        <label className="relative block w-full lg:max-w-sm">
          <span className="sr-only">Search projects</span>
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-text-muted" />
          <input
            type="search"
            aria-label="Search projects"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search projects or skills"
            className="min-h-11 w-full rounded-full border border-gray-200 bg-white py-2 pl-11 pr-10 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-[#6366F1] focus:ring-2 focus:ring-[#c7d2fe] dark:border-gray-700 dark:bg-[#110f17]"
          />
          {search && <button type="button" aria-label="Clear search" onClick={() => onSearchChange('')} className="absolute right-2 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-text-muted hover:bg-[#f1f5f9] hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] dark:hover:bg-[#29263d]"><X aria-hidden="true" className="size-4" /></button>}
        </label>
      </div>

      <div className="mt-7 -mx-1 overflow-x-auto px-1 pb-2">
        <div className="flex min-w-max gap-2" role="group" aria-label="Choose a career focus">
          {roles.map((role) => {
            const selected = role.slug === activeRole;
            return <button key={role.slug} type="button" aria-pressed={selected} onClick={() => onRoleChange(role.slug)} className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] ${selected ? 'bg-[#6366F1] text-white shadow-sm' : 'border border-gray-200 bg-white text-text-secondary hover:border-[#a5b4fc] hover:text-[#4338ca] dark:border-gray-700 dark:bg-[#110f17]'}`}>{role.label}</button>;
          })}
        </div>
      </div>

      {hasActiveFilters && <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-text-secondary"><span>Viewing {activeRoleLabel}</span>{activeSkill && <button type="button" aria-label={`Clear ${activeSkill} filter`} onClick={onClearSkill} className="inline-flex min-h-9 items-center gap-1 rounded-full bg-[#eef2ff] px-3 font-medium text-[#4338ca] hover:bg-[#e0e7ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]">#{activeSkill}<X aria-hidden="true" className="size-3.5" /></button>}<button type="button" onClick={onReset} className="min-h-9 px-2 font-medium text-[#6366F1] underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1]">Reset explorer</button></div>}
    </section>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, Building2, ChevronRight, CircleHelp, Leaf, LineChart, Map, Medal, Moon, Settings2, Sun, UsersRound, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const nav = [
  { href: '/', label: 'Executive dashboard', icon: BarChart3 },
  { href: '/directory', label: 'Green business directory', icon: Building2 },
  { href: '/leaderboard', label: 'Commercial leaderboard', icon: Medal },
  { href: '/engagement', label: 'Engagement score', icon: UsersRound },
  { href: '/community', label: 'Community impact', icon: Leaf }
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);
  return <>
    {open && <button aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-30 bg-black/30 lg:hidden" />}
    <aside className={`fixed inset-y-0 left-0 z-40 flex w-[270px] flex-col border-r border-[var(--border)] bg-[var(--background)] px-5 py-6 transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-11 flex items-center justify-between px-2"><Link href="/" className="flex items-center gap-3" onClick={onClose}><span className="flex size-9 items-center justify-center rounded-xl bg-moss text-white"><Leaf size={19} strokeWidth={2.5} /></span><span className="font-display text-[15px] font-bold tracking-tight">Naperville <span className="block font-sans text-[11px] font-medium text-[var(--muted)]">Climate leadership</span></span></Link><button onClick={onClose} className="lg:hidden"><X size={18} /></button></div>
      <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.14em] text-[var(--muted)]">Workspace</div>
      <nav className="space-y-1">{nav.map(({ href, label, icon: Icon }) => { const active = pathname === href; return <Link key={href} href={href} onClick={onClose} className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium transition ${active ? 'bg-mint text-moss dark:bg-[#1b352b] dark:text-lime' : 'text-[var(--muted)] hover:bg-black/[.04] hover:text-[var(--foreground)] dark:hover:bg-white/[.05]'}`}><Icon size={17} strokeWidth={active ? 2.3 : 1.8} /><span className="flex-1">{label}</span>{active && <ChevronRight size={14} />}</Link>; })}</nav>
      <div className="mt-auto space-y-1"><div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.14em] text-[var(--muted)]">Explore</div><Link href="#map" onClick={onClose} className="flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium text-[var(--muted)] hover:bg-black/[.04] dark:hover:bg-white/[.05]"><Map size={17} />Live organization map</Link><Link href="#sources" onClick={onClose} className="flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] font-medium text-[var(--muted)] hover:bg-black/[.04] dark:hover:bg-white/[.05]"><CircleHelp size={17} />Data & methodology</Link><button onClick={() => setDark(!dark)} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-medium text-[var(--muted)] hover:bg-black/[.04] dark:hover:bg-white/[.05]">{dark ? <Sun size={17} /> : <Moon size={17} />} {dark ? 'Light mode' : 'Dark mode'}</button></div>
      <div className="mt-5 border-t border-[var(--border)] pt-5"><div className="flex items-center gap-3 px-2"><div className="flex size-8 items-center justify-center rounded-full bg-coral/15 text-xs font-bold text-coral">CN</div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-semibold">City of Naperville</p><p className="text-[11px] text-[var(--muted)]">Climate office</p></div><Settings2 size={15} className="text-[var(--muted)]" /></div></div>
    </aside>
  </>;
}

import type { SetStateAction } from 'react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { Bone, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

type NavigationLinksProps = {
  sidebarOpen: boolean;
};

const NavigationLinks = ({ sidebarOpen }: NavigationLinksProps) => {
  const links: {
    name: string;
    to: string;
    logo: React.ReactElement<LucideIcon>;
  }[] = [
    {
      name: 'abcdefg',
      to: '/todos',
      logo: <Bone />,
    },
    {
      name: 'gotem',
      to: '/todos',
      logo: <Bone />,
    },
    {
      name: 'three',
      to: '/todos',
      logo: <Bone />,
    },
    {
      name: 'four',
      to: '/todos/gotem',
      logo: <Bone />,
    },
  ];

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link to={link.to}>
            <Button
              className={cn('inline-flex w-full items-center gap-4', {
                'justify-center': !sidebarOpen,
                'justify-start': sidebarOpen,
              })}
            >
              <span
                className={cn({
                  'hidden opacity-0': sidebarOpen,
                  'animate-fadein block opacity-100': !sidebarOpen,
                })}
              >
                {!sidebarOpen && link.logo}
              </span>
              <span
                className={cn({
                  'hidden opacity-0': !sidebarOpen,
                  'animate-fadein block opacity-100': sidebarOpen,
                })}
              >
                {link.logo}
              </span>
              <span
                className={cn({
                  'hidden opacity-0': !sidebarOpen,
                  'animate-fadein block opacity-100': sidebarOpen,
                })}
              >
                {link.name}
              </span>
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <aside
      className={cn(
        'fixed hidden h-screen w-64 flex-col gap-4 bg-zinc-400 p-6 transition-all dark:bg-zinc-700 sm:flex',
        {
          'w-28': !sidebarOpen,
        },
      )}
    >
      <div>
        <Button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-full"
          variant="ghost"
        >
          {sidebarOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </div>

      <NavigationLinks sidebarOpen={sidebarOpen} />
    </aside>
  );
};

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={cn('min-h-screen transition-all sm:ml-64', {
          'sm:ml-28': !sidebarOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export { MainLayout };

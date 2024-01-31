import { DefaultTheme } from 'vitepress';

import { SidebarEntry } from './sidebars.interface';

/**
 * Sidebar entries for the FAQ
 */
export const FORMATTING_SIDEBAR: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Setup',
    link: '/code-comments/formatting/setup.md',
  },
  {
    text: 'Configuration',
    link: '/code-comments/formatting/configuration.md',
  },
  {
    text: 'Behaviors: Case and Space',
    link: '/code-comments/formatting/case_and_space.md',
  },
];

/**
 * Sidebar entries for the code comments
 */
export const CODE_COMMENTS_SIDEBAR: SidebarEntry[] = [
  {
    text: 'About',
    link: '/code-comments/',
  },
  {
    text: 'AutoDoc',
    link: '/code-comments/auto_doc',
  },
  {
    text: 'Formatting',
    items: FORMATTING_SIDEBAR,
  },
];
'use client';

export function setTheme(theme: string) {
  if (typeof window !== 'undefined') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
}

export function getTheme() {
  if (typeof window === 'undefined') return 'light';
  
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) return storedTheme;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

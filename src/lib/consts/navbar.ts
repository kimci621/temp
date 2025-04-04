export interface NavItem {
  label: string;
  href: string;
  isActive: boolean;
}
export const navigationItems: NavItem[] = [
  { label: 'Главная', href: '/', isActive: false },
  // { label: 'О продукте', href: '/about', isActive: false },
  // { label: 'Блог', href: '/blog', isActive: false },
];

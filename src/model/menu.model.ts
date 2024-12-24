export interface MenuTab {
  titleMenu: string | undefined;
  linkMenu: string | undefined;
  iconMenu: string | undefined;
  childMenu: MenuItem[];
}

export interface MenuItem {
  typeMenu: 'divider' | 'dropdown';
  titleMenu: string | undefined;
  linkMenu: string | undefined;
  iconMenu: string | undefined;
}

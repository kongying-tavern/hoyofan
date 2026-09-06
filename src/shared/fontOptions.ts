export interface FontGroupNode {
  id: string;
  label: string;
  icon?: string;
  children: FontNode[];
}

export interface FontNodeMeta {
  allowNumber?: boolean;
  allowCapsLock?: boolean;
}

export interface FontNode {
  tag: string;
  label: string;
  abbr?: string;
  url: string;
  meta?: FontNodeMeta;
}

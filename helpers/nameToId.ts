const COMBINING_MARKS = new RegExp('[\\u0300-\\u036f]', 'g');

export const nameToId = (name?: string | null) =>
  (name ?? '')
    .toLowerCase()
    .replace(' ', '-')
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .replace(/[œ]/g, 'oe')
    .replace(/[æ]/g, 'ae')
    .replace(/[ø]/g, 'o');

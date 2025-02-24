export const nameToId = (name: string) => name.toLowerCase().replace(' ', '-').normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[œ]/g, 'oe')
  .replace(/[æ]/g, 'ae')
  .replace(/[ø]/g, 'o');
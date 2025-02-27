export default interface IArtists {
  sheetId: string;
  pageTitle: string;
  active: '0' | '1';
  id: number;
  fileName: string;
  driveId: string;
  imgAlt: string;
  imgOnSide: 'left' | 'right';
  artistName: string;
  text: string;
}
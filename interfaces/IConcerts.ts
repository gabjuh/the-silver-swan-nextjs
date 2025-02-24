export default interface IConcerts {
  sheetId: string;
  pageTitle?: string;
  active?: string;
  id: string;
  title?: string;
  concertDetails?: string;
  date?: string;
  time?: string;

  categoryEn?: string;
  categoryDe?: string;
  categoryHu?: string;
  startDate: string;
  endDate?: string;
  startTime?: string;
  endTime?: string;

  fileName?: string;
  driveId?: string;
  imgAlt?: string;
  facebook?: string;
  location?: string;
  locationLink?: string;
  band?: string;
  bandLink?: string;
  artists?: string;
  description?: string;
  concertLink?: string;
}
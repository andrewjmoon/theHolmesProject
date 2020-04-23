let data = [
    {
      id: 1,
      name: 'St. Andrew',
      feastday: 'November 30',
      notable: 'Patron Saint of Fishermen, Greece, Russia, and Scotland',
      info: 'http://www.newadvent.org/cathen/01471a.htm',
    },
    {
      id: 2,
      name: 'Mother Angelica',
      feastday: 'N/A',
      notable: 'Founder of the Eternal World Television Network',
      info: 'https://www.ewtn.com/motherangelica/life.asp',
    },
    {
      id: 3,
      name: 'St. Anthony of Padua',
      feastday: 'June 13',
      notable: 'Patron Saint of Lost Things',
      info: 'https://www.stanthony.org/who-st-anthony/',
    },
    {
      id: 4,
      name: 'St. Augustine',
      feastday: 'August 28',
      notable:
        'Patron Saint against sore eyes, against vermin, brewers, printers, and theologians',
      info: 'https://catholicsaints.info/saint-augustine-of-hippo/',
    },
  ];
  
  export const fetchData = () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        res(data);
      }, 500);
    });
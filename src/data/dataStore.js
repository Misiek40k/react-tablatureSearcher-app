export const settings = {
  col: {
    sm: 12,
    md: 8,
    lg: 6,
    mdOffset: 2,
    lgOffset: 3,
  },
  header: {
    name: 'Tablature searcher',
    icon: 'guitar',
  },
  contentContainer: {
    pageTitle: {
      title: 'Search',
      subtitle: 'and play your best songs',
    },
    fetchReq: 'https://www.songsterr.com/a/ra/songs.json?pattern=',
    search: {
      buttons: {
        search: {
          txt: ' Search',
          ico: 'search',
        },
        cancel: {
          txt: ' Cancel',
          ico: 'ban',
          variant: 'danger',
        },
      },
      placeholder: 'Search for tablature...',
    },
  },
  list: {
    title: 'Found records: ',
  },
};

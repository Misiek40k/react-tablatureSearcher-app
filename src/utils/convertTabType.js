export const convertTabType = (tabType) => {
  switch (tabType) {
    case 'TEXT_GUITAR_TAB':
      return 'guitar';
    case 'CHORDS':
      return 'chords';
    case 'TEXT_BASS_TAB':
      return 'bass';
    default:
      return 'player';
  }
};

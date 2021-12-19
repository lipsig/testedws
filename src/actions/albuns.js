export const REQUEST_ALBUMS = 'REQUEST_DATA';
export const GET_ALBUMS_FIRST = 'GET_DATA_FIRST';

export const requestAlbum = () => ({
  type: REQUEST_ALBUMS
});

export const getAlbumFirst = albumP => ({
  type: GET_ALBUMS_FIRST,
  albumP
});

export const fetchAlbum = () => dispatch => {
  dispatch(requestAlbum());
  return getAlbum().then(albums => {
    setTimeout(() => {
      return dispatch(getAlbumFirst(albums))
    }, 1000);
  });
};

const getAlbum = () => {  
  return fetch(`https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/albums`, { method: 'GET'})
      .then(response => response.json());
}
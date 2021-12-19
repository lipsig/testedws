export const REQUEST_BAND = 'REQUEST_DATA';
export const GET_DATA_BAND = 'GET_DATA_FIRST';

export const requestBand = () => ({
  type: REQUEST_BAND
});

export const getDataBand = bandInternal => ({
  type: GET_DATA_BAND,
  bandInternal
});

export const fetchDataBand = (id) => dispatch => {
  dispatch(requestBand());
  return getBand(id).then(band => {
    setTimeout(() => {
      return dispatch(getDataBand(band))
    }, 1000);
  });
};

const getBand = (id) => {  
  return fetch(`https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands/${id}`, { method: 'GET'})
      .then(response => response.json());
}
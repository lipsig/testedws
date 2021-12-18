export const REQUEST_DATA2 = 'REQUEST_DATA';
export const GET_DATA_FIRST2 = 'GET_DATA_FIRST';

export const requestData2 = () => ({
  type: REQUEST_DATA2
});

export const getDataFirst2 = bandInternal => ({
  type: GET_DATA_FIRST2,
  bandInternal
});

export const fetchData2 = (id) => dispatch => {
  dispatch(requestData2());
  return getData2(id).then(band => {
    setTimeout(() => {
      return dispatch(getDataFirst2(band))
    }, 1000);
  });
};

const getData2 = (id) => {  
  return fetch(`https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands/${id}`, { method: 'GET'})
      .then(response => response.json());
}
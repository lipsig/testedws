export const REQUEST_DATA = 'REQUEST_DATA';
export const GET_DATA_FIRST = 'GET_DATA_FIRST';

export const requestData = () => ({
  type: REQUEST_DATA
});

export const getDataFirst = myData => ({
  type: GET_DATA_FIRST,
  myData
});

export const fetchData = () => dispatch => {
  dispatch(requestData());
  return getData().then(things => {
    setTimeout(() => {
      return dispatch(getDataFirst(things))
    }, 1000);
  });
};

const getData = () => {  
  return fetch('https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api/bands', { method: 'GET'})
      .then(response => response.json());
}
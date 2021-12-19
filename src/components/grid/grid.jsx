import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { fetchData } from '../../actions';
import '../../styles/components/grid/grid.css'
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";



const Grid = (props) => {

  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const sQuery = query.get('album')
  const searchResults = useRef(0)

  //dispatch Redux only one time
  useEffect(() => {
    props.dispatch(fetchData());
  }, [])

  function handlerResult(data) {
    const a = data;
    if (a.filter(item => item.name.toLowerCase().includes(sQuery.toLowerCase())).length > 0) {
      searchResults.current = a.filter(item => item.name.toLowerCase().includes(sQuery.toLowerCase())).length
      return a.filter(item => item.name.toLowerCase().includes(sQuery.toLowerCase())).map(band =>
        <a key={band.id} href={`/internal?item=` + band.id}>
          <div className='bandBlock'>
            <div className='imageBlock'>
              <img src={band.image}></img>
            </div>
            <div className='bandInfo'>
              <h3>{band.name}</h3>
              <span>{band.numPlays.toLocaleString('en-US').replaceAll(',', '.')} PLAYS</span>
            </div>
          </div>
        </a>
      )
    }
    else {
      return <a>
        <div className='bandBlock'>
          <div className='imageBlock' style={{ visibility: 'hidden' }}>
          </div>
          <div style={{margin:'40px 5px',textAlign:'center'}}>
            <h3>Sem Resultado</h3>
            <img style={{width:'60px'}} src={require('../../assets/noresults.png')} alt="noResult" />
          </div>
        </div>
      </a>
    }
  }


  if (props.isFetching) return <div>carregando...</div>

  return (
    <div className='grid'>
      <div id='result'>
        <div id='counter'>
          <span>{sQuery == null ? props.myData.length : searchResults.current} 
          {sQuery == null && props.myData.length>1? ' Resultados': ' Resultado'}
          {sQuery != null && searchResults.current.length<=1? ' Resultado': null}
          {sQuery != null && searchResults.current.length>1? ' Resultados': null}
          </span>
        </div>
        <div id='sorter'>
          <button style={{ border: 'none', backgroundImage: 'url("../../assets/order_by.png")', backgroundRepeat: 'no-repeat', backgroundSize: '20px', backgroundPosition: 'center' }}></button>
        </div>
      </div>
      {sQuery!=null ?
        handlerResult(props.myData)
        :
        props.myData.map(band =>
          <a key={band.id} href={`/internal?item=` + band.id}>
            <div className='bandBlock'>
              <div className='imageBlock'>
                <img src={band.image}></img>
              </div>
              <div className='bandInfo'>
                <h3>{band.name}</h3>
                <span>{band.numPlays.toLocaleString('en-US').replaceAll(',', '.')} PLAYS</span>
              </div>
            </div>
          </a>
        )}
    </div>
  );
}

const mapStateToProps = ({ things: { myData, isFetching } }) => ({
  myData,
  isFetching
});

export default connect(mapStateToProps)(Grid)

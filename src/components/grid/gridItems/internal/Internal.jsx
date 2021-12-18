import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData2 } from '../../../../actions/band';
import { Link } from "react-router-dom";


const Internal = (props) => {

  const location = useLocation()
  const query = new URLSearchParams(location.search);
  console.log(location)

  const token = query.get('item')

 useEffect(() => {
  props.dispatch(fetchData2(token));
 }, [])


  if(props.isFetching) return <div>carregando...</div>

  return (
    <div className='Internal'>  
        <div id='result'>
          <div id='counter'>
           <span>{props.bandInternal.length} Resultados</span> 
          </div>
          <div id='sorter'>
              <button id='sorterButton'></button>
          </div>
         
        </div>
          {console.log(props.bandInternal)}  
    </div>
  );

}

const mapStateToProps = ({ things: { bandInternal, isFetching2 } }) => ({
  bandInternal,
  isFetching2
});

export default connect(mapStateToProps)(Internal)

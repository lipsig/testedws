import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData2 } from '../../../../actions/band';
import { Link } from "react-router-dom";
import '../../../../styles/components/grid/internal/internal.css'


const Internal = (props) => {

  const location = useLocation()
  const query = new URLSearchParams(location.search);
  console.log(location)

  const token = query.get('item')

 useEffect(() => {
  props.dispatch(fetchData2(token));
 }, [])


  if(props.isFetching2) return <div>carregando...</div>

  return (
    <div id='internal'>  
        <div id='coverImage' style={{backgroundImage: 'url('+props.bandInternal.image+')', backgroundRepeat:'no-repeat', backgroundSize:'100% 300px', backgroundPosition:'center', backgroundPositionY: '-1vh', height:'100vw'}}>
          <div id='basicInfo'>
            <h3>{props.bandInternal.name}</h3>
            <div id='infoContent'>
              <span id='genre'>{props.bandInternal.genre}</span>
              <img id='profileBand' src={props.bandInternal.image} alt={props.bandInternal.name}/>
              <span id='numPlays'>{props.bandInternal.numPlays.toLocaleString('en-US').replaceAll(',','.')} PLAYS</span>            
            </div>
                    
          </div>       
        </div>
        <div id="description">
            <p>{props.bandInternal.biography}</p>
        </div>        
          {console.log(props.bandInternal)}  
    </div>
  );

}

const mapStateToProps = ({ band: { bandInternal, isFetching2 } }) => ({
  bandInternal,
  isFetching2
});

export default connect(mapStateToProps)(Internal)

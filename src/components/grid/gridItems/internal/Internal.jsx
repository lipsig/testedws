import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchData2 } from '../../../../actions/band';
import { fetchAlbum } from '../../../../actions/albuns';
import { Link } from "react-router-dom";
import '../../../../styles/components/grid/internal/internal.css'
import Album from './album';


const Internal = (props) => {


  const location = useLocation()
  const query = new URLSearchParams(location.search);

  const token = query.get('item')

 useEffect(() => {
  props.dispatch(fetchData2(token));
 }, [])


  if(props.isFetching2 && props.isFetching3) return <div>carregando...</div>

  return (
    <div id='internal'>  
        <div id='coverImage' style={{backgroundImage: `url(${props.bandInternal.image})`, backgroundRepeat:'no-repeat', backgroundSize:'100% 300px', backgroundPosition:'center', backgroundPositionY: '-1vh', height:'100vw'}}>
          <div id='basicInfo'>
            <h3>{props.bandInternal.name}</h3>
            <div id='infoContent'>
              <span id='genre'>{props.bandInternal.genre}</span>
              <img id='profileBand' src={props.bandInternal.image} alt={props.bandInternal.name}/>
              <span id='numPlays'>{props.bandInternal.numPlays?.toLocaleString('pt-PT').replaceAll(',','.')} PLAYS</span>            
            </div>
                    
          </div>       
        </div>
        <div id="description">
            <p>{props.bandInternal.biography}</p>
        </div>       
        <hr>
        </hr>
        <h3>Albums</h3>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          {props.bandInternal.albums?.map(
            item => 
            <Album id={item}></Album>
          )}
        </div>
          {console.log(props.bandInternal)}
          {console.log(props)}  
    </div>
  );

}

const mapStateToProps = ({ band: { bandInternal, isFetching2 }, albums:{albumP, isFetching3} }) => ({
  bandInternal,
  albumP,
  isFetching2,
  isFetching3
});

export default connect(mapStateToProps)(Internal)

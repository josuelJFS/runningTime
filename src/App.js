import { useEffect, useState } from 'react';
import SliderAqua from './components/sliderAqua';

function App() {

  const [sec,setSec] = useState(0);
  const [min,setMin] = useState(0);

  


  useEffect(()=>{

    let secTime = sec+1;
    let minTime = min+1;
    
    setTimeout(() => {
      if(secTime == 60) {
        setSec(0)
        setMin(minTime)
        return
      } 
      setSec(secTime)
    }, 1000);

  },[sec])
  return (
   
      <h1 align="center">{withzero(min)}:{withzero(sec)}</h1>
    
   
  )
}

function withzero(valor){
  if(valor < 10) return '0'+valor
  return valor;
}


export default App;

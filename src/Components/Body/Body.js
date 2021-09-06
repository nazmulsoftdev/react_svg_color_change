import React,{useState,useEffect} from 'react'

import Button from '../Components/../ButtonComponent/Button';
import Artsvg from '../SvgComponent/Artsvg';

function Body() {

    const [colorPicker,SetcolorPicker] = useState('black');
    const [colors, Setcolors] = useState([]);


    useEffect(() => {
       
        document.title = 'Random Color';

       fetch('https://raw.githubusercontent.com/cheprasov/json-colors/master/colors.json')
       .then(response => response.json())
       .then(resColor => Setcolors(resColor));

    },[]);




// Color Change Action

const HandleColor = ()=>{

    const storeColor = colors.map((item) => { return item.hex });
     console.log(storeColor)
    const color = storeColor[Math.floor(Math.random()*storeColor.length)];
    
    return color;
   
}


return (

<div>

        <Artsvg colorPicker={colorPicker}/>

<div className="buttonWrap">
   <Button name="Change Color" HandleAc={()=>SetcolorPicker(HandleColor)}/>
   <Button name="Reset Color" HandleAc={()=>SetcolorPicker('black')}/>
</div>
</div>
    )
}

export default Body

import React from "react";
import {View,Image,Text} from 'react-native'


const Passing = props => {
return (
    <View>

        <Text style={{backgroundColor:'pink'}} >{props.ours}</Text>
    </View>)
}
const Image2 = () =>{
 return (
    <View> 
   <Image source = {{uri:'https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGx8ZW58MHx8MHx8fDA%3D&w=1000&q=80'}}
   style = {{ width: 200, height: 200 }}
   />


    </View>

 )
}

export {Image2}



export default Passing;
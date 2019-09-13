import React from 'react';
import { Text, View, FlatList ,StatusBar,StyleSheet,Image} from 'react-native';
import noPhotoAvailable from './assets/noPhotoAvailable.png'
import { connect } from 'react-redux';

class ViewPresent extends React.Component {

render() {
        return (
         
          <View style={styles.container}>
          {/* <Text>{JSON.stringify(this.props.alldonors)}</Text> */}
          <FlatList
                data = {this.props.alldonors}
                renderItem = {({item})=>( <View style={{ flex: 1 }}>
                
                   <View  style={{ backgroundColor:'#F5F5F5',flexDirection:'row', borderColor :'black', borderWidth: 1 , flexWrap : 'wrap', padding: 2,justifyContent : 'space-between' }} >
                <View style = {{flexDirection : 'row', }}>
                        <View style={{justifyContent:'center'}} >
                            {(item.url !== undefined && item.url !== null && item.url !== '')
                        ?<Image style={{width: 120,height:120, alignSelf:'center', borderRadius:120}} source={{uri:item.url}}/>
                    :<Image style={{width: 120,height:120, alignSelf:'center', borderRadius:120}} source={noPhotoAvailable}/>}
                        </View>
                        <View style={{padding:2, marginLeft:10}}>
                    <Text style={{ fontSize:22 }}>{item.fullName}</Text>
                    <View style={{flexDirection:'row'}}><Text>Contact: </Text><Text style={{ fontSize:17 }}>{item.contact}</Text></View>
                    <View style={{flexDirection:'row'}}><Text>Age: </Text><Text style={{ fontSize:17 }}>{item.age}</Text></View>
                    <View style={{flexDirection:'row'}}><Text>Blood Type: </Text><Text style={{ fontSize:17,fontStyle:'italic',color:'blue' }}>{item.bloodType}</Text></View>
                    <Text style={{ fontSize:12,fontStyle:'italic',color:'grey' }}>{item.address}</Text>
                    </View></View>
                   </View>
                </View>)}
                />                  
          </View>
        )
    }
}


function mapStateToProps(state){
    return({
        alldonors: state.basicInfo.alldonors
    })
}
function mapDispatchToProps(dispatch){
    return({

    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewPresent);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5F5F5',
        // backgroundColor: 'powderblue',
        
      },
     
   
})

















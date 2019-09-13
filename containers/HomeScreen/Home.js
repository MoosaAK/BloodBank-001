import React from 'react';
import { Text, View, TouchableOpacity ,StatusBar,StyleSheet,Image} from 'react-native';
import { connect } from 'react-redux';
import Donor from '../../images/Donating_blood_tnb.png'

class Home extends React.Component {

render() {
        return (
         
          <View style={styles.container}>
            <View style={{flexDirection:'row', marginBottom:20}}>
          <View style={{flex :1,paddingLeft:20}} >
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ViewDonor')}>
                     <View><View style={{justifyContent:'center',alignSelf:'center',borderColor:'#C80000',borderWidth:2,height:80,width:80,borderRadius:80}}><Image style={{width:50,height:50, alignSelf : 'center'}} source={{uri: 'https://img.icons8.com/ios-filled/128/000000/blood-sample.png'}}/></View><Text style={{alignSelf:'center'}}>View All Donors</Text></View>
              </TouchableOpacity>
          </View>
          <View style={{flex:1,paddingRight:20}} >
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Search')}>
                      <View><View style={{justifyContent:'center',alignSelf:'center',borderColor:'#C80000',borderWidth:2,height:80,width:80,borderRadius:80}}><Image style={{width:50,height:50, alignSelf : 'center'}} source = {{uri : 'https://img.icons8.com/material/160/000000/rh-plus.png'}}/></View><Text style={{alignSelf:'center'}}>Search Specific</Text></View>
            </TouchableOpacity>
          </View></View>
          <View style={{flexDirection:'row'}}>
          <View style={{flex:1, justifyContent:'center'}} >
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('BeDonor')}>
                      <View><Image style={{height:80,width:80,borderRadius:80,borderColor:'#C80000',borderWidth:2, alignSelf : 'center'}} source = {Donor}/><Text style={{alignSelf:'center'}}>Be a Donor</Text></View>
            </TouchableOpacity>
            </View>
         
            </View>
     
              
          </View>
        )
    }
}




export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
      }
   
})

















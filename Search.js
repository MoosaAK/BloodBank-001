
import React from 'react';
import { Text, View, FlatList ,TextInput,StyleSheet,Image} from 'react-native';
import noPhotoAvailable from './assets/noPhotoAvailable.png'
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Search extends React.Component {
state={
    blood:'',
    data:[]
}
render() {
        return (
         
          <View style={styles.container}>

<View style={{flexDirection:'row'}}>
          <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Your blood type?"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(blood) => this.setState({blood})}/>
        </View>
        <View style={{ flex:1}}>
        <TouchableOpacity 
                onPress={() => {
                    var asal=[]
                 for(var i= 0 ; i<this.props.alldonors.length;i++){

                    switch(this.state.blood){
                        case "A+":
                                if(this.props.alldonors[i].bloodType === "A+" || this.props.alldonors[i].bloodType === "A-" ||this.props.alldonors[i].bloodType === "O+" ||this.props.alldonors[i].bloodType === "O-" ){
                                    asal.push(this.props.alldonors[i])
                                }
                                break;
                                case "A-":
                                        if(this.props.alldonors[i].bloodType === "A-" ||this.props.alldonors[i].bloodType === "O-" ){
                                            asal.push(this.props.alldonors[i])
                                        }
                                        
                                        break;
                                        case "B+":
                                                if(this.props.alldonors[i].bloodType === "B+" || this.props.alldonors[i].bloodType === "B-" ||this.props.alldonors[i].bloodType === "O+" ||this.props.alldonors[i].bloodType === "O-" ){
                                                    asal.push(this.props.alldonors[i])
                                                }
                                                
                                                break;
                                                case "B-":
                                                        if( this.props.alldonors[i].bloodType === "B-" ||this.props.alldonors[i].bloodType === "O-" ){
                                                            asal.push(this.props.alldonors[i])
                                                        }
                                                        break;
                                                        case "AB+":
                                                                    asal.push(this.props.alldonors[i])
                                                                
                                                                break;
                                                                case "AB-":
                                                                        if(this.props.alldonors[i].bloodType === "AB-" || this.props.alldonors[i].bloodType === "A-" ||this.props.alldonors[i].bloodType === "B-" ||this.props.alldonors[i].bloodType === "O-" ){
                                                                            asal.push(this.props.alldonors[i])
                                                                        }
                                                                        break;
                                                                        case "O+":
                                                                                if(this.props.alldonors[i].bloodType === "O+" ||this.props.alldonors[i].bloodType === "O-" ){
                                                                                    asal.push(this.props.alldonors[i])
                                                                                }
                                                                                break;
                                                                                case "O-":
                                                                                        if(this.props.alldonors[i].bloodType === "O-" ){
                                                                                            asal.push(this.props.alldonors[i])
                                                                                        }
                                                                                        break;
                                                                                        default:
                                                                                            break;
                                                                                    }
                                                                                    
                 }
                 this.setState({
                     data:asal
                 })
                }}>
                <View style={{flexDirection:'row'}}><Text style={{justifyContent:'center'}}>Search</Text><Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/android/48/000000/search.png'}}/>
          </View>
              </TouchableOpacity></View>
</View>

          <FlatList
                data = {this.state.data}
                renderItem = {({item})=>( <View style={{ flex: 1 }}>
                
                   <View  style={{ backgroundColor:'#F5F5F5',flexDirection:'row', borderColor :'black', borderWidth: 1 , flexWrap : 'wrap', padding: 2,justifyContent : 'space-between' }} >
                <View style = {{flexDirection : 'row', }}>
                        <View style={{justifyContent:'center'}} >
                            {(item.url !== undefined && item.url !== null && item.url !== '')
                        ?<Image style={{width: 80,height:80, alignSelf:'center', borderRadius:80}} source={{uri:item.url}}/>
                    :<Image style={{width: 80,height:80, alignSelf:'center', borderRadius:80}} source={noPhotoAvailable}/>}
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

export default connect(mapStateToProps,mapDispatchToProps)(Search);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5F5F5',
        // backgroundColor: 'powderblue',
        
      },
     
      inputContainer: {
        backgroundColor: '#ffffff',
        width:250,
        flexDirection: 'row',
        alignItems:'center',
        height: 45,
    marginBottom: 12,
    flex:3,
    
    borderBottomColor: '#c80000',
    borderBottomWidth: 1
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:5,
        justifyContent: 'center'
      },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    height: 38,
    padding: 7
    },
   
})

















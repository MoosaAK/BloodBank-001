import React from 'react';
import { Text, View, TouchableHighlight ,StyleSheet,Platform,Image,Picker} from 'react-native';
import { connect } from 'react-redux';
import {TextInput} from 'react-native-gesture-handler'
import {AntDesign} from '@expo/vector-icons'
import CameraExample from './Camera'
import ImaagePickerExample from './ImagePicker'
import {addpic} from './redux/actions/action'

const IS_ANDROID = Platform.OS === 'android'
import firebase from 'firebase';
require("firebase/firestore");

class BeDonor extends React.Component {
  state={
    fullName:'a',
      contact:'11',
      address:'aaa',
      age:'22',
      bloodType:'A+',
  }
  render() {
           return(
           <View style={styles.modalcontainer}>
        <View style={{marginBottom:20}}>
          {(this.props.imageUri === '')
          ?(<View style={{flexDirection:'row',justifyContent:'space-evenly'}}><View  style={{backgroundColor:'black', height:80,width:80,justifyContent:'center',borderRadius: 80,alignItems:'center', marginRight:10}}><AntDesign name='camera' size={50} color ='white' onPress={()=>this.props.navigation.navigate('CameraExample')}/></View><ImaagePickerExample/></View>)
           :   <Image style={{width:150,height:150,borderRadius:150}} source ={{uri:this.props.imageUri}}/>}
        </View>
        {/* <Text>hi{JSON.stringify(this.props.imageUri)}</Text> */}
            <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(fullName) => this.setState({fullName})}/>
        </View>
              <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/material-rounded/96/000000/phone--v1.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Contact"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(contact) => this.setState({contact})}/>
        </View>
              <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios-filled/100/000000/address.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Address"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(adress) => this.setState({adress})}/>
        </View>
              <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/material-rounded/192/000000/age.png'}}/>
          <TextInput style={styles.inputs}
              placeholder="Age"
              keyboardType="phone-pad"
              underlineColorAndroid='transparent'
              onChangeText={(age) => this.setState({age})}/>
        </View>
        <View style = {{marginBottom:20,flexDirection:'row'}}>
          <Text style= {styles.signUpText}>Blood Type:</Text>
        <Picker
          selectedValue={this.state.bloodType}
          style={{height: 50, width: 80, color:'white'}}
          color=''
          prompt='Blood Type'
          onValueChange={(itemValue, itemIndex) =>
                this.setState({bloodType: itemValue})
          }>
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
          </Picker></View>
            
            
<View style={{flexDirection:'row', 
        justifyContent: 'space-around',}}>
              <TouchableHighlight style={[styles.buttonContainer, styles.signupButton,{marginRight:10}]}
                onPress={()=>{
                  this.props.addStudent(this.state.fullName,this.state.contact,this.state.address,this.state.age,this.state.bloodType,this.props.imageUri,this.props.navigation)
                }}>
                <Text>Add Student</Text>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
                onPress={() => {
                 this.props.navigation.navigate('Home');
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
</View>
{(this.props.loader === true)?(
                      <View style={{alignItems:'center'}}>
                      <Image source={Loader} style={{height:50,width:50,alignSelf:'center'}}/>
                    </View>): null
        }
          </View>
           )
            }
        }





function mapStateToProps(state){
    return({
imageUri : state.basicInfo.uri,
    })
}
function mapDispatchToProps(dispatch){
            return({
                addStudent :(fullName , contact , address,age,bloodType,url,nav)=> {
                 
                    dispatch(addpic(fullName , contact , address,age,bloodType,url,nav))}
            })

        }
export default connect(mapStateToProps,mapDispatchToProps)(BeDonor)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#C80000',
      },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:100,
        borderRadius:30,
      },
      inputContainer: {
        backgroundColor: '#C80000',
        width:250,
        flexDirection: 'row',
        alignItems:'center',
        height: 45,
    marginBottom: 12,
    
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        margin: IS_ANDROID ? -1 : 0,
    height: 38,
    padding: 7
    },
      signupButton: {
        backgroundColor: "#ffffff",
      },
      signUpText: {
        color: 'white',
      }
})



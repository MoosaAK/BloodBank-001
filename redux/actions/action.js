console.disableYellowBox = true;

import firebase from 'firebase';
require("firebase/firestore");
import {ToastAndroid} from 'react-native';





var firebaseConfig = {
    apiKey: "AIzaSyDqRdttEcwBlgQh5rHLCaUQM2l4n9POQ2c",
    authDomain: "bloodbank-000.firebaseapp.com",
    databaseURL: "https://bloodbank-000.firebaseio.com",
    projectId: "bloodbank-000",
    storageBucket: "bloodbank-000.appspot.com",
    messagingSenderId: "676839634400",
    appId: "1:676839634400:web:15437a929593c203"
  
  
  };
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export function signup(email,password,fullname,nav) {
    return (dispatch) => {
        console.log(email, password);
        dispatch({ type: 'CHANGE_LOADER' })
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
                
                db.collection("users").add({
                    email,password,fullname,
                    uid : user.user.uid,
                }).then(function (docRef) {
                    nav.navigate('App')
                    dispatch({ type: 'LOGGEDIN_USER', payload: { email,password,fullname}})
                    dispatch({ type: 'CHANGE_LOADER' });
                })
            })
        }
}



export function signin(email, password,nav) {
    return (dispatch) => {
        dispatch({ type: 'CHANGE_LOADER' })
        console.log("cccccccccccc")
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            
            console.log("cccccccccccc")
            db.collection("users").where("uid", "==", user.user.uid)
            .get()
            .then(function (userSnapshot) {
                            userSnapshot.forEach(function (userDoc) {
                                var  { email,password,fullname} = userDoc.data()
                                dispatch({ type: 'LOGGEDIN_USER', payload: { email,password,fullname}});
                                dispatch({ type: 'CHANGE_LOADER' });
                                dispatch(getdonors())
                                nav.navigate('App')
                                
                            });
                        })
            })
    }
}




var alldonors =[]
function getdonors(){
return(dispatch) =>{
 
    
   firebase.firestore().collection("Donors").get().then(snapshot => {
       snapshot.docs.forEach(doc => {
        
         const comment = doc.data()
         alldonors.push(comment)
        })
        
        dispatch({type:'LIST_DONORS' , payload:alldonors})
        alldonors =[]
    })
    console.log("all",alldonors)
   console.log("dispatched")
}
}
// var present =[]
// function getattendance(){
//     return(dispatch) =>{
//      //   alert('aya')
    

//      var date  = new Date()
//      date = date.toDateString()
//      db.collection("attendance").where("date", "==", date)
//      .get()
//                  .then(function (userSnapshot) {
//                      userSnapshot.forEach(function (doc) {
//                          const comment = doc.data()
//          present.push(comment)
                         
//                      });
//                       dispatch({type:'PRESENT' , payload:present})
//                 present =[]
//                  })
//  console.log("all",present)
//    console.log("dispatched")


   
// }
// }

// export function mark(fullName,rollNo,section,url){
//         return(dispatch)=>{
//             var date  = new Date()
//             date = date.toDateString()
//              db.collection("attendance").add({
//                  fullName,
//                  section,
//                    date,
//                    rollNo,
//                 url
//                })
//                .then(function (docRef) {   
//                    dispatch(getattendance())
//                     alert(`Attendance of ${fullName} marked for ${date}`)

//                  });
                
//              }
             
//         }


 export function addpic(fullName , contact , address,age,bloodType,uri,nav){

            return async (dispatch)=>    { 
                dispatch({ type: 'CHANGE_LOADER' });
                console.log("[[[")
                console.log("uploadAsFile", uri)
                 const response = await fetch(uri);
                 const blob = await response.blob();
               
                 var metadata = {
                   contentType: 'image/jpeg',
                 };
               
                 let name = new Date().getTime() + "-media.jpg"
                 const stref = firebase
                   .storage()
                   .ref()
                   .child('assets/' + name)
               
                 stref.put(blob, metadata)
               .then(function(imageSnapshot) {
                 imageSnapshot.ref.getDownloadURL()
                 .then((downloadURL)=>{
                   console.log('File available at', downloadURL);
                   
                  
                         firebase.firestore().collection("Donors").add({
                             fullName,
                             contact , address,age,bloodType,
                             url:downloadURL,
                             
                             
                         }).then(function (docRef) {
                             dispatch({ type: 'CHANGE_LOADER' });
                             
                            ToastAndroid.show('Donor added', ToastAndroid.SHORT);
                             
                             nav.navigate('Home')
                             dispatch(getdonors());
                             dispatch({type:'URI', payload:''})
                            })
                            .catch((e)=>{
                                dispatch({type:'URI', payload:''})
                                dispatch({ type: 'CHANGE_LOADER' });
                                dispatch({type:'Error', payload:e})
                                
                         })
                     })
              })}
             }
       
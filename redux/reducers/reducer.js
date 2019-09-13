
const INITIAL_STATES = {
    username: '',
    isLoading:false,
    isLoggedIn: false,
    loader: false,
    email : '',
    uri:'',
    
    uid : '',
    auth: false,
    contact:'',
    address:'',
    age:"",
    bloodType:'',
    userType:'',
    alldonors:[]
    
}

export default function (state = INITIAL_STATES, action) {

    switch (action.type) {
      
        case "CHANGE_LOADER":
            return ({
                ...state,
                isLoading: !state.isLoading
            })
        case "LIST_DONORS":
            return ({
                ...state,
                alldonors: action.payload
            })
        case "URI":

            return ({
                ...state,
                uri: action.payload
            })
        case "LOGGEDIN_USER":
            console.log(action.payload)
            return ({
                ...state,
                email: action.payload.email,
                username: action.payload.name,
                uid: action.payload.uid,
               contact: action.payload.contact,
              address: action.payload.address,
               bloodType: action.payload.bloodType,
                age:action.payload.age,
                isLoggedIn : true,
            })
        default:
            return state;
    }

}
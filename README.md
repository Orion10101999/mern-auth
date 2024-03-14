# Q.1 Redux toolkit setup :-

- store.js 
- user -> userSclice.js 

- copy setup from redux toolkit  tutorial and make changes as per the problem statement requirements

- initalState 
- currentUser : null , loading : false , error  : false

- const userSlice = createSlice({})

- {name: "user", initialState, reducers:{}}

- {signInStart : function , signInSuccess : function , signInFailure : function}

- export const {signInStart , signInSuccess , signInFailure} = userSlice.actions

- export default userSclice.reducer

- store.js
- reducer : {user : userReducer}

- Afterward main.js se Provider se wrap krke store:{store}

# Q.2. Redux Persist SetUP

- reducer : {user : userReducer}
- {user: userReducer} ko rootReducer me combineReducers


- rootReducer ko persistReducer(persistConfig,rootReducer) me use kiye and persistedReducer me rakh diye.

- percistedReducer ko store wale reducer me rakh diye.

- export persistor = persistStore(store)

- const persistConfig = {
    key :'root',
    version: 1,
    storage
}

- Afterwards main.jsx file me PersistGate se wrap kr denge

<PersistGate persistor={persistor} loading={null}>

- userSlice , store , main.js ka peroblem / error useSelector jaha use kiye hai like SignIn page me dikha skta hai . So Very Carefull regarding redux toolkit and redux persist



# Q.3 OAuth :-

- firebase google

npm install firebase
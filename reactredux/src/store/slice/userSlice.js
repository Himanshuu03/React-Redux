import {createSlice} from  "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState :[],
    reducers :{
        addUser(state,action){},
        removeUser(state,action){},
        clearAllUser(state,action){},
    }
})

export {userSlice};

// export default userSlice.reducer
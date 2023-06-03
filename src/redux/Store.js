import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cartReducer.js';

// import vocabularyReducer from './reducers/vocabularyReducer';
// import testReducer from './reducers/testReducer';
// import statsReducer from './reducers/statsReducer';

export default configureStore({
   reducer: cartReducer
});

// export default configureStore({
//    reducer: {
//       vocabularyReducer,
//       testReducer,
//       statsReducer
//    }
// });

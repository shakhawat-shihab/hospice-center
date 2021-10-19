const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBYkIbPJbvpbUsqRCms7CsvT5Y5YzSAtyY",
//     authDomain: "hospice-shs.firebaseapp.com",
//     projectId: "hospice-shs",
//     storageBucket: "hospice-shs.appspot.com",
//     messagingSenderId: "16328325449",
//     appId: "1:16328325449:web:bcb4aaefd28ad7ce94c298"
// };
export default firebaseConfig;
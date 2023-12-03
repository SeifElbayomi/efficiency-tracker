// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKPTUaF9QGEqG4xlEMBgfpH5eDs-2Myf4",
  authDomain: "efficiecywa.firebaseapp.com",
  projectId: "efficiecywa",
  storageBucket: "efficiecywa.appspot.com",
  messagingSenderId: "105355734656",
  appId: "1:105355734656:web:09bcb954732fabba620065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference to your database
var database = firebase.database();

// Write to the database
function updateEfficiency(user) {
    let efficiency = document.getElementById(user + 'Efficiency').value;
    database.ref('efficiencies/' + user).set({
        efficiency: efficiency
    });
}

// Read from the database and update UI in real-time
database.ref('efficiencies/seif').on('value', (snapshot) => {
    const data = snapshot.val();
    document.getElementById('seifDisplay').textContent = 'Current: ' + (data ? data.efficiency : '-');
});

database.ref('efficiencies/hazem').on('value', (snapshot) => {
    const data = snapshot.val();
    document.getElementById('hazemDisplay').textContent = 'Current: ' + (data ? data.efficiency : '-');
});

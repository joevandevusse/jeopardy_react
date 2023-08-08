import React, { useEffect, useState } from 'react';
// Change the import statement here
import firebase from 'firebase/compat/app'; 
// Also update the import for the specific Firebase service you need
import 'firebase/compat/database'; 
import Typography from '@material-ui/core/Typography';
import firebaseConfig from '../config/firebaseConfig'; // Adjust the path to match your file structure


const FirebaseClue = () => {
  // State to store the data retrieved from Firebase
  const [data, setData] = useState(null);

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch data from Firebase database on component mount
  useEffect(() => {
    const database = firebase.database();
    const dataRef = database.ref('/'); // Replace 'your-data-path' with the actual path to your data in the database

    dataRef.once('value')
      .then((snapshot) => {
        console.log(snapshot);
        const fetchedData = snapshot.val();
        setData(fetchedData);
        console.log(fetchedData);
      })
      .catch((error) => {
        console.error('Error fetching data from Firebase:', error);
      });
  }, []);

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Button 2 Page
      </Typography>
      {data && (
        <Typography variant="body1">
          Data from Firebase: {JSON.stringify(data)}
        </Typography>
      )}
    </div>
  );
};

export default FirebaseClue;

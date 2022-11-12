  // import{useState,useEffect} from 'react'
  // import { initializeApp } from "firebase/app";
  // import { getFirestore } from "firebase/firestore";
  
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//     apiKey: "AIzaSyBRHUKts1G21BjqNuLbw6W4EQpr9CQiUCU",
//     authDomain: "sheet-hackathon.firebaseapp.com",
//     projectId: "sheet-hackathon",
//     storageBucket: "sheet-hackathon.appspot.com",
//     messagingSenderId: "1051854782879",
//     appId: "1:1051854782879:web:ad0823a47ad8a27e36fdaa"
//   };
  
//   firebase.initializeApp(config);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// const [studentsData,setStudentsData]=useState("");
    // const [students,setstudents]=useState([]);

//CDN
  // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBRHUKts1G21BjqNuLbw6W4EQpr9CQiUCU",
      authDomain: "sheet-hackathon.firebaseapp.com",
      projectId: "sheet-hackathon",
      storageBucket: "sheet-hackathon.appspot.com",
      messagingSenderId: "1051854782879",
      appId: "1:1051854782879:web:ad0823a47ad8a27e36fdaa"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    function studentsData(){
      firebase.database().ref('User').set(
        { name: document.getElementById('nameField')
        }
      )
    }

//     useEffect(()=>{

//     let unsubscribe = null;
//     const getRealtimeData = async()=>{
//     const q = query(collection(db, "students") ,orderBy('createdOn','desc'));
//        unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const students = [];
//         querySnapshot.forEach((doc) => {
//           // students.unshift(doc.data());
//           // students.push(doc.data());

//           students.push({ id: doc.id, ...doc.data() });
//         });

//         setstudents(students);
//         console.log("students: ", students);
//       });
//     }
//         getRealtimeData()
//         return () => {
//           console.log("Cleanup function");
//           unsubscribe();
//         }
//     },[])

//     const savePost = async (e)=>{
//         e.preventDefault();
//         console.log("studentsData:",studentsData);
//         try {
//       const docRef = await addDoc(collection(db, "students"), {
//         text: studentsData,
//       // createdOn: new Date().getTime(),
//       createdOn:serverTimestamp(),
//         // born: 1815
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }

//   const deletePost = async (studentsId) => {
//     console.log("studentsId: ", studentsId);
//     await deleteDoc(doc(db, "students", studentsId));
  
// //   const updatePost = async (e) => {
// //     e.preventDefault();
// //     await updateDoc(doc(db, "students", editing.editingId), {
// //       text: editing.editingText
// //     });
// //     setEditing({
// //       editingId: null,
// //       editingText: ""
// // })
//   }

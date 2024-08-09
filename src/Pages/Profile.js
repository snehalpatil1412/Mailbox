import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <p> Hello!</p>
      <button onClick={(e) => logout()}>Logout</button>
    </div>
  );
};

export default Profile;











// import React, { useEffect, useState } from "react";
// import { auth, db } from "./firebase";
// import { doc, getDoc, collection, getDocs } from "firebase/firestore";
// import { Button } from '@chakra-ui/react';
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// function Profile() {
//   const [userDetails, setUserDetails] = useState(null);
//   const [usersList, setUsersList] = useState([]);
//   const navigate = useNavigate();
//   const { logout } = useAuth0();
//   const [recipientEmail, setRecipientEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');

//   const handleSendEmail = () => {
//     const baseGmailURL = 'https://mail.google.com/mail/?view=cm&fs=1&to=';
//     const url = `${baseGmailURL}${encodeURIComponent(recipientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//     window.open(url, '_blank');
//   };

//   // Function to fetch user details
//   const fetchUserData = async () => {
//     auth.onAuthStateChanged(async (user) => {
//       if (user) {
//         console.log("User logged in:", user);

//         try {
//           const docRef = doc(db, "User", user.uid);
//           const docSnap = await getDoc(docRef);

//           if (docSnap.exists()) {
//             setUserDetails(docSnap.data());
//             console.log("User data:", docSnap.data());
//           } else {
//             console.log("No such document!");
//           }
//         } catch (error) {
//           console.error("Error fetching document:", error);
//         }
//       } else {
//         console.log("User is not logged in");
//       }
//     });
//   };

//   // Function to fetch all users from the collection
//   //   const fetchUsersList = async () => {
//   //     try {
//   //       const querySnapshot = await getDocs(collection(db, "Users"));
//   //       const users = querySnapshot.docs.map((doc) => ({
//   //         id: doc.id,
//   //         ...doc.data(),
//   //       }));
//   //       setUsersList(users);
//   //       console.log("Users list:", users);
//   //     } catch (error) {
//   //       console.error("Error fetching users list:", error);
//   //     }
//   //   };

//   useEffect(() => {
//     fetchUserData();
//     // fetchUsersList();
//   }, []);

//   async function handleLogout() {
//     try {
//       await auth.signOut();
//       window.location.href = "/login";
//       console.log("User logged out successfully!");
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   }
//   const navigatetoCompose = () => {
//     navigate("/compose");
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/home">
     
//           {userDetails ? ( <h3>Welcome to the MailBox {userDetails.firstName}</h3>) : ( <p>Loading...</p>)}
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/receivedmails">
//                   ReceivedMail
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/receivedmails">
//                   SentMails
//                 </a>
//               </li>
             
              
             
//             </ul>
           
//               <Button
//                 colorScheme="blue"
//                 p={4}
//                 onClick={navigatetoCompose}
//                 href="/"
//               >
//                 Compose Mail
//               </Button>
          
//             <Button className="btn btn-primary" onClick={handleLogout}>
//             Logout
//           </Button>
//           </div>
//         </div>
//       </nav>



















//     </div>




                

//   );
// }

// export default Profile;
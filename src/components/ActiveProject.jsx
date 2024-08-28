import React, { useContext } from 'react'
import TaskForm from './TaskForm'
import { ProjectContext } from '../store/Project-context'

function ActiveProject({ activeProject }) {

  // give the project an id so we can get the active project from there
 const {deleteProject} = useContext(ProjectContext)

  const handleDelete = () => {
   deleteProject(activeProject)
  }
  return (
    <div className="flex flex-col mt-28 pl-8 pr-4 md:pr-0 max-w-[600px]  space-y-2 ">
      <div className='flex items-center justify-between'>
        <h2 className="font-bold text-green-950 text-3xl capitalize">{activeProject.title}</h2>
        <button className='text-sm text-green-900 ' onClick={handleDelete}>Delete</button>
      </div>
      <p className="text-green-300 text-sm">{activeProject.date}</p>

      <div className="border-b-2  border-gray-300 text-wrap pb-4  ">
        <p className="text-green-900  break-words text-sm font-medium  ">{activeProject.description}</p>

      </div>

       <TaskForm/>
    </div>
  )
}

export default ActiveProject


// Set Up Firebase Project
// Create a Firebase Project:

// Go to the Firebase Console.
// Click on "Add Project" and follow the setup steps.
// Add Firebase to Your Web App:

// After creating your project, click on the web icon </> to register your app.
// Firebase will provide you with a configuration object that you'll need to add to your project.
// 2. Install Firebase SDK
// In your React project, install Firebase by running the following command in your terminal:

// bash
// Copy code
// npm install firebase
// 3. Configure Firebase in Your Project
// Create a firebaseConfig.js (or similar) file in your src directory and add the Firebase configuration:

// javascript
// Copy code
// // src/firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// // Your Firebase configuration object
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore and Authentication
// const db = getFirestore(app);
// const auth = getAuth(app);

// export { db, auth };
// 4. Using Firebase Firestore for Database Operations
// For example, to add, retrieve, or delete projects, you would use Firebase Firestore. Here's how you can modify your App.js to incorporate Firebase:

// 1. Add a New Project to Firestore:
// javascript
// Copy code
// import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore"; 
// import { db } from "./firebaseConfig"; // Import the configured db

// function App() {
//   const [projects, setProjects] = useState([]);
//   const [activeProject, setActiveProject] = useState(null);

//   // Fetch projects from Firestore
//   useEffect(() => {
//     const fetchProjects = async () => {
//       const projectCollection = collection(db, "projects");
//       const projectSnapshot = await getDocs(projectCollection);
//       const projectList = projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setProjects(projectList);
//     };
//     fetchProjects();
//   }, []);

//   const addProject = async (newProject) => {
//     try {
//       const docRef = await addDoc(collection(db, "projects"), newProject);
//       setProjects([...projects, { id: docRef.id, ...newProject }]);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   };

//   const deleteProject = async (projectId) => {
//     try {
//       await deleteDoc(doc(db, "projects", projectId));
//       setProjects(projects.filter(project => project.id !== projectId));
//       setActiveProject(null);
//     } catch (e) {
//       console.error("Error deleting document: ", e);
//     }
//   };

//   return (
//     <section className="flex w-full">
//       <SideBar addProject={addProject} projects={projects} setActiveProject={setActiveProject} activeProject={activeProject} />
//       <MainPage activeProject={activeProject} deleteProject={deleteProject} />
//     </section>
//   );
// }

// export default App;
// 2. Deleting a Project:
// javascript
// Copy code
// function ActiveProject({ activeProject, deleteProject }) {
//   const handleDelete = () => {
//     if (activeProject) {
//       deleteProject(activeProject.id);
//     }
//   };

//   return (
//     <div className="flex flex-col mt-28 pl-8 max-w-[600px] space-y-2 h-screen">
//       <div className='flex items-center justify-between'>
//         <h2 className="font-bold text-green-950 text-3xl capitalize">{activeProject.title}</h2>
//         <button className='text-sm text-green-900' onClick={handleDelete}>Delete</button>
//       </div>
//       <p className="text-green-300 text-sm">{activeProject.date}</p>
//       <div className="border-b border-green-900 pb-6 max-w-[600px]">
//         <p className="text-green-300 break-words whitespace-pre-wrap">{activeProject.description}</p>
//       </div>
//       <TaskForm />
//     </div>
//   );
// }

// export default ActiveProject;
// 5. Firebase Authentication (Optional)
// If you also need to implement authentication (e.g., Google Sign-In):

// Enable Authentication in Firebase Console:

// Go to the "Authentication" section in your Firebase Console.
// Enable the sign-in methods you want to use (e.g., Email/Password, Google, etc.).
// Implement Authentication in Your Project:

// javascript
// Copy code
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { auth } from "./firebaseConfig";

// const provider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const user = result.user;
//     console.log("User logged in: ", user);
//   } catch (error) {
//     console.error("Error during sign-in: ", error);
//   }
// };

// const logOut = async () => {
//   try {
//     await signOut(auth);
//     console.log("User logged out");
//   } catch (error) {
//     console.error("Error during sign-out: ", error);
//   }
// };
// 6. Deploying Your Project
// When you're ready to deploy, you can use Firebase Hosting to deploy your React project.

// bash
// Copy code
// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
// Choose the appropriate Firebase services during setup, and deploy your app with firebase deploy.

// This should give you a good start on incorporating Firebase into your React project! Let me know if you have specific parts you'd like to dive deeper into.
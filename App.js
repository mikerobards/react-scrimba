import React from 'react'
import NavBar from './components/NavBar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <div>
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App

// function App() {
//     return (
//         <div>
//             <ul style={{listStyleType: "none"}}>
//                 <li>
//                     <input type="checkbox"/><span> laundry</span>
//                 </li>
//                 <li>
//                     <input type="checkbox"/><span> grocery shopping</span>
//                 </li>
//                 <li>
//                     <input type="checkbox"/><span> Code!</span>
//                 </li>
//             </ul>
//         </div>
//     )
// }
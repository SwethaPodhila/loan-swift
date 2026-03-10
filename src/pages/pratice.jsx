import React, { useState, useEffect } from "react";
import axios from "axios";

function Pratice() {
   const [user, setUser] = useState([]);
   const [count, setCount] = useState(0);

   useEffect(() => {
      console.log("useEffect is rendered")
      fetch("http://localhost:5000/loans/users")
         .then((res) => res.json())
         .then((data) => {
            console.log(data.data);
            setUser(data.data);
         });
   }
      , [])

   useEffect(() => {
      setInterval(() => {
         console.log("set timer executed")
      }, [5000])
   })

   function Increment() {
      //setCount(count + 1);
      setCount((count) => count + 1)
      console.log(count)
   }

   useEffect(() => {
      console.log(`count incremented: `, count)
      setTimeout(() => {
         console.log(`count incremented inside timer : `, count)
      }, 4000)
   }, [count])

   return (
      <>
         <div className="container">
            <h5 className="text-center fw-bold mb-3">Iam praticing useState and useEffect hooks</h5>
            <p className="text-center mb-3">useState for managing the state and useEffect for to perform side effects means Api calls, settimers , events and Dom updates </p>
            <button type="submit" onClick={Increment}>Increment count</button><br></br>
            <table className="table table-bordered table-striped table-hover text-center">
               <thead className="table-dark">
                  <tr>
                     <th>Name</th>
                     <th>
                        Phone Number
                     </th>
                     <th>Email</th>
                     <th>Income</th>
                     <th>Loan Type</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     user.map((user) => (
                        <tr key={user._id}>
                           <td>{user.name}</td>
                           <td>{user.phone}</td>
                           <td>{user.email}</td>
                           <td>{user.income}</td>
                           <td>{user.loanType}</td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
      </>
   )
}

export default Pratice;

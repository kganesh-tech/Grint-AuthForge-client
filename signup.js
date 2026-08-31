console.log("Vite env:" , import.meta.env);

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
 const username = 
 document.getElementById("username").value;
 const email =
 document.getElementById("email").value;
 const password =
 document.getElementById("password").value;

 const users = {
    
    username,
    email,
    password
 };

 const API_KEY = import.meta.env.VITE_AUTHFORGE_API_KEY;
 console.log("APIKEY" , API_KEY);
 
 
 try {
        const response = await fetch("http://localhost:3000/users/test-connection", {
            method: "POST",
            headers : {
                "Content-Type" : "application/json",
                "x-api-key": API_KEY
            },
            body : JSON.stringify(users)
          
        });
        const data =await response.json();
        


       

        
       

        console.log(data);
    } catch (error) {
        console.error("Connection failed:", error);
    }
});
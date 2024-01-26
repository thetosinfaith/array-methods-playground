/*4. Write a login function that looks at an array of objects 
e.g [ {email: "dan@gmail.com", password: "dan223", name: "dan"}]
 and takes two parameters that represents email and password. 
 Throw errow messages If user doesn't exist in db, email and password
 is not correct, email not correct, and password not correct, and say 
 "login successful with the person's name" if emaio and password match.
 */


function login(users, email, password) {
    const user = users.find(user => user.email === email);

    if (!user) {
        throw new Error("User doesn't exist in database.");
    } else if (user.password !== password) {
        throw new Error("Password is incorrect.");
    } else {
        return "Login successful with " + user.name;
    }
}


const users = [{email: "da@gmail.com", password: "dan223", name: "dan"}];

try {

    console.log(login(users, "dan@gmail.com", "dan223")); 

} catch (error) {
    
    console.log(error.message);
}

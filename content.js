
const cred = new PasswordCredential({
  id: "id121233",
  password: "passasdword",
  name: "namsadaase",
});

navigator.credentials.store(cred)
 .then(()  => {
   console.log("Password saved")
 });
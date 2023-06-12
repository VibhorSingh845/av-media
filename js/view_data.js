var firebaseConfig = {
    apiKey: "AIzaSyB7XnRqEc5yeqAs7QwA3Fk_wHweY0h7Iis",
      authDomain: "avmedia-7e171.firebaseapp.com",
      projectId: "avmedia-7e171",
      storageBucket: "avmedia-7e171.appspot.com",
      messagingSenderId: "537405325177",
      appId: "1:537405325177:web:00a6aec21fa0447bd2b9a8",
      measurementId: "G-JM9XR8BRJK"
  };
  
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("users").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var tableBody = document.getElementById("dataTable")
    var data = doc.data();
    var name = data.name;
    var email = data.email;
    var msg = data.message;
    var date = data.datetime;
    let row = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    c1.innerText=name;
    c2.innerText=email;
    c3.innerText=msg;
    c4.innerHTML=date;
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    tableBody.appendChild(row);
  });
}).catch(function(error) {
  console.error("Error getting documents: ", error);
});
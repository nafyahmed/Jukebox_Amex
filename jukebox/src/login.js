
(function () {
    const config = {
        apiKey: "AIzaSyDAF-q0VdJIDzTwBbGX3RW07IPiDMmfaKg",
        authDomain: "jukeb-db81f.firebaseapp.com",
        databaseURL: "https://jukeb-db81f.firebaseio.com",
        projectId: "jukeb-db81f",
        storageBucket: "jukeb-db81f.appspot.com",
        messagingSenderId: "364417049455"
    };

    firebase.initializeApp(config);

    //Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //add login event
    btnLogin.addEventListener('click', e=> {
        //get email
        const email = txtEmail.value();
        const pass = txtPassword.value();
        const auth = firebase.auth();

        //sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e=> console.log(e.message));

    });

}());
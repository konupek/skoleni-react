import FireAuth from 'simple-firebase-auth';

constructor(props) {
  super(props);
  FireAuth.init({
    fbAppId: "1445833415507351",
    webClientId: "321894492846-ht2adtt5abhb6bta6obvrh0tnbdqa81i.apps.googleusercontent.com",
    apiKey: "AIzaSyCdVNjzTOrDENP01DIN5PwhtkIIRJC58I8"
  });
}

componentDidMount() {
  FireAuth.setup(this.onLogin, this.onUserChange, this.onLogout, this.emailVerified, this.onError);
}

register = () => {
  const { email, password, firstName, lastName } = this.state;
  FireAuth.register(email, password, { firstName, lastName });
}

login = () => {
  FireAuth.login(this.state.email, this.state.password);
}

facebookLogin() {
  FireAuth.facebookLogin();
}

googleLogin() {
  FireAuth.googleLogin();
}

logout() {
  FireAuth.logout();
}

update () => {
  FireAuth.update({
    firstName: this.state.firstName,
    lastName: this.state.lastName
  }).then(() => {
    console.log('test');
  }).catch(err => {
    console.log('test');
  });
}

resetPassword () => {
  FireAuth.resetPassword(this.state.email)
    .then(() => {
      console.log('test');
    })
    .catch(err => {
      console.log('test');
    });
}

updatePassword () => {
  FireAuth.updatePassword(this.state.password)
    .then(() => {
      console.log('test');
    })
    .catch(err => {
      console.log('test');
    });
}

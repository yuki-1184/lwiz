import { firebaseApp } from '../config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth(firebaseApp);

const actionCodeSettings = {
  url: 'https://localhost:3000/signin',
  handleCodeInApp: false,
};

export default async function sendResetEmailCode(email: string) {
  return sendPasswordResetEmail(auth, email, actionCodeSettings);
}

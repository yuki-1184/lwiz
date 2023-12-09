import { firebaseApp } from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default async function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

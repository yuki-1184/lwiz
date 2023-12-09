import { firebaseApp } from '../config';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const auth = getAuth(firebaseApp);

export default async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

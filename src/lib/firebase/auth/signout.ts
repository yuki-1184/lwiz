import { firebaseApp } from '../config';
import { signOut, getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default async function logOut() {
  return signOut(auth);
}

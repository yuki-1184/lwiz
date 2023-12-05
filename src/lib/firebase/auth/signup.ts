import { firebaseApp } from '../config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    alert('登録完了');
    console.log(user);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

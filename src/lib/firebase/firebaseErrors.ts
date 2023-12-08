import { FirebaseError } from 'firebase/app';

export const handleFirebaseAuthError = (error: FirebaseError): string => {
  switch (error.code) {
    case 'auth/invalid-credential':
      return 'パスワードが正しくありません。再度、お試しください。';
    default:
      return '申し訳ありませんが、何か問題が発生しました。再度お試しください。';
  }
};

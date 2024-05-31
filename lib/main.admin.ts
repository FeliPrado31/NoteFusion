import { getAuth, getFirestore } from './firebase.admin.config';

const firestore = async () => await getFirestore();
const auth = async () => await getAuth();

export { firestore, auth };

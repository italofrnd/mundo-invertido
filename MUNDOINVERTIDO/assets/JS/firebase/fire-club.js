import app from './app.js'
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToFireClub(subscription) {
    const db = getFirestore(app)
    const fireClubCollection = collection(db, 'fire-clube')
    const docRef = await addDoc(fireClubCollection, subscription)
    return docRef.id

}   

// VISUALIZAR DATABASE FIREBASE NO CONSOLE //

export async function getFireClubSubscriptions() {
    const db = getFirestore(app)
    const fireClubCollection = collection(db, 'fire-clube')
    const fireClubCollectionSnapshot = await getDocs (fireClubCollection);
    const subscriptions = fireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}
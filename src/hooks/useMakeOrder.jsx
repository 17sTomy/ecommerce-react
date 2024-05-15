import { collection, getFirestore, addDoc } from "firebase/firestore";

export const useMakeOrder = () => {
  const makeOrder = async (order) => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, order);
    return docRef.id;
  };

  return { makeOrder };
};
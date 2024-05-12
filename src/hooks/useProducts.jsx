import { useState, useEffect } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    const querySnapshot = await getDocs(productsCollection);
    const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProducts(productsData);
    setIsLoading(false);
  }; 
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading };
};
import { useState, useEffect } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoading(true);
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");
    const querySnapshot = await getDocs(categoriesCollection);
    const categoriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCategories(categoriesData);
    setIsLoading(false);
  }; 
  
  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, isLoading };
};
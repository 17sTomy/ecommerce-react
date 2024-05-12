import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

export const useProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProduct = async () => {
    const db = getFirestore();
    const q = query(collection(db, "products"), where("id", "==", parseInt(id)));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProduct({ id: doc.id, ...doc.data() });
    });
  };
  
  useEffect(() => {
    fetchProduct();
  }, []);

  return { product };
};
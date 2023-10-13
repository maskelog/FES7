import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {

    // 문서들의 데이터를 관리합니다.
    const [documents, setDocuments] = useState(null);

    // 에러 상태를 관리합니다.
    const [err, setErr] = useState(null);

    useEffect(() => {
      console.log(1)
        let q;
        if (myQuery) {
            q = query(collection(appFireStore, transaction), where(...myQuery), orderBy("createdTime", "desc"));
        }
        console.log(2)

        const unsubscribe = onSnapshot(myQuery ? q : collection(appFireStore, transaction),
        
        (snapshot) => {
              console.log(3)
                let result = [];

                snapshot.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id });
                });

                console.log(result)
                setDocuments(result);

            }, (error) => {
                setErr(error);
            })

        return () => {
            unsubscribe();
        }
    }, []);

    return { documents, err }
}
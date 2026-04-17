import { useEffect, useState } from "react";
import { useParams } from "react-router";


const FriendDetail = () => {
    const {id} = useParams()
    
    const [selected, setSelected] = useState({});
        
        useEffect(()=>{
          const fetchData = async () => {
            const res = await fetch('/data.json');
            const data = await res.json();
            console.log(data)
            const selectedData = data.find((friendData)=> String(friendData.id) === id ) 
            setSelected(selectedData)
          } ;
          fetchData();
        }, [id]);
        console.log(selected)
        

    return (
        <div>
            <h1>Name:{selected.name}</h1>
            {selected.email}
        </div>
    );
};

export default FriendDetail;
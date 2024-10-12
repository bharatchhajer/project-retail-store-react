import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './StoreAll.css'

const base_url = "http://localhost:7070"
const fetchURL = "/api/admin/stores/all"

const StoreAll = () => {
    const [ stores, setStores ] = useState([])

    useEffect( () =>{
        async function fetchData(){
            const request = await axios.get(base_url + fetchURL)
            setStores(request.data)
            //console.log("data: " + request.data)
        }
        fetchData()
    }, [fetchURL])

  return (
    <div>
        <h1>Stores</h1>
        <ul>
                {stores.map(store => (
                    <li key={store.store_id}>
                        {store.store_name} - {store.storeDetail.city} 
                        - {store.storeDetail.contact_number ? store.storeDetail.contact_number 
                                : ""}
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default StoreAll
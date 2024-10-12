import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './StoreAdd.css'

const base_url = "http://localhost:7070"
const fetchURL = "/api/admin/stores/add"

const StoreAdd = () => {
    const [storeName, setStoreName] = useState('');
    const [storeDetails, setStoreDetails] = useState({
        city: '',
        contactNumber: ''
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'storeName') {
            setStoreName(value);
        } else {
            setStoreDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        const storeData = {
            store_name: storeName,
            storeDetail: storeDetails,
        };

        try {
            console.log("storedata = " + JSON.stringify(storeData, null, 2))
            const response = await axios.post(base_url + fetchURL, storeData, {
                headers: {
                    'Content-Type': 'application/json', // Specify the content type as JSON
                },
            });
            setResponseMessage(`Store created with ID: ${response.data.id}`);
        } catch (error) {
            setResponseMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h2>Create a New Store</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Store Name:
                        <input type="text" name="storeName" value={storeName} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        City:
                        <input type="text" name="city" value={storeDetails.city} onChange={handleChange} required />
                    </label>
                </div>
                <div>
                    <label>
                        Contact Number:
                        <input type="text" name="contact_number" value={storeDetails.contact_number} onChange={handleChange} required />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default StoreAdd
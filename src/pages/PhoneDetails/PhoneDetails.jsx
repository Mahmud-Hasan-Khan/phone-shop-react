import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const PhoneDetails = () => {
    const [phone, setPhone] = useState();

    const { id } = useParams();
    console.log(id);

    const phones = useLoaderData();
    // console.log(phones);

    //get specific data as per id
    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id)
        console.log(findPhone);
    }, [id, phones])

    return (
        <div>

        </div>
    );
};

export default PhoneDetails;
import { useEffect, useState } from 'react';
const useDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(resp => resp.json())
            .then(json => setDoctors(json))
    }, []);
    return { doctors };
}
export default useDoctor;
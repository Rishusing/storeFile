import React,{useState} from 'react'
import { storage } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom'
import './UploadProfile.css'

const UploadProfile = () => {

    const navigate = useNavigate();

    const [profileImage, setProfileImage] = useState(null);

    const uploadImage = async() => {
        if (profileImage == null) return;
        const imageRef = ref(storage, auth.currentUser.email+"/profileImage");
        await uploadBytes(imageRef, profileImage)
        navigate('/');
    }


    return (
        <div className='parent'>
            <h1>Upload Profile Picture</h1>
            <div className="child">

                <input type="file" onChange={e => setProfileImage(e.target.files[0])} />
                <button className='prfbtn' onClick={uploadImage} >Upload</button>
            </div>
        </div>
    )
}

export default UploadProfile
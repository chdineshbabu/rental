import { useForm } from "react-hook-form"
import *as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from "../configuration/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { storage } from "../configuration/firebase"
import { ref, uploadBytes, getStorage } from 'firebase/storage'
import { v4 } from 'uuid';
import { getDownloadURL } from "firebase/storage"
function DashForm() {
    const navigate = useNavigate()


    //Auth Profile 
    const [user] = useAuthState(auth)
    //Yup Form Validation
    const schema = yup.object().shape({
        property: yup.string().required('You Must Add a property Name'),
        description: yup.string().required('You Must Add a Descriptiopn'),
        price: yup.number().required('You Must Add a Price'),
        location: yup.string().required('You Must Add a Location'),

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    //Firebase database Storage Config
    const postsRef = collection(db, "sells");
const onCreatePost = async (data) => {
        await addDoc(postsRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid,
            imgurl: Url,
        })
        navigate(0)
    }
    // Image storage config
    const [imageUpload, setImageUpload] = useState(null);
    const [Url,setUrl] = useState(null);

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("Image Uploded")
        });

        getDownloadURL(imageRef)
            .then((url) => {
                setUrl(url)
            })
            .catch((error) => {
                console.error('Error getting download URL:', error);
            });

    }


    return (
        <div className='dash-form '>
            <h1 className='text-white text-3xl font-semibold'>Sell Now</h1>
            <div className='form-db'>
                <form onSubmit={handleSubmit(onCreatePost)} >
                    <div class="group">
                        <label className='text-white py-1' for="name">Property</label>
                        <input type="text" id="name" className='bg-transparent text-white' placeholder=""  {...register('property')} /><hr style={{ width: "300px" }} />
                        <p>{errors.property?.message}</p>
                    </div>
                    <div class="group">
                        <label className='text-white py-1' for="name">Description</label>
                        <input type="textarea" id="name" className='bg-transparent text-white' placeholder=""  {...register('description')} /><hr style={{ width: "300px" }} />
                        <p>{errors.description?.message}</p>
                    </div>
                    <div class="group">
                        <label className='text-white py-1' for="name">Price</label>
                        <input type="text" id="name" className='bg-transparent text-white' placeholder=""  {...register('price')} /><hr style={{ width: "300px" }} />
                        <p>{errors.price?.message}</p>
                    </div>
                    <div class="group">
                        <label className='text-white py-1' for="name">Location</label>
                        <input type="text" id="name" className='bg-transparent text-white' placeholder=""  {...register('location')} /><hr style={{ width: "300px" }} />
                        <p>{errors.location?.message}</p>
                    </div>
                    <label class="flex my-10 ">
                        <span class="sr-only">Choose profile photo</span>
                        <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} class="block w-full text-sm text-slate-500
                                                 file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                              file:bg-violet-50 file:text-violet-700
                                            hover:file:bg-violet-100"/>
                                            
                    </label>
                    <input className="in-btn"  onClick={uploadImage} size="4" value="upload" />
                    <input className="form-btn" type="submit" value="Publish" />
                </form>
            </div>
        </div>
    )
}

export default DashForm
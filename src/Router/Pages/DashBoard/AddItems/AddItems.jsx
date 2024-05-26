import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import UseAxiosPublic from '../../../../Hooks/UseAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AddItems = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()
    const axiosPublic = UseAxiosPublic()
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log('with image url', menuRes)
            if (menuRes.data.insertedId) {
                reset()
                // sow popup
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

    }

    // console.log(watch("example"))

    return (
        <section className='border w-full mx-32'>
            <SectionTitle subHeading={"---What's new?---"} heading={"ADD AN ITEM"}></SectionTitle>
            <div className='px-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
                    <div className='w-full space-y-2 flex flex-col'>
                        <label htmlFor="">Recipe name</label>
                        <input {...register("name", { required: true })} placeholder='Recipe Name' type="text" name="name" className="input w-full input-bordered" />
                    </div>
                    <div className='flex'>
                        <div className='w-full space-y-2 flex flex-col'>
                            <label htmlFor="">Category</label>
                            <select defaultValue="default" className="select select-bordered w-full max-w-xs">
                                <option disabled value="default">Category</option>
                                <option value={'salad'}>Salad</option>
                                <option value={'soup'}>Pizza</option>
                                <option value={'soup'}>Soup</option>
                                <option value={'dessert'}>Dessert</option>
                                <option value={'drinks'}>Drinks</option>

                            </select>
                        </div>
                        <div className='w-full space-y-2 flex flex-col'>
                            <label htmlFor="">Price</label>
                            <input {...register("price", { required: true })} placeholder='Price' type="text" name="price" className="input w-full input-bordered" />
                        </div>
                    </div>
                    <div>
                        <textarea {...register("recipe", { required: true })} placeholder='Recipe Details' className='w-full h-[20vh]  textarea textarea-bordered'></textarea>
                    </div>
                    <div>
                        <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    {/* <div className='w-full space-y-2 flex flex-col'>
                        <label htmlFor="">Photo Url</label>
                        <input {...register("image", { required: true })} placeholder='Photo Url' type="text" name="price" className="input w-full input-bordered" />
                    </div> */}
                    <input className='btn text-white bg-[#896125]' type="submit" value="Add Item" />
                </form>
            </div>
        </section>
    );
};

export default AddItems;                    
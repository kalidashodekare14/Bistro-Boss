import React from 'react';
import useCart from '../../../../Hooks/useCart';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const Cart = () => {
    const [cart, refetch] = useCart()
    console.log(cart)
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDeleteCart = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id)
                axiosSecure.delete(`/carts/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })

            }
        });
    }


    return (
        <div className='space-y-5 w-full mx-20'>
            <div className='flex justify-between items-center'>
                <h2 className="text-3xl">total price: {cart.length}</h2>
                <h2 className="text-3xl">total price: {totalPrice}</h2>
                <button className='btn w-32'>Play</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#d1a054] text-white uppercase'>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='w-20 rounded-lg' src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => handleDeleteCart(item._id)} className='btn'><RiDeleteBin6Line /></button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
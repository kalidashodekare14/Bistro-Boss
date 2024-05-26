import React from 'react';
import useMenu from '../../../../Hooks/useMenu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const ManageItem = () => {

    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()


    const handleManageDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }

            }
        });
    }

    const handleManageUpdate = () => {

    }

    return (
        <div className='w-full mx-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-[#d1a054] text-white uppercase'>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td><img className='w-20 rounded-lg' src={item.image} alt="" /></td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <td><button onClick={() => handleManageUpdate(item._id)} className='btn'><FaEdit /></button></td>
                                    <td><button onClick={() => handleManageDelete(item)} className='btn'><RiDeleteBin6Line /></button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;
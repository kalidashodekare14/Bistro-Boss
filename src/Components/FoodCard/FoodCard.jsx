import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = food => {
        // console.log(food, user.email)
        if (user && user.email) {
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                name,
                image,
                price,
                current_info: {
                    name: user?.displayName,
                    email: user?.email
                }
            }
            console.log(cartItem)
            axiosSecure.post(`/carts`, cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Cart Add Success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Loging to add to the cart",
                text: "You have to login first then you can add card.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login Here"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className=" card bg-base-100 shadow-xl">
            <div className='relative'>
                <figure><img src={image} alt="Shoes" /></figure>
                <div>
                    <span className='absolute top-3 right-3 bg-black text-white p-2'>${price}</span>
                </div>
            </div>
            <div className="card-body">
                <h2 className="text-[18px] font-bold text-center">{name}</h2>
                <p className='text-[15px]'>{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className='btn bg-opacity-0 border-0 border-b-[#bb8506] hover:text-black text-[#bb8506] hover:bg-[#bb8506]  border-b-2'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
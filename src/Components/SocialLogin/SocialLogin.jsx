import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { handleGoogleSignin } = useAuth()
    const axiosPublic = useAxiosSecure()
    const navigate = useNavigate()


    const handleGoogleLogin = () => {
        handleGoogleSignin()
            .then(res => {
                console.log(res.user)
                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn w-40 '>
                <FaGoogle className='text-3xl'></FaGoogle>
            </button>
        </div>
    );
};

export default SocialLogin;
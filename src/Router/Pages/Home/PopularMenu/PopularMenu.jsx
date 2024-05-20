
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import axios from 'axios';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../../Hooks/useMenu';

const PopularMenu = () => {

    const [popular] = useMenu()
    const popularItem = popular.filter(item => item.category === 'popular')


    // const [pupular, setPopular] = useState([])

    // useEffect(() => {
    //     axios.get('menu.json')
    //         .then(res => {
    //             // console.log(res.data)
    //             const popularItem = res.data.filter(item => item.category === 'popular')
    //             setPopular(popularItem)
    //         })
    // }, [])

    return (
        <section className='my-20'>
            <SectionTitle
                subHeading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    popularItem.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;
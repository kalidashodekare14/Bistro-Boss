import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuCover from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const offers = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <section>
            <Helmet>
                <title>Bestro Boss | Menu</title>
            </Helmet>
            <div>
               
                <Cover
                    image={menuCover}
                    title={'OUR MENU'}
                    description={'Would you like to try a dish?'}
                />
            </div>
            {/* offer Menu */}
            <div className="my-20">
                <div>
                    <SectionTitle
                        subHeading={"---Don't miss---"}
                        heading={"TODAY'S OFFER"}
                    />
                </div>
               <MenuCategory items={offers} btnName={"ORDER YOUR FAVOURITE FOOD"} />
            </div>
            {/* Desserts */}
            <div>
                <MenuCategory 
                image={dessert}
                title={"desserts"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={desserts}
                btnName={"ORDER YOUR FAVOURITE FOOD"}
                 />
                
            </div>
            {/* PIZZA */}
            <div>
                <MenuCategory 
                image={pizzaImg}
                title={"pizza"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={pizza}
                btnName={"ORDER YOUR FAVOURITE FOOD"}
                 />
            </div>
            {/* salad */}
            <div>
                
                <MenuCategory 
                image={saladImg}
                title={"salads"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={salads}
                btnName={"ORDER YOUR FAVOURITE FOOD"}
                />
            </div>
            {/* SOUPS */}
            <div>
                <MenuCategory 
                image={soupImg}
                title={"soups"}
                description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                items={soups}
                btnName={"ORDER YOUR FAVOURITE FOOD"}
                />
            </div>

        </section>
    );
};

export default Menu;
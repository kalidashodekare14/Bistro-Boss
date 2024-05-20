

const MenuItem = ({ item }) => {
    const { image, price, recipe, name } = item
    return (
        <div className="flex items-center space-x-3 ">
            <img className="w-32 rounded-tr-[300px] rounded-br-[300px] rounded-bl-[300px]" src={image} alt="" />
            <div className="space-y-3">
                <div className="flex justify-between">
                    <h1 className="text-[20px]">{name} ------------------</h1>
                    <h2 className="text-[#cca344] text-[18px]">${price}</h2>
                </div>

                <p >{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;
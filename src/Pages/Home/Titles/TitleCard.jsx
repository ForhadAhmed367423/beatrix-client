
const TitleCard = ({items}) => {
    return (
        <div>
            <img className="image" src={items.image} alt="" />
            <h1 className="cardtitle font">{items.title}</h1>
            <div className="flex">
                <p className="font f">By</p>
                <p className="author font">{items.author}</p>
                <p className="font f">{items.date}</p>
            </div>
        </div>
    );
};

export default TitleCard;
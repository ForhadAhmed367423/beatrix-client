
const RecentPickCard = ({items}) => {
    return (
        <div>
            <div>
                <img className="recentImg" src={items.image} alt="" />
                <h1 className="recentTitle font">{items.title}</h1>
                <p className="font recentdes">{items.description}</p>
                <div className="flex">
                <p className="font f">By</p>
                <p className="author font">{items.author}</p>
                <p className="font f">{items.date}</p>
            </div>
            </div>
        </div>
    );
};

export default RecentPickCard;
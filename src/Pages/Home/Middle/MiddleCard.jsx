
const MiddleCard = ({items}) => {
    return (
        <div>
            <img className="middleImg" src={items.image} alt="" />
            <h1 className="middletitle font">{items.title}</h1>
            <p className="middledetails font">{items.details}</p>
            <div className="middleflex">
                <p className="f font">
                    By
                </p>
                <p className="middleauthor font">{items.author}</p>
                <p>{items.date}</p>
            </div>
        </div>
    );
};

export default MiddleCard;
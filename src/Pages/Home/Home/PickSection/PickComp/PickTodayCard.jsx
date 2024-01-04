
const PickTodayCard = ({items}) => {
    console.log(items)
    return (
        <div className="PICKfLX">
            <div>
                <h1 className="pickHead1">{items.number}</h1>
            </div>
            <div>
                <h1 className="pickTitle">{items.title}</h1>
                <div className="flex">
                <p className="font f">By</p>
                <p className="author font">{items.author}</p>
                <p className="font f">{items.date}</p>
            </div>
            </div>
        </div>
    );
};

export default PickTodayCard;
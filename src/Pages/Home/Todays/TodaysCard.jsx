
const TodaysCard = ({items}) => {
    return (
        
            <div className="tcard">
               <div>
               <img className="todaysimg" src={items.image} alt="" />
               </div>
                <div>
                    <p className="todaysSub  font">{items.sub}</p>
                    <h1 className="todaysTitle  font">{items.title}</h1>
                    <div className="auth">
                        <p className="todaysauthor  font">{items.author}</p>
                        <p className="todaysdate font"  >{items.date}</p>
                    </div>
                </div>
            </div>
        
    );
};

export default TodaysCard;
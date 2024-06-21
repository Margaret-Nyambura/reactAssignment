import './index.css'
const UserCard=({image,fullName})=>{
    return(
        <div className="Cards">
            <img src={image} alt={`${fullName} profile`} className="image"/>
            <h3 className="fullName">
{fullName}
            </h3>
        </div>
    )
}
export default UserCard;


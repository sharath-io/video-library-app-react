import { useNavigate } from 'react-router-dom';

export function CategoryCard({list}){
    const navigate = useNavigate();
    const {thumbnail,category} = list;
    return (
        <div onClick={()=> {
            console.log('navigating')
            navigate(`/videoListing/${category}`)}
        }>
            <img src={thumbnail} alt={category}/>
            <p>{category}</p>
        </div>
    )
}
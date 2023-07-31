export function CategoryCard({list}){
    const {thumbnail,category} = list;
    return (
        <div>
            <img src={thumbnail} alt={category}/>
            <p>{category}</p>
        </div>
    )
}
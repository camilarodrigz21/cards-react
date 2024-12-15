import "../styles/card.css"

const Card = ({ user }) => {
  
  return (
    <div className="card-user">
        <article className="article-user">
            <img className="img-card-user" src="https://www.shutterstock.com/image-vector/cute-cat-wear-dino-costume-600nw-2457633459.jpg" alt="" srcset="" />
        </article>

        <div className="info-user">
            <h3>{user.nombre} {user.apellido}</h3>
            <h6>Pais: {user.pais}</h6>
            <h6>Ciudad: {user.ciudad}</h6>

        </div>
    </div>
  )
}

export default Card
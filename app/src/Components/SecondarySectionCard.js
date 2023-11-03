import '../Styles/SecondarySectionCard.css';

function SecondarySectionCard({ imgSrc, title, body }) {
    return (
        <div className='card'>
            <img src={imgSrc} className="card-image" width={20} height={20} />
            <h3 className="card-title">{title}</h3>
            <p className="card-body">{body}</p>
        </div>
    );
}

export default SecondarySectionCard;

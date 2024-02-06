//imageArray is an array of objects with the following structure: { id: 0, img: RennerGamesImage, name: "Renner games", link:'https://www.google.com' }

const ProjectGrid = ({ imagesArray }) => {
    return (
        <>
            <div className="project-grid">
                {(imagesArray) && imagesArray.map(image => (
                    <div key={image.id} className='img-wrapper'>
                        <a href={image.link}>
                            <img className='img' alt='name' src={image.img} />
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
};

export default ProjectGrid;
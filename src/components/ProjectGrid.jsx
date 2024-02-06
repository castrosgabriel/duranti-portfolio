//imageArray is an array of objects with the following structure: { id: 0, img: RennerGamesImage, name: "Renner games", link:'https://www.google.com' }

const ProjectGrid = ({ projectArray }) => {
    return (
        <>
            <div className="project-grid">
                {(projectArray) && projectArray.map(project => (
                    <div key={project.id} className='img-wrapper'>
                        <a href={project.link}>
                            <img className='img' alt='name' src={project.img} />
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
};

export default ProjectGrid;
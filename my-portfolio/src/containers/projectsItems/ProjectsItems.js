import RightArrow from '../../assets/images/arrow-right-solid.svg';



const ProjectsItems = ({classNameDiv, classNameImg, urlGithub, name, url, imagen, description}) => {
    if (classNameDiv === "works__div--right") {
        return(
            <div className={classNameDiv}>
                <div className={classNameImg}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <a href={urlGithub} target="_blank" rel="noreferrer" className="a--disable">
                        <p>Check the code</p>
                        <img src={RightArrow} alt="Right arrow" />
                    </a>
                </div>
                <a href={url} target="_blank" rel="noreferrer">
                    <img src={imagen} alt="Landing page " />
                </a>
            </div>
        )
    } else {
        return(
                <div className={classNameDiv}>
                <a href={url} target="_blank" rel="noreferrer" >
                    <img src={imagen} alt="Api project "/>
                </a>
                <div className={classNameImg}>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <a href={urlGithub} target="_blank" rel="noreferrer" className="a--disable">
                        <p>Check the code</p>
                        <img src={RightArrow} alt="Right arrow" />
                    </a>
                </div>
                </div>
            )
    }
}

export default ProjectsItems;
import { DurantVectorImage } from '../assets/images';

const SideBar = () => {
    return (
        <>
            <div className="sidebar-container">
                <img className="duranti-vector" alt="Duranti" src={DurantVectorImage} />
                <div className="sidebar-content">
                    <div className="resume-list">
                        <div className="div">
                            <p>[ROLE]</p>
                            <p><span>SENIOR CREATIVE</span></p>
                            <p><span>ART DIRECTOR</span></p>
                            <p><span>MOTION DESIGNER</span></p>
                            <p><span>VIDEO EDITOR</span></p>
                        </div>
                        <div className="div">
                            <p>[BASED IN]</p>
                            <p><span>SÃO PAULO,</span></p>
                            <p><span>BRAZIL</span></p>
                        </div>
                        <div className="div">
                            <p>[AGENCY]</p>
                            <p><span>PAIM</span></p>
                            <p><span>UNITED</span></p>
                            <p><span>CREATORS</span></p>
                        </div>
                    </div>
                    <div className="more-info-list">
                        <div className="div-2">
                            <p>[SOFTWARE]</p>
                            <p>PHOTOSHOP</p>
                            <p>AFTER EFFECTS</p>
                            <p>PREMIERE</p>
                            <p>ILLUSTRATOR</p>
                            <p>PRO CREATE</p>
                            <p>MIDJOURNEY</p>
                            <p>CHAT GPT</p>
                            <p>BLENDER (NEW)</p>
                        </div>
                        <div className="div-2">
                            <p>[CONTACT]</p>
                            <p>INSTAGRAM</p>
                            <p>LINKED IN</p>
                            <p>E-MAIL</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;
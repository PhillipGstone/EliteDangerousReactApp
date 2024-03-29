import Fed from "../Pics/federation.png";
import Empire from "../Pics/empire.jpg";
import Alliance from "../Pics/alliance.png";

const Factions = () => {

    return (
        <>
        <br/>
        <h1>Factions page</h1>
        <p class="text">Humanity in the 34th century is divided into thousands of unique factions, each with their own history, culture, and ethos. Factions generally fall into one of two main categories: Minor Factions, which are organizations that can control anywhere from dozens of star systems to a single station, and Superpowers, which are large political unions of Minor Factions that share a similar, overarching culture and economic ties. The interplay of Minor Factions results in frequent territorial changes, but the overwhelming strength of the Superpowers provides a steadying influence.</p>
        <p class="text">There are 3 main factions. <a href="#federation">The Federation</a>&nbsp;<a href="#empire">The Empire</a> and <a href="#alliance">The Alliance</a></p> 
        <br/>
        <h3 id="federation">The Federation</h3>
        <div class="factions_carousel">
        <img src={Fed} title="The Federation logo" className="fac_pics" alt="Picture of The Federation logo"/>
        <p class="factions_pics_text">The Federation, formerly the Federation of Star Systems, is a galactic superpower and representative democracy. It is the oldest and largest of the three major factions in the galaxy.[2] Planet Earth (Sol), birthplace of humankind, is the historic former capital of the Federation and regarded as the centre of human-inhabited space. The Federation loosely lies between the Alliance and the Empire on the Galaxy Map. The Federation's current capital is Olympus Village on Mars. Several branches of the federal government are in Olympus Village such as the Federal Congress and the President in the White House. &nbsp; The Federation arose from the ashes of World War III in the mid 21st century. The war caused tremendous devastation across the planet, decimating the population.[3] In the period of rebuilding after the end of World War 3 on Earth (circa 2044-2055 CE) the corporations became powerful and dominant. In modern times the corporations are the lifeblood and backbone of the Federation. The Federation uses technology extensively and is economically and socially a corporatocracy. The corporations have such influence that they generally push and fund their chosen candidates or parties, as do other special interest groups.[4] The current Federal President is Zachary Hudson. </p>
        </div>
        <br/><br/>
        <h3 id="empire">The Empire</h3>
        <div class="factions_carousel">
        <img src={Empire} title="The empire logo" className="fac_pics" alt="Picture of The empire logo"/>
        <p class="factions_pics_text">The Empire, officially the Empire of Achenar, is a galactic superpower and hereditary monarchy. It is the second largest major faction in the galaxy. The reigning Emperor is Arissa Lavigny-Duval of the Imperial Family. The Imperial Palace, seat of the Emperor, is located in the city of Capitol on the planet Capitol in the Achenar system. &nbsp; Although a peace treaty has existed between the Empire and the Federation since 2382, there have never really been any peaceful relations between these two old enemies. The Empire despises the Federation and everything it stands for, and vice-versa. &nbsp; The Empire is less technologically dependent than the Federation, choosing to keep and employ slaves for the work which machines would usually perform in other parts of the universe. The Empire is also a proponent of human cloning rather than robotics.</p>
        </div>
        <br/>
        <h3 id="alliance">The Alliance</h3>
        <div class="factions_carousel">
        <img src={Alliance} title="The alliance logo" className="fac_pics" alt="Picture of The alliance logo"/>
        <p class="factions_pics_text">The Alliance, officially the Alliance of Independent Systems, is a galactic superpower and a parliamentary democracy. It is the third largest major faction in the galaxy. Its historic and political center is the system of Alioth; Garden City on Turner's World, close to the old industrial and ship-building city of New Rossyth, is the seat of the Alliance government. &nbsp; The Alliance was established in 3230 in Alioth, and portrays itself as a beacon of human rights and democracy in an increasingly autocratic universe. It rejects the rigid hierarchy of the Empire and the extreme capitalism of the Federation, opting instead for a voluntary political association focused on the mutual prosperity of its members. However, the decentralized nature of this approach means that the Alliance's many member systems, represented by their respective Councillors on the Alliance Assembly, often struggle to come to an agreement on anything. The Alliance is led by the Alliance Prime Minister, who is elected by and heads the Alliance Assembly. The current Alliance Prime Minister is Edmund Mahon.</p>
        </div>
        <br/>
        <a href="#top" class="text">Back to top</a>
        </>
    )
}

export default Factions;
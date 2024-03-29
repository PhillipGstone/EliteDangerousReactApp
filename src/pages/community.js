import fuel_rats from "../Pics/fuel_rats.jpg";
import Operation_Ida from "../Pics/ida.png";
import axi from "../Pics/axi.png";
import buckyball from "../Pics/buckyball_racing.png";

const Community = () => {

    return (
        <>
        <br/> 
        <h1>Community page</h1>
        <p className="text"><b>o7 Commanders, welcome to the Community page!</b><br/><br/>
        <b>Elite Dangerous</b> has a big great community full of many different people and groups who love to play the game in different ways and have different goals.<br/><br/>
        Below is just a few of the community groups in <b>Elite Dangerous</b> but there is loads more. These groups like to, help other Commanders/players if they're stranded or help them if they just started or maybe you want to kill some thargoids and help out with the Thargoid war. There's also groups that like to help by repairing stations the thargoids attack, or if you just looking for some fun, there's groups that do stuff like racing/canyon racing in ships and just have loads of fun.</p>
        <br/>
        <a href="#fuel_rats" class="text">Fuel Rats</a><a href="#ida" class="text">Operation Ida</a><a href="#axi" class="text">Anti-Xeno Initiative</a><a href="#buckyball_racing" class="text">Buckyball Racing Club</a>
        <br/><br/><br/> 
        <h3 id="fuel_rats">Fuel Rats</h3> 
        <div class="community_carousel">
        <img className="com_pics" src={fuel_rats} title="fuel rats logo"  alt="Picture of fuel rats logo"/> 
        <p class="community_pics_text">The Fuel Rats are a group of pilots who provide free aid to ships that have run out of fuel and have no means to refuel themselves due to either lacking a Fuel Scoop or having insufficient fuel to reach a star via hyperspace or supercruise.[1] They primarily use fuel transfer limpets to refuel these wayward ships, but they have also adopted repair limpets. They are represented by two minor factions: The Fuel Rats Mischief in Fuelum in the Core Systems, and The Fuel Rat Colony in Rodentia in the Colonia Region. &nbsp; The Fuel Rats are a hierarchy-less collective. That means they have no leader and no assigned jobs within the organization. Members who disagree about something work it out by listening to each other, suggesting solutions, and (hopefully) deciding collectively what to do. Not having leaders does not mean chaos; it is not the dog-eat-dog world of a nihilist/survivalist. "Our collective is more like the communes of the ancient Greek philosophers Aristotle and Epicurus: they did not need government or leaders because they were basically in agreement about what needed to be done." The “collective” is more like a team, sharing a common goal. Military units have to resort to hierarchical command-structures in order to get people to do the right thing in a situation where disagreement is fostered by political pressure. The Fuel Rats prefer to expect people to do the right thing. If someone doesn’t fit in, they’ll get polite suggestions to find another hobby than Fuel Ratting.</p>
        </div>
        <br/>
        <h3 id="ida">Operation Ida</h3> 
        <div class="community_carousel">
        <img className="com_pics" src={Operation_Ida} title="Operation Ida logo"  alt="Picture of Operation Ida logo"/> 
        <p class="community_pics_text">Operation Ida is an independent player group and Player Minor Faction that focuses on station repairs. Created in 3304 and headquartered in Pleiades Sector HR-W d1-41, Operation Ida was founded due to an overwhelming need to repair stations that were attacked by Thargoids in the Pleiades Nebula. Stations that are attacked by Thargoids or humans require specific commodities (anywhere from 200,000 to 2,500,000 tons) to bring the station back online. Operation Ida specializes in organizing mass repair efforts and coordinating thousand of haulers to bring commodities to stations with the goal of repairing the station and restoring its services. As of April 3307, Operation Ida has conducted 167 repair efforts in the Pleiades, Core Systems, Witch Head Nebula, and the Coalsack Nebula, and consists of 1,558 player haulers who have collectively hauled over 94 million tons of commodities.</p>
        </div>
        <br/>
        <h3 id="axi">Anti-Xeno Initiative</h3> 
        <div class="community_carousel">
        <img className="com_pics" src={axi} title="Anti-Xeno Initiative logo"  alt="Picture of Anti-Xeno Initiative logo"/> 
        <p class="community_pics_text">The Anti-Xeno Initiative is an Elite Dangerous player-group dedicated to protecting humanity from the Thargoid threat. We defend systems targeted by the vile xenos, study their technology and behavior, and perfect our battle tactics. Whether you seek to save the galaxy, kill some aliens, conduct research, or hone your skills, you will find help here. &nbsp; We are the largest dedicated AX (Anti-Xeno) player group in Elite:Dangerous and act as a hub for the broader AX Community. We are partnered with Canonn Research, who provide us with the latest findings related to our mission. We also coordinate defense efforts with other player groups to protect as many lives as we can. We constantly strive to get better at what we do and we have some of the best Anti-Xeno experts among us.</p>
        </div>
        <br/>
        <h3 id="buckyball_racing">Buckyball Racing Club</h3> 
        <div class="community_carousel">
        <img className="com_pics" src={buckyball} title="buckyball racing club logo"  alt="Picture of buckyball racing club logo"/> 
        <p class="community_pics_text">The Buckyball Racing Club organises Buckyball-style races and challenges in the galaxy since 3301. It is the original Elite Dangerous long-distance racing series. The group's headquarters is the Fullerene C60 system, where they are represented by the Race Marshalls minor faction. &nbsp; Race to Center of Galaxy Starts in Sol. Pilots from all over civilized space are gathering on Galileo station near planet Earth to begin one of the most ambitious organized rally race ever attempted. Called the Buckyball Run A*, this endurance race challenges commanders to reach the supermassive black hole at the center of our galaxy, Sagittarius A*, in the shortest amount of time possible. This contest is the latest iteration of the popular Buckyball Runs, a series of unsanctioned point-to-point rally races across the galaxy.</p>
        </div>
        <br/>
        <a href="#top" class="text">Back to top</a>
        </>
    )
}

export default Community;
import Carousel from 'react-bootstrap/Carousel';
import python1 from "../Pics/python_pic1.jpg"; import python2 from "../Pics/python_pic2.jpg"; import python3 from "../Pics/python_pic3.png";
import chieftain1 from "../Pics/chieftain_pic1.jpg"; import chieftain2 from "../Pics/chieftain_pic2.jpg"; import chieftain3 from "../Pics/chieftain_pic3.png";
import asp1 from "../Pics/asp_pic1.jpg"; import asp2 from "../Pics/asp_pic2.jpg"; import asp3 from "../Pics/asp_pic3.jpg";
import anaconda1 from "../Pics/anaconda_pic1.jpg"; import anaconda2 from "../Pics/anaconda_pic2.jpg"; import anaconda3 from "../Pics/anaconda_pic3.jpg";
import cutter1 from "../Pics/cutter_pic1.jpg"; import cutter2 from "../Pics/cutter_pic2.jpg"; import cutter3 from "../Pics/cutter_pic3.jpg";
// import diffText from '../EDscript'

const Ships = () => {

  // let counter = 0
  // function diffText() {
  //   if (counter === 0){
  //     text = "Cost: 56,978,180 CR. <br> Landing Pad: Medium. <br> pilot Seats: 2. <br> Hull Mass: 350t. <br> Armour: 468. <br> Shields: 294 MJ. <br> Fuel capacity: 32t. <br> HARDPOINTS: <br> 4x utillity mounts.  2x Medium hardpoints.  3x Large hardpoints. <br> INTERNAL COMPARTMENTS: <br> 1x class 1 compartment.  1x class 2 compartment.  2x class 3 compartments.  1x class 4 compartment.  2x class 5 compartments.  3x class 6 compartments." 
  //     document.getElementById("pythontext").innerHTML = text;
  //     counter = 1
  //   }else {
  //   text2 = "The Python is considered by some to be the most effective balance between firepower, manoeuvrability, and protection currently available among all ships. In addition to ably holding its own against the larger Anaconda in a one-on-one battle through its substantial protection and firepower, the Python is generally agile enough for its size to comfortably deal with smaller combat ships without having to rely on turret mounts. The Python can also serve as a heavily armed freighter in that it can carry 284 T of cargo with a Class 3 Shield Generator fitted, or 292 T with no shield fitted. Additionally, it is the largest cargo capacity of any ship that can dock at Outposts since it utilizes medium landing pads; because of this the Python is fantastic for Community Goals. Although the ship can achieve surprisingly high jump ranges with the proper modules and Engineering, additional mass from cargo can quickly drag this down and significantly lengthen the return leg of a trading loop." 
  //   document.getElementById("pythontext").innerHTML = text2;
  //   counter = 0
  //   }
  // }

  return (
    <>
    <br/>
    <h1>Ships page</h1>

    <p class="text">Ships are the central feature of <b>Elite Dangerous</b>, and are used to traverse space and perform a variety of different tasks. There are a variety of designs to suit various roles. Many ships were inspired by the classic wireframe and polygonal models of previous Elite games. </p>

    <p class="text">Each ship has access to a range of different modules which they can fit to help specialize as <b> smugglers, bounty hunters, pirates, Traders, Explorers</b> etc. All ships have been designed with the ship interiors in mind and for future gameplay opportunities. </p>

    <p class="text">there are 38 playable ships and 6 playable ship lunched fighters, each built by one of several manufacturers with their own unique styles. 
Below you'll find some pictures and info of some of the ships in the game.</p>

    <h2>Ship Pictures with info</h2>
    <br/>
    <a href="#Python" class="text">Python</a><a href="#chieftain" class="text">Alliance Chieftain</a><a href="#asp" class="text">Asp Explorer</a><a href="#anaconda" class="text">Anaconda</a><a href="#cutter" class="text">Imperial Cutter</a>
    <br/><br/>
    
    <h3 id="Python">Python</h3>
    <div class="ships_carousel">
      <Carousel className='carouselMain'>
        <Carousel.Item>
          <img className="d-block w-100" src={python1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={python2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={python3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <p id="pythontext" class="ships_pics_text">The Python is considered by some to be the most effective balance between firepower, manoeuvrability, and protection currently available among all ships. In addition to ably holding its own against the larger Anaconda in a one-on-one battle through its substantial protection and firepower, the Python is generally agile enough for its size to comfortably deal with smaller combat ships without having to rely on turret mounts. The Python can also serve as a heavily armed freighter in that it can carry 284 T of cargo with a Class 3 Shield Generator fitted, or 292 T with no shield fitted. Additionally, it is the largest cargo capacity of any ship that can dock at Outposts since it utilizes medium landing pads; because of this the Python is fantastic for Community Goals. Although the ship can achieve surprisingly high jump ranges with the proper modules and Engineering, additional mass from cargo can quickly drag this down and significantly lengthen the return leg of a trading loop.</p><button class="button" onclick="diffText()">Ship info/specs</button>
    </div>
    <br/>
    <h3 id="chieftain">Alliance Chieftain</h3>
    <div class="ships_carousel">
      <Carousel className='carouselMain'>
        <Carousel.Item>
          <img className="d-block w-100" src={chieftain1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={chieftain2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={chieftain3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <p id="chieftaintext" class="ships_pics_text">The Alliance Chieftain is very competitively priced, at only 19 million credits it is significantly cheaper than other heavy fighters or multipurpose ships like the Python, Federal Gunship, Imperial Clipper, Krait MkII, Krait Phantom, and Fer-de-Lance, while offering similar capabilities. The ship also features many internal compartments, allowing the pilot to equip a shield cell bank, hull reinforcements or module reinforcements. The Chieftain performs very well against its intended match-up, the Thargoid Interceptor. It is capable of equipping the maximum of 4 Anti-Xeno hardpoints and has enough utility and internal space for countermeasures. Finally, the mobility lets it handle Thargon Swarms easily as it can keep a Remote Release Flak Launcher on its target. It is even capable of soloing Thargoid Interceptors in the right hands.</p>{/* <button class="button" onclick="diffTextb()">Ship info/specs</button> */}
    </div> 
    <br/> 
    <h3 id="asp">Asp Explorer</h3>
    <div class="ships_carousel">
      <Carousel className='carouselMain'>
        <Carousel.Item>
          <img className="d-block w-100" src={asp1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={asp2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={asp3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <p id="asptext" class="ships_pics_text">Although the Asp Explorer's name contains the word "Explorer", it is one of the most flexible ship models available in terms of outfitting potential, and an extremely popular choice for pilots who want to dabble in various activities. For a low-cost medium ship, it has a decent cargo capacity of 130 tonnes, surpassing the Type-6 Transporter, and a surprisingly low hull mass for its size that allows it to achieve higher speeds than most dedicated trading vessels. With its six weapon hardpoints, it can be built into a well-armed freighter or a pure fighter suitable for light or moderate combat, but its combat ability is somewhat hampered by thinner armour and a prominent, damage-prone cockpit canopy. The Asp Explorer's best-known role is exploration, however, due to its considerable jump range, enough internal compartments to equip essential exploration modules, and the unobstructed views of the cosmos afforded by its canopy.</p>{/* <button class="button" onclick="diffTextc()">Ship info/specs</button> */}
    </div>
    <br/>
    <h3 id="anaconda">Anaconda</h3>
    <div class="ships_carousel">
      <Carousel className='carouselMain'>
        <Carousel.Item>
          <img className="d-block w-100" src={anaconda1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={anaconda2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={anaconda3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <p id="anacondatext" class="ships_pics_text">Boasting a total of eight weapon hardpoints, the Anaconda is a formidable combat ship. It, the Fer-de-Lance, the Federal Corvette, the Imperial Cutter, and the Mamba are the only ships capable of equipping Class 4 weaponry, the most powerful weapons that conventional ships can carry. Turreted and gimballed weapons are recommended due to the Anaconda's relatively stiff handling, which can make lining up shots difficult. Defensively, the Anaconda is extremely sturdy when customized for survivability. It has eight utility mounts, tied for the highest of any ship in the game, and its potent Class 8 Power Plant allows a Shield Generator, a Shield Cell Bank and multiple Shield Boosters to be activated simultaneously whilst still having enough output leftover to comfortably power the weapons and other systems. Even if the shields fail, the Anaconda has a base armor strength of 945 and a large number of optional internal compartments give plenty of room to install Hull or Module Reinforcement Packages to stack even more protection. Optimizing for hull/armour strength allows a maximum of 6,137.5 without Engineering.</p>{/* <button class="button" onclick="diffTextd()">Ship info/specs</button> */}
    </div>
    <br/>
    <h3 id="cutter">Imperial Cutter</h3>
    <div class="ships_carousel">
      <Carousel className='carouselMain'>
        <Carousel.Item>
          <img className="d-block w-100" src={cutter1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={cutter2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={cutter3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <p id="cuttertext" class="ships_pics_text">The Imperial Cutter is expensive and ponderous, but overall a very effective multi-purpose ship with a heavy armament. It lacks the versatility of the Anaconda and the combat prowess of the Federal Corvette, but has considerable potential as a trading vessel that can easily defend itself. Traders looking for a stylish, powerhouse ship with ample cargo capacity will usually find the Imperial Cutter more than satisfactory, while fighters and explorers may prefer the Federal Corvette and Anaconda, respectively. With a staggering 794 tons of max cargo capacity, the Imperial Cutter has the largest cargo bay of all playable ships in the game, making it an ideal ship for traders. However, it is also the most expensive ship in the game at a cost almost three times higher than a Type-9 Heavy, which has a max cargo capacity of 790 tons; only 4 tons less. It also has a lower cargo capacity when shielded, as the Type-9 can equip a lower class Shield Generator. The very high rebuy and repair costs of the Cutter makes shieldless runs incredibly risky, so it is important to keep this in mind as every bump and scratch will cut rather heavily into profits and like the Type-9, it is very difficult to dodge an Interdiction in the Cutter. Combined with its required Imperial Navy Rank can make the Cutter a much less appealing ship for traders.</p>{/* <button class="button" onclick="diffTexte()">Ship info/specs</button> */}
    </div>
    <br/>

    <a href="#top" class="text">Back to top</a>
    </>
  )
}
<script src="EDscript.js"></script>
export default Ships;


import Carousel from 'react-bootstrap/Carousel';
import python1 from "../Pics/python_pic1.jpg"; import python2 from "../Pics/python_pic2.jpg"; import python3 from "../Pics/python_pic3.png";

const Ships = () => {

  return (
    <>
    <h1>Ships page</h1>

    <p class="text">Ships are the central feature of <b>Elite Dangerous</b>, and are used to traverse space and perform a variety of different tasks. There are a variety of designs to suit various roles. Many ships were inspired by the classic wireframe and polygonal models of previous Elite games. </p>

    <p class="text">Each ship has access to a range of different modules which they can fit to help specialize as <b> smugglers, bounty hunters, pirates,</b> etc. All ships have been designed with the ship interiors in mind and for future gameplay opportunities. </p>

    <p class="text">there are 38 playable ships and 6 playable fighters, each built by one of several manufacturers with their own unique styles. 
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
    </>
  )
}

export default Ships;


import Kard from './Card';
import pic1 from "../img/calc.jpg";
import pic2 from "../img/converter.jpg";
import pic3 from "../img/but_rock.png";
import pic4 from "../img/rgblights.jpg";
import pic5 from "../img/samplegallery.jpg";

function Allcards() {
    return(
        <div>
            <Kard title="Calculator" desc="An HTML-based front-end calculator using form.answer.value and eval" pic={pic1}/>
            <Kard title="Converter" desc="A JS project featuring multiple weight conversions" pic={pic2}/>
            <Kard title="RockPaperScissors" desc="A simple JS program for the rock, paper, scissors game" pic={pic3}/>
            <Kard title="Christmas Tree" desc="Using JS, light up the christmas tree with random colors" pic={pic4}/>
            <Kard title="Coming Soon" desc="A placeholder for future projects to showcase" pic={pic5}/>
            <Kard title="Coming Soon" desc="A placeholder for future projects to showcase" pic={pic5}/>
            <Kard title="Coming Soon" desc="A placeholder for future projects to showcase" pic={pic5}/>
            <Kard title="Coming Soon" desc="A placeholder for future projects to showcase" pic={pic5}/>
        </div>
    )
}

export default Allcards;

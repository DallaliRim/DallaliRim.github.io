import '../../App.css';
import MyThree from './Three';
import Type from './Type';

function HomePage() {
    let introduction = [
        "Hi, I am Rim Dallali, a Full-Stack Software Developer"
    ]
    return (
        <div className="Home">
            <section className="home">
                <Type text={introduction} />
            </section>
            <div className="HomeContent">
                <MyThree />
            </div>
        </div>
    );
}

export default HomePage;

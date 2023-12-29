import '../../App.css';
import MyThree from './Three';
import Type from './Type';

function HomePage() {
    return (
        <div className="Home">
            <section className="home">
                <Type />
            </section>
            <div className="HomeContent">
                <MyThree />
            </div>
        </div>
    );
}

export default HomePage;

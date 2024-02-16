import "./skills.css"
function Stack(props) {
    console.log("here")
    return (
        <li className="vote__item">
            <div className="vote__circle" data-count="100" data-ini-score="20" data-total="20" data-site-id="0" data-cat-id="0">
                <div className="vote__circle__icon trophy solid"></div>

                <div className="vote__circle__slice">
                    <div className="vote__circle__bar"></div>
                    <div className="vote__circle__fill"></div>
                </div>
            </div>
            <div className="vote__caption">
                <div className="vote__cat">{props.stack}</div>
            </div>
        </li>
    );
}

export default Stack;

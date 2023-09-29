import compromise from '../../icons/compromise.png'; 
import complex from '../../icons/complex.png';
import bank from '../../icons/bank.png';
import delivery from '../../icons/delivery.png';

const Description = () => {
    return (
        <div className="description">
            <div className="description__title">
                <div className="description__title_header">
                    <h2>Производим металлические <br/>изделия с</h2> 
                </div>
                <div className="description__title_subheader">
                        <h1>2010</h1><h3>года</h3>
                    </div>
                <div className="description__title_body">
                    <p>Умеем договариваться на <br/>выгодных для вас условиях!</p>
                </div>
            </div>
            <div className="description__detailed">
                <div className="description__detailed_circle"></div>
                <div className="description__detailed_text">
                    <p>Подробнее</p>
                </div> 
            </div>

            <div className="description__blocks">
                <div className="description__blocks_item">
                    <div className="description__blocks_item-compromise">
                        <img src={compromise} alt="compromise" />
                        <p>Найдем компромисс <br/>с любым заказчиком</p>
                    </div>
                </div>
                <div className="description__blocks_item">
                    <div className="description__blocks_item-complex">
                        <img src={complex} alt="complex" />
                        <p>Весь комплекс <br/>подрядных услуг</p>
                    </div>
                </div>
                <div className="description__blocks_item">
                    <div className="description__blocks_item-bank">
                        <img src={bank} alt="bank" />
                        <p>Финансовые гарантии <br/>от "Альфа-банка"</p>
                    </div>
                </div>
                <div className="description__blocks_item">
                    <div className="description__blocks_item-delivery">
                        <img src={delivery} alt="delivery" />
                        <p>Доставка <br/>в любой регион</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description;
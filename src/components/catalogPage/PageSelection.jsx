const PageSelection = ({ onNext, onPrev }) => {

    return (
        <div className="pageSelection">
            <div className="pageSelection_filter">
                <div className="pageSelection_filter__text">
                    <span>Выводить по</span>
                </div>
                <div className="pageSelection_filter__value">
                    <div className="pageSelection_filter__value-item">
                        <span>5</span>
                    </div>
                    <div className="pageSelection_filter__value-item">
                        <span>10</span>
                    </div>
                    <div className="pageSelection_filter__value-item">
                        <span>15</span>
                    </div>
                </div>
            </div>
            <div className="pageSelection_transition">
                <div className="transition_next">
                    <button onClick={onNext}>
                        <span>Вперед</span>
                    </button>
                </div>
                <div className="transition_pageNumbers">
                    <div className="transition_pageNumbers-number">
                        <span>1</span>
                    </div>
                    <div className="transition_pageNumbers-number">
                        <span>2</span>
                    </div>
                    <div className="transition_pageNumbers-number">
                        <span>3</span>
                    </div>
                </div>
                <div className="transition_prev">
                    <button onClick={onPrev}>
                        <span>Назад</span>
                    </button>
                </div>
                <div className="transition_showAll">
                    <span>Показать все товары</span>
                </div>
            </div>
        </div>
    );
};

export default PageSelection;

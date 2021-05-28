import React from "react";
import Recipes from "../recipes/recipes";

const FilterBar = () =>{
    return(
        <div>
            <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="new-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Новые
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="popular-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Популярные
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="short-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">До 30 минут
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="middle-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">До часа
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="long-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false">От часа
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="new-tab"><Recipes/>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="popular-tab"><Recipes/></div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="short-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="middle-tab">...</div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="long-tab">...</div>
            </div>
        </div>
    );
}

export default FilterBar
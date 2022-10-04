import React from 'react';
import "../styles/Category.css";
import PlayList from './PlayList';


function CategoryList({categorys}) {

    const renderCategory=()=>{
        return (categorys.map(category=>{   
                     return (<div key={category.id} className="cardWrapper">
                          <div  key={category.id} className="cardsWrap" >
                            <h2>{category.name}</h2>
                            <p className="subText">{category.tagline}</p>
                  
                            <div className="innerCardWrapper">
                                    <PlayList categoryID={category.id} />           
                            </div>
                          </div>
                        </div>)}
                        )
                )
    }

    return (
        <div  className="outerWrapper">
       {renderCategory()}
       </div>
    );
}

export default CategoryList;
import React from 'react';
import './FoodCard.css';

const FoodCard = ({ name, calories, img }) => {
  return (
    <div className="card-container">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={img} alt={`${name} pic`} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{`${calories} cal`}l</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={() => console.log('dksajdkasjdlk')}
                  className="input"
                  type="number" 
                  value="1"
                />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FoodCard;

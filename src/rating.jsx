import React from 'react';
import './style.css';

export default function Rating(props) {
  const {id:ratingId,numberOfRatings = 5,initialSelection = 0,handleRatingChange} = props;
  const ratings = React.useMemo(()=>{
    const ratingArr = [];
    for(let i=1; i<=numberOfRatings; i++){
      ratingArr.push(i);
    }
    return ratingArr;
  },[numberOfRatings]);

  const getNewButtonClasses = (n, obj) => {
    const newObj = {...obj};
    ratings.forEach(r => {
      if (r <= n) {
        newObj[r] = 'fa fa-star checked';
      } else {
        newObj[r] = 'fa fa-star-o';
      }
    });
    return newObj;
  }

  const [selectedRating, setSelectedRating] = React.useState(initialSelection);
  const [buttonsClass, setButtonsClass] = React.useState(() => getNewButtonClasses(initialSelection));

  const getButtonProps = id => ({
    className: buttonsClass[id],
    onMouseOver: () =>
      setButtonsClass(st => getNewButtonClasses(id,st)),
    onMouseOut: () =>
      setButtonsClass(st => getNewButtonClasses(selectedRating,st)),
    onClick: () => {
      setSelectedRating(id);
      handleRatingChange && handleRatingChange(ratingId,id);
    }
  });
  return (
    <div>
      {ratings.map(id => (
        <i key={id} {...getButtonProps(id)} />
      ))}
      {selectedRating>0 && <span style={{paddingLeft:'5px', fontWeight:'bold'}}>{selectedRating}/{numberOfRatings}</span> }
    </div>
  );
}


import React from 'react'
import FilterBTN from '../FilterBTN'

function Gender({setPageNumber,setGender}) {
  let genders =["female", "male", "genderless", "unknown"]
  return (
    <div className="accordion-item">
    <h2 class="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Gender
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body  d-flex flex-wrap gap-3">
        {genders.map((items, index)=>(
          <FilterBTN  task={setGender}  setPageNumber={setPageNumber}key={index} name="gender" index={index} items={items}/>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gender

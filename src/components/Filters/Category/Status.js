import React from 'react'
import FilterBTN from '../FilterBTN'

const Status =({setStatus,setPageNumber})=> {
  let status = ['Alive','Dead','Unknown'];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="true" aria-controls="flush-collapseThree">
      Status
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body  d-flex flex-wrap gap-3">
      {status.map((items,index)=>(

      <FilterBTN task={setStatus} setPageNumber={setPageNumber} key={index} name="status" index={index} items={items}/>
      ))}
        
      </div>
    </div>
  </div>
  )
}

export default Status

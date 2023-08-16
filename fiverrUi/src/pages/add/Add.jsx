import React from 'react'
import "./Add.scss"
const Add = () => {
  return (
    <div>
      <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="section">
            <div className="left">
              <label htmlFor="">Title</label>
              <input type="text" placeholder="e.g. I will do something I'm really code at" />
              <label htmlFor="">Category</label>
              <select name="cats" id="cats">
                <option value="">Design</option>
                <option value="">Web Development</option>
                <option value="">Animation</option>
                <option value="">Music</option>
                <option value="">Writer</option>
              </select>
              <label htmlFor="">Cover Image</label>
              <input type="file" />
              <label htmlFor="">Upload Images</label>
              <input type="file" multiple/>
              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="30" rows="16" placeholder='Brief descriptions to introduce your services to customers'></textarea>
              <button>Create</button>
            </div>
            <div className="right">
              <label htmlFor="">Service Title</label>
              <input type="text" placeholder='e.g. One page web design'/>
              <label htmlFor="">Short Descriptions</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='short description of the services you provide'></textarea>
              <label htmlFor="">Delivery Time (e.g 3 days)</label>
              <input type="number" min={1} />
              <label htmlFor="">Revision Numbers</label>
              <input type="number" min={1} />
              <label htmlFor="">Add Features</label>
              <input type="text" placeholder='e.g page design' />
              <input type="text" placeholder='e.g. file uploading' />
              <input type="text" placeholder='e.g setting up domain' />
              <input type="text" placeholder='e.g hosting' />
              <input type="text" placeholder='' />
              <label htmlFor="">Price</label>
              <input type="number" min={1} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add

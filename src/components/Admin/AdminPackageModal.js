const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? ' modal display-block' : 'modal display-none';
  
    return (
      <div class={showHideClassName}>
        <section class='modal-main box'>
          {children}
          <div class="modal-content" style={{width:'101%',overflowX:'hidden',overflowY:'visible'}}>
            <div class="columns has-background-white">
                <div class="column">
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">PackageId</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded">
                          <input class="input" type="text" placeholder="ID"/>
                        </p>
                      </div>          
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Title</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded">
                          <input class="input" type="text" placeholder="Name"/>
                        </p>
                      </div>          
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Cover Pic</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded">
                          <input class="input" type="file" placeholder="1024 x 768"/>
                        </p>
                      </div>          
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">From</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded ">
                          <input class="input" type="text" placeholder="Starting"/>
                        </p>
                      </div>          
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">To</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded t">
                          <input class="input" type="text" placeholder="Ending"/>
                        </p>
                      </div>          
                    </div>
                  </div>
                  
                  
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Duration</label>
                    </div>
                    <div class="field-body">
                      <div class="field is-narrow">
                        <div class="control">
                          <div class="select is-fullwidth">
                            <select>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Price Per Person</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <p class="control is-expanded ">
                          <input class="input" type="text" placeholder="Price"/>
                        </p>
                      </div>          
                    </div>
                  </div>

           </div>          
                <div class="column is-two-thirds">
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Overview</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <textarea class="textarea" placeholder="Explain the package"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">HighLights</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <textarea class="textarea" placeholder="Facilities Provided"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Recommended Gear</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <textarea class="textarea" placeholder="Gear Required"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">DayWise Plan</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <textarea class="textarea" placeholder="Daywise Plan"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
          
                  <div class="field is-horizontal">
                    <div class="field-label is-normal">
                      <label class="label">Cancellation Policy</label>
                    </div>
                    <div class="field-body">
                      <div class="field">
                        <div class="control">
                          <textarea class="textarea" placeholder="Cancel Policy"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>               

                          <button class="button is-danger mb-4">
                            Add Package
                          </button>
                          <button class="button is-danger mb-4 ml-6" onClick={handleClose}>
                            Cancel
                          </button>

                 </div>
             </div>         
         </div>
  </section>

      </div>
    );
  };
   export { Modal}
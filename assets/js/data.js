var i = 1;

function render() {

    document.getElementById("demo").remove();
    addRound = document.getElementById("rounds");
    var e = document.createElement('div');


let myhtml = `  <div class="form-row" >
        <div class="form-margin">
        <label>medicine ${i+1}</label>
                                        <input type="text" class="form-input" name="medicine${i+1}" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="forWhat">For What?</label>
                                        <textarea class="form-control" id="textAreaExample1" rows="4" cols="40" name="forWhat${i+1}">
                                    </textarea>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group form-icon">
                                        <label for="startDate">Start Date</label>
                                        <input type="text" class="form-input" name="startDate${i+1}" id="startDate" placeholder="MM-DD-YYYY" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group form-icon">
                                        <label for="tillDate">Till Date</label>
                                        <input type="text" class="form-input" name="tillDate${i+1}" id="tillDate" placeholder="MM-DD-YYYY" />
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-radio">
                                        <label for="level">Please select one of the Time to take medicine</label>
                                         <div class="form-flex">
                                         <input type="checkbox" id="morning" name="morning${i+1}" value="morning"  >
                                         <label for="morning">morning</label>
                                         <input type="checkbox" id="afternoon" name="afternoon${i+1}" value="afternoon">
                                         <label for="afternoon">afternoon</label>
                                         <input type="checkbox" id="night" name="night${i+1}" value="night">
                                         <label for="night">night</label><br>
                                         </div> 
                                    </div>
                                </div>
                                  
                            </div>
                         <button onclick="render()" id="demo" style="background-color: #1977cc;
                         border: none;
                         color: white;
                         margin-left: 0%;
                         padding: 2.5% 4%;
                         text-align: center;
                         text-decoration: none;
                         display: inline-block;
                         font-size: 162%;
                         cursor: pointer;
                         border-radius: 4%;
                     }">Add Medicine </button>

     `;

    e.innerHTML = myhtml;
    addRound.appendChild(e);
    i = i + 1;


}
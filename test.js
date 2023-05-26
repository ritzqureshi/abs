import React from 'react'
import { TagsInput } from "react-tag-input-component";

const test = () => {
    const [parameters, setParameters] = useState([]);
    const [selected, setSelected] = useState([]);
    var selecedAtt = selected.join('|')
    
    const updateField = (fieldIndex, subFieldIndex, element, value) => {
        const newFields = [...parameters];
        if (subFieldIndex !== null) {
          newFields[fieldIndex].subFields[subFieldIndex][element] = value;
        } else {
          newFields[fieldIndex][element] = value;
        }
        setParameters(newFields);
      };
    
      let addFormFieldsParameters = () => {
        if (parameters.length === 0) {
          setParameters([
            {
              parameter: "",
              critical: "No"
            },
          ]);
        } else {
          setParameters([
            ...parameters,
            { parameter: "",
              critical: "No",
            },
          ]);
        }
      };  

      let removeFormFieldsParameters = (i) => {
        let newFormValues = [...parameters];
        newFormValues.splice(i, 1);
        setParameters(newFormValues);
      };

  return (
    <div>
         {parameters.map((element, fieldIndex) => (
                        <div key={fieldIndex}>
                          <div>
                            <div
                              className="card-body border"
                            >
                              <div className="row col-md-12">
                              <div className="button-section">
                        <button
                          type="button"
                          id="addParameters"
                          className="btn btn-sm  btn-info"
                          onClick={() => addFormFieldsParameters()}
                        >
                          <i
                            className="nav-icon fas fa-plus"
                          />{" "}
                          ADD PARAMETER
                        </button>
                      </div>
                                <div className="row col-md-7 form-group">
                                    <label
                                      className="col-md-2 col-form-label"
                                    >
                                      Parameter:
                                    </label>
                                  <div className="form-group col">
                                    <input
                                      type="text"
                                      value={element.parameter || ""}
                                      onChange={(e) => updateField(fieldIndex, null, "parameter", e.target.value)}
                                      onKeyDown={handleKeyDownParameter}
                                      name="parameter"
                                      className="form-control form-control-sm"
                                      aria-describedby="emailHelp"
                                      required />
                                  </div>
                                </div>
                                <div className="row form-group col-md-3">
                                  
                                    <label
                                      htmlFor="xyz"
                                      className="col-md-4 col-form-label"
                                    >
                                      Critical:
                                    </label>
                                
                                  <div className="form-group col">
                                    <select
                                      name="critical"
                                      onChange={(e) => updateField(fieldIndex, null, "critical", e.target.value)}
                                      className="form-control form-control-sm"
                                    >
                                      <option value="No">No</option>
                                      <option value="Yes">Yes</option>
                                    </select>
                                  </div>
                                </div>
                                <div>
        <pre>{zz}</pre>
  
        <TagsInput
          value={selected}
          onChange={setSelected}
          name="fruits"
          placeHolder="enter fruits"
        />
        <em>press enter to add new tag</em>
      </div>
                                <div className="col-md-1 form-group">
                                  {fieldIndex ? (
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-danger remove_btn"
                                      onClick={() => removeFormFieldsParameters(fieldIndex)}
                                    >
                                      <i
                                        className="nav-icon fas fa-minus"
                                      />
                                    </button>
                                  ) : null}
                                </div>
                                </div>
                                </div>
</div>
</div>
                      ))}
    </div>
  )
}

export default test
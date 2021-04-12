import React, { useState } from "react";
import "./App.scss";

function App() {
  const [col1, setCol1] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
  });

  const [col2, setCol2] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
  });

  const [hasil, setHasil] = useState();

  const handleClick = () => {
    const hasil1 = col1.input1 * col2.input1 + col1.input2 * col2.input3;
    const hasil2 = col1.input1 * col2.input4 + col1.input2 * col2.input4;
    const hasil3 = col1.input3 * col2.input1 + col1.input4 * col2.input3;
    const hasil4 = col1.input3 * col2.input2 + col1.input2 * col2.input4;

    setHasil({
      hasil1,
      hasil2,
      hasil3,
      hasil4,
    });
  };

  return (
    <div className="App">
      <div className="card card-style">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            {/* row 1 */}
            <div className="row">
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol1({
                      ...col1,
                      input1: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol1({
                      ...col1,
                      input2: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            {/* row 2 */}
            <div className="row">
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol1({
                      ...col1,
                      input3: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol1({
                      ...col1,
                      input4: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <h1 className="text-center">X</h1>
          </div>

          <div className="col-md-4">
            {/* row 1 */}
            <div className="row">
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol2({
                      ...col2,
                      input1: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol2({
                      ...col2,
                      input2: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            {/* row 2 */}
            <div className="row">
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol2({
                      ...col2,
                      input3: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                <input
                  type="number"
                  className="input-style"
                  onChange={(e) =>
                    setCol2({
                      ...col2,
                      input4: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-3">
          <button className="btn btn-primary" onClick={() => handleClick()}>
            HITUNG
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          {hasil ? (
            <div>
              <div className="row mt-4">
                <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                  <input
                    type="number"
                    className="input-style"
                    value={hasil.hasil1}
                  />
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                  <input
                    type="number"
                    className="input-style"
                    value={hasil.hasil2}
                  />
                </div>
              </div>
              {/* row 2 */}
              <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                  <input
                    type="number"
                    className="input-style"
                    value={hasil.hasil3}
                  />
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center mr-1 mb-1">
                  <input
                    type="number"
                    className="input-style"
                    value={hasil.hasil4}
                  />
                </div>
              </div>
            </div>
          ) : (
            <h3 className="mt-5">"Silahkan isi dulu"</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

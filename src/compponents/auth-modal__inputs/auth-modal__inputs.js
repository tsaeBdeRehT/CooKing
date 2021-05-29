import React from "react";

const AuthModalInputs = ({name}) => {
    return (
      <div className="mb-3 mt-3 container">
          <input className="form-control mb-3" placeholder="Логин"/>
          <input className="form-control mb-3" placeholder="Пароль"/>
          <div className="row justify-content-center">
              <button className="btn btn-dark col-5">
                  {name}
              </button>
          </div>

      </div>
    );
}


export default AuthModalInputs
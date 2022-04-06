import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Logic from './Logic';
import TodoFeature from './Features/Todo/pages/index';
import HookComponent from './Features/hooktraining/index';


const emit = (id) => {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`event${id}`, {
        detail: `event of ${id}`
      })
    )
  }, 1000)
}

// emit(1)
// emit(2)
// emit(3)

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Logic /> */}
    <HookComponent />
  </React.StrictMode>,
  document.getElementById('root')
);




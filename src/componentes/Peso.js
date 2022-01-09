import React from 'react';

export default class Peso extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <label>
          Peso
          <input type="text" value={this.props.p} onChange={(e) => {this.props.sp(e.target.value) }} />
        </label>
      </div>
    )
  }
}

// export default function Peso (props) {
//   return (
//     <div>
//       <label>
//         Peso
//         <input type="text" value={props.p} onChange={(e) => { props.sp(e.target.value) }} />
//       </label>
//     </div>
//   )
// }
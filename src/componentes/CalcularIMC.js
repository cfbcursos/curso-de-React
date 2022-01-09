import React from 'react';

export default class CalcularIMC extends React.Component {
  constructor(){
    super()
    this.calc=this.fcalc.bind(this)
  }
  fcalc = () => {
    const r = this.props.p/(this.props.a * this.props.a)
    this.props.sr(r)
    // console.log(r)
  }
  render(){
    return (
      <div>
        <button onClick={this.calc}>Calcular</button>
      </div>
    )
  }
}

// export default function CalcularIMC(props) {
//   const calc = () => {
//     props.sr(props.p / (props.a * props.a))
//   }

//   return (
//     <div>
//       <button onClick={calc}>Calcular</button>
//     </div>
//   )
// }
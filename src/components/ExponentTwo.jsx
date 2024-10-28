const ExponentTwo = props => (
  <div className='exponent-counter-container'>
    <p className='exponent-label'>n²</p>
    <p className='exponent-result'>
      {props.callBackCount} * {props.callBackCount} ={' '}
      <span className='total'>{props.callBackCount ** 2}</span>
    </p>
  </div>
)

export default ExponentTwo

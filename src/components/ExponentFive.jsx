const ExponentFive = props => (
  <div className='exponent-counter-container'>
    <p className='exponent-label'>n⁵</p>
    <p className='exponent-result'>
      {props.callBackCount} * {props.callBackCount} * {props.callBackCount} *
      {props.callBackCount} * {props.callBackCount} ={' '}
      <span className='total'> {props.callBackCount ** 5}</span>
    </p>
  </div>
)

export default ExponentFive

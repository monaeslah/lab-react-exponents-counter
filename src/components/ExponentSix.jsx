const ExponentSix = props => (
  <div className='exponent-counter-container'>
    <p className='exponent-label'>n⁶</p>
    <p className='exponent-result'>
      {props.callBackCount} * {props.callBackCount} * {props.callBackCount} *{' '}
      {props.callBackCount} * {props.callBackCount} * {props.callBackCount} ={' '}
      <span className='total'>{props.callBackCount ** 6}</span>
    </p>
  </div>
)

export default ExponentSix

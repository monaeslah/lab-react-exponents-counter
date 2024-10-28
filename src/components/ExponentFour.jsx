const ExponentFour = props => (
  <div className='exponent-counter-container'>
    <p className='exponent-label'>n⁴</p>
    <p className='exponent-result'>
      {props.callBackCount} * {props.callBackCount} * {props.callBackCount} *{' '}
      {props.callBackCount} ={' '}
      <span className='total'>{props.callBackCount ** 4}</span>
    </p>
  </div>
)

export default ExponentFour

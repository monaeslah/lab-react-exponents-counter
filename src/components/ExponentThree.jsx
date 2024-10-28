const ExponentThree = props => (
  <div className='exponent-counter-container'>
    <p className='exponent-label'>n³</p>
    <p className='exponent-result'>
      {props.callBackCount} * {props.callBackCount} * {props.callBackCount} ={' '}
      <span className='total'>{props.callBackCount ** 3}</span>
    </p>
  </div>
)

export default ExponentThree

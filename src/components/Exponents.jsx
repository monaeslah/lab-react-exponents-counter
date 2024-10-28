// Exponent.js
const Exponent = ({ callBackCount, power }) => (
  <div className='exponent-counter-container'>
    <p className='exponent-label'>
      n<sup>{power}</sup>
    </p>
    <p className='exponent-result'>
      {Array(power).fill(callBackCount).join(' * ')} ={' '}
      <span className='total'>{callBackCount ** power}</span>
    </p>
  </div>
)

export default Exponent

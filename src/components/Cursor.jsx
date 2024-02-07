import '../styles/cursor.css'

const Cursor = ({ left, top }) => (
  <>
    <div className='cursor' style={{
      top: `${top}px`,
      left: `${left}px`,
    }} />
    <div className='cursor-bright' style={{
      top: `${top}px`,
      left: `${left}px`,
    }} />
  </>
);

export default Cursor;
export default function Card({ children, padding }) {
  let myClassName = 'padding-small';
  if (padding === 'large') {
    myClassName = 'padding-large';
  }

  return (
    <div className={myClassName}>
      {children}
    </div>
  );
}

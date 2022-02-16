import './interests.module.scss';

/* eslint-disable-next-line */
export interface InterestsProps {
  interests: any[]
}

export function Interests(props: InterestsProps) {
  return (
    <>
      { props.interests && props.interests.length > 0 &&
        <div className="quick-info interests">
          <h1>Interessen</h1>
          {props.interests.map((int, idx) => <p key={idx}><img src={int.icon}/>{int.name}</p>)}
        </div>
      }
    </>
  );
}

export default Interests;

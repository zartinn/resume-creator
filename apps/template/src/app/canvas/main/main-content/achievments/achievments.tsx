import './achievments.module.scss';

/* eslint-disable-next-line */
export interface AchievmentsProps {
  achievments: any[]
}

export function Achievments(props: AchievmentsProps) {
  return (
    <>
      { !props.achievments || props.achievments.length === 0 ? <></> : 
      
        <div className="achievments">
          <h1>Achievments</h1>
          {props.achievments.map((achievment, idx) => 
            <div key={idx} className="list-item">
              <div className="marker"></div>
              {achievment.disabled ? <></> : <p>{achievment.content}</p>}
            </div>
          )}
        </div>
      }
    </>
  );
}

export default Achievments;

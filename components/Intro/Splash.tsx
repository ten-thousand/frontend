import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

import { useUserCount } from '@/hooks/useUserCount';

const SECOND = 1000;

const Splash = () => {
  const count = useUserCount();
  const [countEnd, setCountEnd] = useState<number | null>(null);

  useEffect(() => {
    if (count) {
      setTimeout(() => setCountEnd(count), 7 * SECOND);
    }
  }, [count]);

  return (
    <div className="splash">
      <div className="splash__content">
        <div className="splash__content__screenshot">
          <img
            className="splash__content__screenshot__img"
            src="/splash-1.png"
          />
        </div>
        <div className="splash__content__count">
          <h1>
            {countEnd ? (
              <CountUp start={0} end={countEnd} delay={0}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            ) : (
              '0'
            )}
            <span className="suffix">명</span>
          </h1>
          <h3>10000까지만 올라갑니다.</h3>
          <div className="splash__content__count__invite-only">INVITE ONLY</div>
        </div>
        <div className="splash__content__screenshot">
          <img
            className="splash__content__screenshot__img"
            src="/splash-2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;

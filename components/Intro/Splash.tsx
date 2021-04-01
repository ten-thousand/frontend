import router from 'next/router';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';

import { useTokenInsideCookie } from '@/hooks/useTokenInsideCookie';
import { useUserCount } from '@/hooks/useUserCount';

const SECOND = 1000;

const Splash = () => {
  const token = useTokenInsideCookie();

  const count = useUserCount();
  const [countEnd, setCountEnd] = useState<number | null>(null);

  useEffect(() => {
    if (count) {
      setCountEnd(count);
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
          <h5>지금은 Limited Beta입니다.<br/>4월 5일에 앱스토어에서 만나요 👋</h5>
          <button
            className="splash__content__count__invite-only"
            onClick={() => {
              if (token) {
                router.push('/dashboard');
              } else {
                toast('초대장이 필요해요! 행운을 빕니다. 🤭');
              }
            }}
          >
            {token ? 'INVITE SOMEONE' : 'INVITE ONLY'}
          </button>
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

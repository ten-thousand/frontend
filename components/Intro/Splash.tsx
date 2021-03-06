import Link from 'next/link';
import router from 'next/router';
import React from 'react';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';

import { useTokenInsideCookie } from '@/hooks/useTokenInsideCookie';
import { Analytics } from '@/utils/analytics';

const Splash = () => {
  const token = useTokenInsideCookie();

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
            <CountUp start={0} end={10000} delay={0}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <span className="suffix">+ 명</span>
          </h1>
          <h3>10000까지만 올라갑니다.</h3>
          <h5>
            지금은 Limited Beta입니다.
            <br />
            4월 6일에 앱스토어에서 만나요 👋
          </h5>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <button
              className="splash__content__count__invite-only"
              onClick={async () => {
                if (token) {
                  await Analytics.logEvent('click_invite_someone');
                  router.push('/dashboard');
                } else {
                  await Analytics.logEvent('click_invite_only');
                  toast('초대장이 필요해요! 행운을 빕니다. 🤭');
                }
              }}
            >
              {token ? 'INVITE SOMEONE' : 'INVITE ONLY'}
            </button>
            {!token && (
              <button
                className="splash__content__count__invite-only"
                onClick={async () => {
                  await Analytics.logEvent('click_login');
                  router.push('/referral/auth/login');
                }}
                style={{
                  marginTop: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  color: '#512A72',
                }}
              >
                LOGIN
              </button>
            )}
          </div>
        </div>
        <div className="splash__careers">
          <Link href="/careers">
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              채용 공고
            </span>
          </Link>
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

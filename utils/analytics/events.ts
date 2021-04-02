export type AnalyticsEvent = {
  view_landing: undefined;
  view_dashboard: {
    userSerial: number;
  };
  view_dashboard_but_redirect: undefined;
  view_login: undefined;
  view_referral: {
    inviteCode: string;
  };
  view_referral_but_redirect: {
    inviteCode: string;
  };
  view_careers: undefined;

  click_invite_only: undefined;
  click_invite_someone: undefined;
  click_login: undefined;

  click_phone_auth_request:
    | {
        inviteCode: string;
      }
    | undefined;
  click_phone_auth_submit:
    | {
        inviteCode: string;
      }
    | undefined;
  click_phone_auth_refresh:
    | {
        inviteCode: string;
      }
    | undefined;

  click_dashboard_link_copy: {
    userSerial: number;
    link: string;
  };
  click_dashboard_link_more: {
    userSerial: number;
  };
};

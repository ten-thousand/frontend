export type AnalyticsEvent = {
  view_landing: undefined;
  view_dashboard: {
    userSerial: number;
  };
  view_referral: {
    inviteCode: string;
  };
  view_careers: undefined;
  click_invite_someone: undefined;
  click_login: undefined;
  click_dashboard_link_copy: {
    userSerial: number;
  };
  click_dashboard_link_more: {
    userSerial: number;
  };
  click_phone_auth_request: {
    inviteCode: string;
  };
  click_phone_auth_submit: {
    inviteCode: string;
  };
};

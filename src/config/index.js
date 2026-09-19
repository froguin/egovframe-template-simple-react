// When the frontend is served from the same origin as the backend (integrated
// deployment behind the ALB Midway auth), REACT_APP_EGOV_CONTEXT_URL is left empty
// so SERVER_URL becomes "" -> all API calls are same-origin (relative) and inherit
// the ALB authenticate-oidc session cookie automatically (no CORS, no CFS).
// For split/local dev, set REACT_APP_EGOV_CONTEXT_URL and it falls back to https://<host>.
export const SERVER_URL = process.env.REACT_APP_EGOV_CONTEXT_URL
  ? "https://" + process.env.REACT_APP_EGOV_CONTEXT_URL
  : ""; // REST API 서버 Domain URL (empty = same-origin, integrated deployment)
export const DEFAULT_BBS_ID = "BBSMSTR_AAAAAAAAAAAA"; // default = 공지사항 게시판 아이디
export const NOTICE_BBS_ID = "BBSMSTR_AAAAAAAAAAAA"; // 공지사항 게시판 아이디
export const GALLERY_BBS_ID = "BBSMSTR_BBBBBBBBBBBB"; // 갤러리 게시판 아이디

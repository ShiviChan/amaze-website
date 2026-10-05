export const NEWSPATH_EMAIL = "newspathh@gmail.com";

/** Gmail compose works without a desktop mail app (mailto: does nothing when none is set). */
export const CAMPAIGN_HREF = `https://mail.google.com/mail/?${new URLSearchParams({
  view: "cm",
  fs: "1",
  to: NEWSPATH_EMAIL,
  su: "Media partnership enquiry",
  body: "Hi Newspath Bharat team,\n\nWe'd like to plan a campaign with you.\n\nBrand:\nBudget:\nTimeline:\n\nSent from asnmcare.com",
}).toString()}`;

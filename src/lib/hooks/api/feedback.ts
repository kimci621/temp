import axios from 'axios';

interface ExtraField {
  type: string;
  name: string;
  value: number | string;
}

export interface Feedback {
  name: string;
  email: string;
  phone: string;
  comment: string;
  feedback_type: 'faq' | 'landing';
  company: string;
  extra_fields: ExtraField[];
}
export function useFeedbackApi(requestBody: Feedback) {
  return axios.post('https://huntlee.ru/api/feedbacks', requestBody);
}

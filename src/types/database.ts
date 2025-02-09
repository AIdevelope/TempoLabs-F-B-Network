export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  role?: "chef" | "restaurant" | "supplier" | "event_specialist";
  avatar_url?: string;
  created_at: string;
}

export interface JobOffer {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  salary_range?: string;
  created_at: string;
  role_type: "chef" | "restaurant" | "supplier" | "event_specialist";
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: "connection" | "job" | "message";
  read: boolean;
  created_at: string;
}

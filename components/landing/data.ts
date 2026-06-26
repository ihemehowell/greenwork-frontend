import type { FaqItem, LandingStat, StepItem, Testimonial, ValueProp } from './types'

export const stats: LandingStat[] = [
  { label: 'Jobs posted', value: '120+' },
  { label: 'Employers', value: '40+' },
  { label: 'Cities', value: '8' },
]

export const valueProps: ValueProp[] = [
  {
    title: 'Verified Opportunities',
    description: 'Curated listings from vetted employers ensuring quality job matches for every applicant.',
  },
  {
    title: 'Green Sector Focus',
    description: 'Specialized platform for solar, sustainability, climate tech, and environmental roles.',
  },
  {
    title: 'Career Growth',
    description: 'Access resources, industry insights, and advancement opportunities in green economy.',
  },
]

export const howItWorks: StepItem[] = [
  {
    step: 1,
    title: 'Browse Opportunities',
    description: 'Explore curated job listings in renewable energy, sustainability, and climate tech sectors.',
  },
  {
    step: 2,
    title: 'Build Your Profile',
    description: 'Create a comprehensive profile showcasing your skills and experience in the green economy.',
  },
  {
    step: 3,
    title: 'Apply and Connect',
    description: 'Apply directly to positions and connect with employers seeking green talent like you.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Chioma Okonkwo',
    role: 'Solar Engineer',
    avatar: 'CO',
    text: 'GreenWork helped me find my dream role in renewable energy. The platform made it so easy to connect with growing companies.',
    company: 'SunPower Nigeria',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Sustainability Manager',
    avatar: 'TA',
    text: 'Impressed with the quality of opportunities and the ease of application process. Highly recommended for green sector professionals.',
    company: 'EcoTech Solutions',
  },
  {
    name: 'Zainab Hassan',
    role: 'Environmental Scientist',
    avatar: 'ZH',
    text: 'A game-changer for Nigerian green careers. The platform connects you with serious employers in sustainability.',
    company: 'Climate Innovation Hub',
  },
]

export const faqItems: FaqItem[] = [
  {
    question: 'Is GreenWork free to use?',
    answer: 'Yes, GreenWork is completely free for job seekers. Browse, apply, and connect with employers at no cost.',
  },
  {
    question: 'What sectors are covered?',
    answer: 'We focus on solar energy, wind power, sustainability, climate tech, waste management, and all environmental sectors.',
  },
  {
    question: 'How do I apply for jobs?',
    answer: 'Create an account, build your profile, browse opportunities, and click apply. Employers will review your application.',
  },
  {
    question: 'Can I post jobs as an employer?',
    answer: 'Yes. Employers can create an account and post opportunities to reach qualified green sector professionals.',
  },
]

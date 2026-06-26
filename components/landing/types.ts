export type LandingStat = {
  label: string
  value: string
}

export type ValueProp = {
  title: string
  description: string
}

export type StepItem = {
  step: number
  title: string
  description: string
}

export type Testimonial = {
  name: string
  role: string
  avatar: string
  text: string
  company: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type FeaturedJob = {
  _id: string
  category?: string
  location?: string
  title: string
  description: string
}

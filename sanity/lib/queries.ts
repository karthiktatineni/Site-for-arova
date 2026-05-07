import { groq } from 'next-sanity'

export const architectsQuery = groq`*[_type == "architect"] {
  _id,
  name,
  "slug": slug.current,
  role,
  image,
  department,
  experience,
  designation,
  expertise
}`

export const architectByIdQuery = groq`*[_type == "architect" && slug.current == $slug][0] {
  ...,
  "qualifications": qualifications[] {
    year,
    detail
  },
  "portfolio": *[_type == "project" && references(^._id)] {
    title,
    category,
    mainImage,
    "slug": slug.current
  }
}`

export const projectsQuery = groq`*[_type == "project"] {
  _id,
  title,
  "slug": slug.current,
  category,
  mainImage
}`

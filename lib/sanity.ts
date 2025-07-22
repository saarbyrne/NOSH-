import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: "your-project-id", // Replace with your Sanity project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Helper functions for fetching data
export async function getArticles() {
  return client.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category->{name, slug},
      featuredImage,
      readTime,
      publishedAt,
      status
    }
  `)
}

export async function getArticle(slug: string) {
  return client.fetch(
    `
    *[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category->{name, slug, icon, color},
      featuredImage,
      readTime,
      publishedAt,
      intro,
      sections,
      status
    }
  `,
    { slug },
  )
}

export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] | order(name asc) {
      _id,
      name,
      slug,
      description,
      icon,
      color,
      "articleCount": count(*[_type == "article" && references(^._id) && status == "published"])
    }
  `)
}
